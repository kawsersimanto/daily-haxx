"use client";

import {
  InvoiceHistory,
  PaymentManagementHeader,
  PaymentMethodsList,
  SubscriptionCard,
} from "@/features/payment";

export const PaymentManagement = () => {
  return (
    <div>
      <PaymentManagementHeader />
      <SubscriptionCard />
      <PaymentMethodsList />
      <InvoiceHistory />
    </div>
  );
};
