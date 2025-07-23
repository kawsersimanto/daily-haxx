"use client";

import Register from "@/components/forms/register/Register";
import Auth from "@/components/layout/Auth";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const handleClose = () => {
    router.push("/");
  };
  return (
    <Auth onClose={handleClose}>
      <Register />
    </Auth>
  );
};

export default RegisterPage;
