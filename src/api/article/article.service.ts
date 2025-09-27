import { api } from "../fetcher";

import {
  CreateArticleRequest,
  CreateArticleResponse,
  GetArticleDetailResponse,
  GetArticleListResponse,
  LikeArticleResponse,
  UpdateArticleRequest,
  UpdateArticleResponse,
} from "./article.schema";

const getBasePath = (articleId?: string) => {
  return articleId != null ? `/articles/${articleId}` : "/articles";
};

export const getArticleList = (params?: {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  keyword?: string;
}) => {
  return api.get<GetArticleListResponse>(getBasePath(), {
    params,
  });
};

export const getArticleDetail = (articleId: string) => {
  return api.get<GetArticleDetailResponse>(getBasePath(articleId));
};

export const createArticle = (body: CreateArticleRequest) => {
  return api.post<CreateArticleResponse>(getBasePath(), body);
};

export const updateArticle = (
  articleId: string,
  body: UpdateArticleRequest,
) => {
  return api.patch<UpdateArticleResponse>(getBasePath(articleId), body);
};

export const deleteArticle = (articleId: string) => {
  return api.delete(getBasePath(articleId));
};

export const addLikeArticle = (articleId: string) => {
  return api.post<LikeArticleResponse>(`${getBasePath(articleId)}/like`, null);
};

export const deleteLikeArticle = (articleId: string) => {
  return api.delete<LikeArticleResponse>(
    getBasePath(`${getBasePath(articleId)}/like`),
  );
};
