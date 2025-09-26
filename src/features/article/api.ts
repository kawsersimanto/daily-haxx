import { api } from "@/lib/axios/axiosInstance";

export const getArticles = async () => {
  const response = await api.get("/articles");
  return response?.data;
};

export const getArticle = async (id: string) => {
  const response = await api.get(`/articles/${id}`);
  return response?.data;
};
