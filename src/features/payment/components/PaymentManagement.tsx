"use client";

import {
  InvoiceHistory,
  PaymentManagementHeader,
  PaymentMethodsList,
} from "@/features/payment";

export const PaymentManagement = () => {
  return (
    <div>
      <PaymentManagementHeader />
      <PaymentMethodsList />
      <InvoiceHistory />
    </div>
  );
};
