import { z } from "zod";

export const step1Schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

export const step2Schema = z.object({
  jobLevel: z.string().min(1, "Please select your job level"),
  jobFunction: z.string().min(1, "Please select your job function"),
  companyName: z.string().min(1, "Company name is required"),
});

export const step3Schema = z.object({
  companyIndustry: z.string().min(1, "Please select your company industry"),
  companySize: z.string().min(1, "Please select your company size"),
  postalCode: z.string().min(1, "Postal code is required"),
});

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;
