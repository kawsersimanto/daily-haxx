import { api } from "@/lib/axios/axiosInstance";
import { ApiParams } from "@/types";

export const getPolls = async ({
  page = 1,
  limit = 20,
  search = "",
}: ApiParams = {}) => {
  console.log(search);
  const response = await api.get("/polls", {
    params: { page, limit, search },
  });

  return response.data;
};

export const getPoll = async (id: string) => {
  const response = await api.get(`/polls/${id}`);
  return response?.data;
};
