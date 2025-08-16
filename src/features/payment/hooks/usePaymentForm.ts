"use client";

import {
  getCardInfo,
  handleCardNumberChange,
  handleExpiryDateChange,
  PaymentFormData,
  paymentSchema,
} from "@/features/payment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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

  const [cvvLength, setCvvLength] = useState(3);

  const onSubmit = async (data: PaymentFormData) => {
    console.log(data);
  };

  const handleCardChange = (value: string, onChange: (val: string) => void) => {
    handleCardNumberChange(value, onChange);
    const info = getCardInfo(value);
    setCvvLength(info.cvvLength);
  };

  return {
    form,
    cvvLength,
    handleCardChange,
    handleExpiryDateChange,
    onSubmit,
  };
};
