import { api } from "@/lib/axios/axiosInstance";
import { ApiParams } from "@/types";

export const getArticles = async ({
  page = 1,
  limit = 20,
  search = "",
}: ApiParams = {}) => {
  console.log(search);
  const response = await api.get("/articles", {
    params: { page, limit, search },
  });

  return response.data;
};

export const getArticle = async (id: string) => {
  const response = await api.get(`/articles/${id}`);
  return response?.data;
};
