import { api } from "@/lib/axios/axiosInstance";
import { ApiParams } from "@/types";

export const getArticles = async ({
  page = 1,
  limit = 20,
  search = "",
  categoryId,
}: ApiParams = {}) => {
  const params: ApiParams = { page, limit, search };

  if (categoryId && categoryId !== "all") {
    params.categoryId = categoryId;
  }

  const response = await api.get("/articles", { params });
  return response?.data;
};

export const getArticle = async (slug: string) => {
  const response = await api.get(`/articles/slug/${slug}`);
  return response?.data;
};

export const getArticleCategories = async () => {
  const response = await api.get(`/article-category`);
  return response?.data;
};
