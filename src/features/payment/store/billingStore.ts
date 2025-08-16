/* eslint-disable @typescript-eslint/no-empty-object-type */
import { create } from "zustand";

export interface BillingState {}

export const useBillingStore = create<BillingState>(() => ({
  // initial state
}));
