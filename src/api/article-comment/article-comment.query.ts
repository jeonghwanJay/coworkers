import {
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";

import {
  CreateArticleCommentRequest,
  UpdateArticleCommentRequest,
  CreateArticleCommentResponse,
  UpdateArticleCommentResponse,
} from "./article-comment.schema";

import {
  getArticleComment,
  createArticleComment,
  updateArticleComment,
  deleteArticleComment,
} from "./article-comment.service";

type GetArticleCommentParams = {
  limit: number;
  cursor?: number;
};

type CreateArticleCommentParams = {
  articleId: string;
  body: CreateArticleCommentRequest;
};

type EditArticleCommentParams = {
  commentId: string;
  body: UpdateArticleCommentRequest;
};

// 게시글 댓글 무한 스크롤
export const useInfiniteArticleComments = (
  articleId: string,
  params: GetArticleCommentParams,
) => {
  return useInfiniteQuery({
    queryKey: ["articleComment", articleId],
    queryFn: ({ pageParam }: { pageParam?: number }) =>
      getArticleComment(articleId, {
        ...params,
        cursor: pageParam,
      }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: undefined,
    enabled: !!articleId,
  });
};

// 게시글 댓글 작성
export const useCreateArticleComment = () => {
  const queryClient = useQueryClient();

  return useMutation<
    CreateArticleCommentResponse,
    Error,
    CreateArticleCommentParams
  >({
    mutationFn: ({ articleId, body }) => createArticleComment(articleId, body),

    onSuccess: (_, { articleId }) => {
      queryClient.invalidateQueries({ queryKey: ["article"] });
      queryClient.invalidateQueries({
        queryKey: ["articleComment", articleId],
      });
    },
  });
};

// 댓글 수정하기
export const useEditArticleComment = () => {
  const queryClient = useQueryClient();

  return useMutation<
    UpdateArticleCommentResponse,
    Error,
    EditArticleCommentParams
  >({
    mutationFn: ({ commentId, body }) => updateArticleComment(commentId, body),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articleComment"] });
    },
  });
};

// 댓글 삭제하기
export const useDeleteArticleComment = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, Error, string>({
    mutationFn: (commentId) => deleteArticleComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articleComment"] });
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
  });
};
