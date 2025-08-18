"use client";

import { usePaymentSelector } from "@/features/payment";

export function useSubscription() {
  const subscription = usePaymentSelector.use.subscription();
  const cancelSubscription = usePaymentSelector.use.cancelSubscription();

  return { subscription, cancelSubscription };
}
