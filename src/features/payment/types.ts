interface PaymentState {
  customerId: string | null;
  defaultPaymentMethod: string | null;
}

interface PaymentActions {
  setCustomerId: (id: string) => void;
  setDefaultPaymentMethod: (id: string) => void;
}

export type PaymentStore = PaymentState & PaymentActions;
