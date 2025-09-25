import { api } from "@/lib/axios/axiosInstance";

export const getArticles = async () => {
  const response = await api.get("/");
  return response;
};

export const getArticle = async (id: string) => {
  const response = await api.get(`/article/${id}`);
  return response;
};
