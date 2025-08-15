"use client";

import { ProfileFormValues, ProfileSchema } from "@/features/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useProfileForm = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      postCode: "",
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data);
  };
  return { form, onSubmit };
};
