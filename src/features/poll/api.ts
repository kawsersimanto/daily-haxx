import { api } from "@/lib/axios/axiosInstance";
import { ApiParams } from "@/types";

export const getPolls = async ({
  page = 1,
  limit = 20,
  searchTerm = "",
}: ApiParams = {}) => {
  const response = await api.get("/polls", {
    params: { page, limit, searchTerm },
  });

  return response.data;
};

export const getPoll = async (id: string) => {
  const response = await api.get(`/polls/${id}`);
  return response?.data;
};
