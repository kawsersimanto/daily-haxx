"use client";

import { usePaymentSelector } from "@/features/payment";

export function usePaymentMethods() {
  const paymentMethods = usePaymentSelector.use.paymentMethods();
  const addPaymentMethod = usePaymentSelector.use.addPaymentMethod();
  const removePaymentMethod = usePaymentSelector.use.removePaymentMethod();
  const setPrimaryPaymentMethod =
    usePaymentSelector.use.setPrimaryPaymentMethod();
  const updatePaymentMethod = usePaymentSelector.use.updatePaymentMethod();

  return {
    paymentMethods,
    addPaymentMethod,
    removePaymentMethod,
    setPrimaryPaymentMethod,
    updatePaymentMethod,
  };
}
