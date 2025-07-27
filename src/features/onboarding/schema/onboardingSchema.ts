import { z } from "zod";

export const OnboardingSchema = z.object({
  // Example field
  title: z.string().min(1, "Title is required"),
});

export type OnboardingSchemaType = z.infer<typeof OnboardingSchema>;
