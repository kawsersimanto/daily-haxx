import { z } from "zod";

export const BillingSchema = z.object({
  // Example field
  title: z.string().min(1, "Title is required"),
});

export type BillingSchemaType = z.infer<typeof BillingSchema>;
