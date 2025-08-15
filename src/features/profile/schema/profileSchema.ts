import { z } from "zod";

export const ProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email().min(1, "Email is required"),
  postCode: z.string().min(1, "Post code is required"),
});

export const PreferenceSchema = z.object({
  weekly: true,
  daily: true,
});

export type ProfileFormValues = z.infer<typeof ProfileSchema>;
export type PreferenceFormValues = z.infer<typeof PreferenceSchema>;
