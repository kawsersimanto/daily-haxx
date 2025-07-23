import { z } from "zod";

export const JobLevelEnum = z.enum([
  "Entry Level",
  "Mid Level",
  "Senior Level",
  "Executive",
]);

export const JobFunctionEnum = z.enum([
  "Engineering",
  "Marketing",
  "Sales",
  "HR",
  "Operations",
]);

export const CompanySizeEnum = z.enum([
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1000+",
]);

export const IndustryEnum = z.enum([
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Other",
]);

export const authSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }),
  otp: z
    .string()
    .length(6, "OTP must be 6 digits")
    .refine((val) => /^\d+$/.test(val), {
      message: "OTP must contain only numbers",
    }),
  firstName: z.string().trim().min(1, { message: "First name is required" }),
  lastName: z.string().trim().min(1, { message: "Last name is required" }),
  jobLevel: JobLevelEnum,
  jobFunction: JobFunctionEnum,
  company: z.string().trim().min(1, { message: "Company is required" }),
  companySize: CompanySizeEnum,
  industry: IndustryEnum,
  postalCode: z
    .string()
    .trim()
    .min(3, { message: "Postal code is too short" })
    .max(10, { message: "Postal code is too long" }),
});

export const emailSchema = authSchema.pick({
  email: true,
});

export const otpSchema = authSchema.pick({
  otp: true,
});

export const personalInfo = authSchema.pick({
  firstName: true,
  lastName: true,
});

export type OtpFormValues = z.infer<typeof otpSchema>;
export type AuthFormValues = z.infer<typeof authSchema>;
export type EmailFormValues = z.infer<typeof emailSchema>;
export type PersonalInfoFormValues = z.infer<typeof personalInfo>;
