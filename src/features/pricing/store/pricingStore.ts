/* eslint-disable @typescript-eslint/no-empty-object-type */
import { create } from "zustand";

export interface PricingState {}

export const usePricingStore = create<PricingState>(() => ({
  // initial state
}));
