import { z } from "zod";

export const jobLevelEnum = z.enum([
  "Intern",
  "Entry Level",
  "Mid Level",
  "Senior Level",
  "Manager",
  "Director",
  "Executive",
]);

export const jobFunctionEnum = z.enum([
  "Engineering",
  "Design",
  "Marketing",
  "Sales",
  "Product",
  "Human Resources",
  "Finance",
  "Operations",
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
  jobLevel: jobLevelEnum,
  jobFunction: jobFunctionEnum,
  company: z.string().trim().min(1, { message: "Company is required" }),
  companySize: z
    .string()
    .trim()
    .min(1, { message: "Company Size is required" }),
  industry: z.string().trim().min(1, { message: "Industry Size is required" }),
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

export const personalInfoSchema = authSchema.pick({
  firstName: true,
  lastName: true,
});

export const jobDetailsSchema = authSchema.pick({
  jobLevel: true,
  jobFunction: true,
  company: true,
});

export type OtpFormValues = z.infer<typeof otpSchema>;
export type AuthFormValues = z.infer<typeof authSchema>;
export type EmailFormValues = z.infer<typeof emailSchema>;
export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;
export type JobDetailsFormValues = z.infer<typeof jobDetailsSchema>;

export const jobLevels = jobLevelEnum.options;
export const jobFunctions = jobFunctionEnum.options;
