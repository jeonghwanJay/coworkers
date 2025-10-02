import { api } from "../fetcher";

import {
  CreateArticleCommentRequest,
  CreateArticleCommentResponse,
  GetArticleCommentResponse,
  UpdateArticleCommentRequest,
  UpdateArticleCommentResponse,
} from "./article-comment.schema";

type GetArticleCommentParams = {
  limit: number;
  cursor?: number;
};

const getArticlePath = (articleId?: string) => {
  return `/articles/${articleId}/comments`;
};

const getCommentPath = (commentId: string) => {
  return `/comments/${commentId}`;
};

export const getArticleComment = (
  articleId: string,
  params: GetArticleCommentParams,
) => {
  return api.get<GetArticleCommentResponse>(getArticlePath(articleId), {
    params,
  });
};

export const createArticleComment = (
  articleId: string,
  body: CreateArticleCommentRequest,
) => {
  return api.post<CreateArticleCommentResponse>(
    getArticlePath(articleId),
    body,
  );
};

export const updateArticleComment = (
  commentId: string,
  body: UpdateArticleCommentRequest,
) => {
  return api.patch<UpdateArticleCommentResponse>(
    getCommentPath(commentId),
    body,
  );
};

export const deleteArticleComment = (commentId: string) => {
  return api.delete(getCommentPath(commentId));
};
