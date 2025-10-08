import { api } from "@/lib/axios/axiosInstance";

export const sendOtp = async (email: string) => {
  const response = await api.post("/otp/send", { email });
  return response?.data;
};
