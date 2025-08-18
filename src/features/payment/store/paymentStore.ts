import type { PaymentStore } from "@/features/payment";
import { createSelectors } from "@/lib/createSelector";
import { create } from "zustand";

export const usePaymentStore = create<PaymentStore>((set) => ({
  customerId: null,
  defaultPaymentMethod: null,

  subscription: {
    plan: "Premium",
    amount: 20.0,
    renewalDate: "Aug 30, 2025",
    isActive: true,
  },

  paymentMethods: [
    {
      id: "1",
      type: "visa",
      lastFour: "4567",
      expiry: "04/28",
      isPrimary: true,
    },
    {
      id: "2",
      type: "visa",
      lastFour: "4567",
      expiry: "04/28",
      isPrimary: false,
    },
    {
      id: "3",
      type: "mastercard",
      lastFour: "4567",
      expiry: "04/28",
      isPrimary: false,
    },
  ],

  invoices: [
    {
      id: "1",
      date: "Mar 30, 2025",
      amount: 10.0,
      status: "paid",
      plan: "Premium",
    },
    {
      id: "2",
      date: "Mar 30, 2025",
      amount: 10.0,
      status: "paid",
      plan: "Premium",
    },
    {
      id: "3",
      date: "Mar 30, 2025",
      amount: 10.0,
      status: "paid",
      plan: "Premium",
    },
  ],

  setCustomerId: (id) => set({ customerId: id }),
  setDefaultPaymentMethod: (id) => set({ defaultPaymentMethod: id }),

  cancelSubscription: () =>
    set((state) => ({
      subscription: { ...state.subscription, isActive: false },
    })),

  addPaymentMethod: (method) =>
    set((state) => ({
      paymentMethods: [
        ...state.paymentMethods,
        { ...method, id: crypto.randomUUID() },
      ],
    })),

  removePaymentMethod: (id) =>
    set((state) => ({
      paymentMethods: state.paymentMethods.filter((m) => m.id !== id),
    })),

  setPrimaryPaymentMethod: (id) =>
    set((state) => ({
      paymentMethods: state.paymentMethods.map((m) => ({
        ...m,
        isPrimary: m.id === id,
      })),
    })),

  updatePaymentMethod: (id, updates) =>
    set((state) => ({
      paymentMethods: state.paymentMethods.map((m) =>
        m.id === id ? { ...m, ...updates } : m
      ),
    })),
}));

export const usePaymentSelector = createSelectors(usePaymentStore);
