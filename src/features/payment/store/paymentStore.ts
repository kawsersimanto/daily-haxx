import { PaymentStore } from "@/features/payment";
import { create } from "zustand";

export const usePaymentStore = create<PaymentStore>((set) => ({
  customerId: null,
  defaultPaymentMethod: null,
  setCustomerId: (id) => set({ customerId: id }),
  setDefaultPaymentMethod: (id) => set({ defaultPaymentMethod: id }),
}));
