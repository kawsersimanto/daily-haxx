import { z } from "zod";

export const CatalystSchema = z.object({
  // Example field
  title: z.string().min(1, "Title is required"),
});

export type CatalystSchemaType = z.infer<typeof CatalystSchema>;
