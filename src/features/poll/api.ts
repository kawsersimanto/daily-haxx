import { api } from "@/lib/axios/axiosInstance";
import { ApiParams } from "@/types";

export const getPolls = async ({
  page = 1,
  limit = 20,
  searchTerm = "",
  categoryId,
}: ApiParams = {}) => {
  const params: Record<string, string | number> = { page, limit };

  if (searchTerm && searchTerm.trim() !== "") {
    params.question = searchTerm;
  }

  if (categoryId && categoryId !== "all") {
    params.categoryId = categoryId;
  }

  const response = await api.get("/polls", { params });
  return response?.data;
};

export const getPoll = async (id: string) => {
  const response = await api.get(`/polls/${id}`);
  return response?.data;
};

export const getPollCategories = async () => {
  const response = await api.get(`/poll-category`);
  return response?.data;
};
