package controllers

import (
	"context"

	"github.com/bufbuild/connect-go"
)

func (s *KakeiboServer) SignIn(
	ctx context.Context,
	req *connect.Request[kakeibov1.SigninRequest],
)
