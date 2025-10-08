import { api } from "@/lib/axios/axiosInstance";

export const sendOtp = async (email: string) => {
  const response = await api.post("/otp/send", { email });
  return response?.data;
};
export const verifyOtp = async (email: string, otp: string) => {
  const response = await api.post("/otp/verify", {
    email,
    otp: parseInt(otp, 10),
  });
  return response?.data;
};
