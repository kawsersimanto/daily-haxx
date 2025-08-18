export interface PaymentMethod {
  id: string;
  type: "visa" | "mastercard";
  lastFour: string;
  expiry: string;
  isPrimary: boolean;
}

export interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "paid" | "pending" | "failed";
  plan: string;
}

export interface Subscription {
  plan: string;
  amount: number;
  renewalDate: string;
  isActive: boolean;
}

export interface PaymentState {
  customerId: string | null;
  defaultPaymentMethod: string | null;
  subscription: Subscription;
  paymentMethods: PaymentMethod[];
  invoices: Invoice[];
}

export interface PaymentActions {
  setCustomerId: (id: string) => void;
  setDefaultPaymentMethod: (id: string) => void;
  cancelSubscription: () => void;
  addPaymentMethod: (method: Omit<PaymentMethod, "id">) => void;
  removePaymentMethod: (id: string) => void;
  setPrimaryPaymentMethod: (id: string) => void;
  updatePaymentMethod: (id: string, updates: Partial<PaymentMethod>) => void;
}

export type PaymentStore = PaymentState & PaymentActions;
