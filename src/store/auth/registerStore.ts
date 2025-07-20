import { EmailFormValues, OtpFormValues } from "@/schemas/authSchema";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../selector";

type RegisterState = {
  totalSteps: number;
  currentStep: number;
  progress: number;
  isHydrated: boolean;
  setEmail: () => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  updateFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
  setHydrated: (hydrated: boolean) => void;
  canGoNext: () => boolean;
  canGoPrev: () => boolean;
};

const initialState: EmailFormValues & OtpFormValues = {
  email: "",
};

const registerStore = create<RegisterState>()(
  persist(
    immer((set, get) => ({
      ...initialState,
      currentStep: 0,
      isHydrated: false,
      totalSteps: 3,
      progress: 0,

      goToStep: (step) => {
        const { totalSteps } = get();
        if (step < totalSteps && step >= 0) {
          set({ currentStep: step });
        }
      },

      nextStep: () => {
        const { currentStep, totalSteps } = get();
        if (currentStep < totalSteps - 1) {
          set({ currentStep: currentStep + 1 });
        }
      },

      prevStep: () => {
        const { currentStep } = get();

        if (currentStep >= 0) {
          set({ currentStep: currentStep - 1 });
        }
      },

      setHydrated: (hydrated) => {
        set({ isHydrated: hydrated });
      },

      resetForm: () => {
        set({
          ...initialState,
          currentStep: 0,
        });
      },

      updateFormData: (data) => {
        set((state) => ({ ...state, ...data }));
      },

      canGoNext: () => {
        const { totalSteps, currentStep } = get();

        return currentStep < totalSteps - 1;
      },

      canGoPrev: () => {
        const { currentStep } = get();

        return currentStep <= 0;
      },
    })),
    {
      name: "register",
      onRehydrateStorage: (state) => {
        state?.setHydrated(true);
      },
    }
  )
);

export const useRegisterStore = createSelectors(registerStore);
