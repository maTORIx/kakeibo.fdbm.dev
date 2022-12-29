package main

import (
	"net/http"

	"github.com/maTORIx/kakeibo.fdbm.dev/gen/kakeibo/v1/kakeibov1connect"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

type ChatServer struct{}

func main() {
	server := &ChatServer{}
	mux := http.NewServeMux()
	path, handler := kakeibov1connect.NewKakeiboServiceHandler(server)
	mux.Handle(path, handler)
	tmp := &http.Server{
		Addr:    "localhost:8080",
		Handler: h2c.NewHandler(mux, &http2.Server{}),
	}
	tmp.ListenAndServe()
}
