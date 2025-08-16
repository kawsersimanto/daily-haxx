"use client";

import {
  handleCardNumberChange,
  handleExpiryDateChange,
  PaymentFormData,
  paymentSchema,
} from "@/features/payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const usePaymentForm = () => {
  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: PaymentFormData) => {
    console.log(data);
  };

  return { form, handleCardNumberChange, handleExpiryDateChange, onSubmit };
};
