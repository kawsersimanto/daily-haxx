import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../createSelector";

type FormData = {
  email: string;
};

type RegisterState = {
  email: string;
  totalSteps: number;
  currentStep: number;
  isHydrated: boolean;
  setEmail: (email: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  updateFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
  setHydrated: (hydrated: boolean) => void;
  canGoNext: () => boolean;
  canGoPrev: () => boolean;
};

const initialState = {
  email: "",
  currentStep: 0,
  isHydrated: false,
  totalSteps: 2,
};

export const useRegisterStore = create<RegisterState>()(
  persist(
    immer((set, get) => ({
      ...initialState,

      setEmail: (email) => {
        set((state) => {
          state.email = email;
        });
      },

      goToStep: (step) => {
        const { totalSteps } = get();
        if (step < totalSteps && step >= 0) {
          set((state) => {
            state.currentStep = step;
          });
        }
      },

      nextStep: () => {
        const { currentStep, totalSteps } = get();
        if (currentStep < totalSteps - 1) {
          set((state) => {
            state.currentStep = currentStep + 1;
          });
        }
      },

      prevStep: () => {
        const { currentStep } = get();
        if (currentStep > 0) {
          set((state) => {
            state.currentStep = currentStep - 1;
          });
        }
      },

      setHydrated: (hydrated) => {
        set((state) => {
          state.isHydrated = hydrated;
        });
      },

      resetForm: () => {
        set((state) => {
          state.email = "";
          state.currentStep = 0;
        });
      },

      updateFormData: (data) => {
        set((state) => {
          if (data.email !== undefined) state.email = data.email;
        });
      },

      canGoNext: () => {
        const { totalSteps, currentStep } = get();

        return currentStep < totalSteps - 1;
      },

      canGoPrev: () => {
        const { currentStep } = get();

        return currentStep > 0;
      },
    })),
    {
      name: "register",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);

export const useRegisterSelector = createSelectors(useRegisterStore);
