import { axiosInstance } from "@/shared/api";
import { Article } from "../model";

export const getArticlesApi = async (params: {
  _page?: number;
  _per_page?: number;
  title_like?: string;
}) => {
  const response = await axiosInstance.get("articles", { params });
  console.log("articles", response.data);

  return {
    data: response.data,
    total: Number(response.headers["x-total-count"]),
  };
};
export const addArticleApi = async (
  article: Omit<Article, "id">
): Promise<Article> => {
  const res = await axiosInstance.post<Article>("articles", article);
  return res.data;
};

export const editArticleApi = async (article: Article): Promise<Article> => {
  const res = await axiosInstance.put<Article>(
    `articles/${article.id}`,
    article
  );
  return res.data;
};

export const deleteArticleApi = async (id: string): Promise<void> => {
  await axiosInstance.delete(`articles/${id}`);
};
