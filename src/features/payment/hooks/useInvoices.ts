"use client";

import { usePaymentSelector } from "@/features/payment";

export function useInvoices() {
  const invoices = usePaymentSelector.use.invoices();
  return { invoices };
}
