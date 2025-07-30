import { z } from "zod";

export const PricingSchema = z.object({
  // Example field
  title: z.string().min(1, "Title is required"),
});

export type PricingSchemaType = z.infer<typeof PricingSchema>;
