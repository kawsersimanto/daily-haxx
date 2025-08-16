import valid from "card-validator";
import { z } from "zod";

const expiryDateValidation = z
  .string()
  .min(1, "Expiry date is required")
  .refine((value) => {
    const [month, year] = value.split(" / ");
    const validation = valid.expirationDate(`${month}/${year}`);
    return validation.isValid;
  }, "Invalid or expired card");

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .min(1, "Card number is required")
    .refine((value) => {
      const cleanNumber = value.replace(/\s/g, "");
      const validation = valid.number(cleanNumber);
      return validation.isValid;
    }, "Invalid card number"),

  expiryDate: expiryDateValidation,

  securityCode: z
    .string()
    .min(3, "Security code is required")
    .max(4, "Security code is required"),

  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
});

export type PaymentFormData = z.infer<typeof paymentSchema>;
