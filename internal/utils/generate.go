package utils

import (
	"crypto/aes"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"log"
	"strings"

	"github.com/maTORIx/kakeibo.fdbm.dev/configs"
)

var aesKey *[32]byte

func GenerateHash(lowPassword, salt string) string {
	hash := sha256.Sum256([]byte(lowPassword + salt))
	return hex.EncodeToString(hash[:])
}

func EncodeAES(text string) string {
	var result []byte
	if aesKey == nil {
		key := sha256.Sum256([]byte(configs.SecretKey))
		aesKey = &key
	}
	cipher, err := aes.NewCipher(aesKey[:])
	if err != nil {
		log.Fatal("error: invalid aesKey length")
	}
	cipher.Encrypt(result, []byte(text))
	return base64.StdEncoding.EncodeToString(result)
}

func EncodeJWT[H any, P any](header *H, payload *P) (string, error) {
	headerJson, err := EncodeBase64Json[H](header)
	if err != nil {
		return "", err
	}
	payloadJson, err := json.Marshal(payload)
	if err != nil {
		return "", err
	}
	headerBase64 := base64.URLEncoding.EncodeToString(headerJson)
	payloadBase64 := base64.URLEncoding.EncodeToString(payloadJson)
	tmp := headerBase64 + "." + payloadBase64
	signature := EncodeAES(tmp)
	result := tmp + "." + signature
	return result, nil
}

func DecodeJWT[H any, P any](jwt string) (*H, *P, error) {
	jwtElements := strings.Split(jwt, ".")
	if len(jwtElements) != 3 {
		return nil, nil, fmt.Errorf("error: invalid jwt")
	}
	trueSignature := EncodeAES(strings.Join(jwtElements[:2], "."))
	if jwtElements[2] != trueSignature {
		return nil, nil, fmt.Errorf("error: invalid jwt signature")
	}
	header, err := DecodeBase64Json[H](jwtElements[0])
	if err != nil {
		return nil, nil, fmt.Errorf("error: invalid jwt header")
	}
	payload, err := DecodeBase64Json[P](jwtElements[1])
	if err != nil {
		return nil, nil, fmt.Errorf("error: invalid jwt payload")
	}

	return header, payload, nil
}

func DecodeBase64Json[T any](text string) (*T, error) {
	tmp, err := base64.URLEncoding.DecodeString(text)
	if err != nil {
		return nil, fmt.Errorf("error: invalid jwt header")
	}
	var result T
	if err := json.Unmarshal(tmp, result); err != nil {
		return nil, fmt.Errorf("error: invalid jwt header")
	}
	return &result, nil
}

func EncodeBase64Json[T any](value *T) (string, error) {
	j, err := json.Marshal(value)
	if err != nil {
		return "", err
	}
	return base64.URLEncoding.EncodeToString(j), nil
}
