import * as z from "zod";

export const sampleSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  agreeToTerms: z.boolean().refine((v) => v === true, {
    message: "You must accept the terms",
  }),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  country: z.string().nonempty("Country is required"),
  otp: z.string().length(6, "OTP must be 6 digits"),
});

export type FormData = z.infer<typeof sampleSchema>;
