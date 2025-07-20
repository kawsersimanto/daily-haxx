import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address")
    .max(100, "Email address is too long"),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
