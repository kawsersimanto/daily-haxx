/* eslint-disable @typescript-eslint/no-empty-object-type */
import { create } from "zustand";

export interface OnboardingState {}

export const useOnboardingStore = create<OnboardingState>(() => ({
  // initial state
}));
