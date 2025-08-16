import valid from "card-validator";
import { z } from "zod";

const expiryDateValidation = z
  .string()
  .min(1, "Expiry date is required")
  .regex(/^\d{2}\s\/\s\d{2}$/, "Expiry date must be in MM / YY format")
  .refine((value) => {
    const [month, year] = value.split(" / ");
    const expiryValidation = valid.expirationDate(`${month}/${year}`);
    return expiryValidation.isValid;
  }, "Invalid or expired card");

export const paymentSchema = z.object({
  cardNumber: z
    .string()
    .min(1, "Card number is required")
    .regex(
      /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
      "Card number must be 16 digits in format XXXX XXXX XXXX XXXX"
    )
    .refine((value) => {
      const cleanNumber = value.replace(/\s/g, "");
      const cardValidation = valid.number(cleanNumber);
      return cardValidation.isValid;
    }, "Invalid card number"),
  expiryDate: expiryDateValidation,
  securityCode: z
    .string()
    .min(1, "Security code is required")
    .refine((value) => {
      const cvvValidation = valid.cvv(value);
      return cvvValidation.isValid;
    }, "Invalid security code"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email().min(1, "Email is required"),
  country: z
    .string()
    .min(1, "Country is required")
    .min(2, "Country must be at least 2 characters"),
});

export type PaymentFormData = z.infer<typeof paymentSchema>;

export const getCardType = (cardNumber: string): string => {
  const cleanNumber = cardNumber.replace(/\s/g, "");
  const cardValidation = valid.number(cleanNumber);
  return cardValidation.card?.type || "unknown";
};
