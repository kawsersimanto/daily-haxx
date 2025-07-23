import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../createSelector";

type FormData = {
  firstName: string;
  lastName: string;
  jobLevel: string;
  jobFunction: string;
  company: string;
  industry: string;
  companySize: string;
  postalCode: string;
};

type OnBoardingState = FormData & {
  totalSteps: number;
  currentStep: number;
  isHydrated: boolean;
  progress: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  updateFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
  setHydrated: (hydrated: boolean) => void;
  clearStorage: () => void;
};

const initialState: Omit<
  OnBoardingState,
  | "nextStep"
  | "prevStep"
  | "goToStep"
  | "updateFormData"
  | "resetForm"
  | "setHydrated"
  | "clearStorage"
> = {
  firstName: "",
  lastName: "",
  jobLevel: "",
  jobFunction: "",
  company: "",
  industry: "",
  companySize: "",
  postalCode: "",
  currentStep: 0,
  isHydrated: false,
  totalSteps: 3,
  progress: 0,
};

const useOnBoardingStore = create<OnBoardingState>()(
  persist(
    immer((set, get) => ({
      ...initialState,

      goToStep: (step) => {
        const { totalSteps } = get();
        if (step >= 0 && step < totalSteps) {
          set((state) => {
            state.currentStep = step;
            state.progress = Math.round((step / (totalSteps - 1)) * 100);
          });
        }
      },

      nextStep: () => {
        const { currentStep, totalSteps } = get();
        if (currentStep < totalSteps - 1) {
          set((state) => {
            state.currentStep = currentStep + 1;
            state.progress = Math.round(
              ((currentStep + 1) / (totalSteps - 1)) * 100
            );
          });
        }
      },

      prevStep: () => {
        const { currentStep, totalSteps } = get();
        if (currentStep > 0) {
          set((state) => {
            state.currentStep = currentStep - 1;
            state.progress = Math.round(
              ((currentStep - 1) / (totalSteps - 1)) * 100
            );
          });
        }
      },

      setHydrated: (hydrated) => {
        set((state) => {
          state.isHydrated = hydrated;
        });
      },

      updateFormData: (data) => {
        set((state) => {
          Object.assign(state, data);
        });
      },

      resetForm: () => {
        set(() => ({
          ...initialState,
        }));
      },

      clearStorage: () => {
        useOnBoardingStore.persist.clearStorage();
      },
    })),
    {
      name: "onboarding",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);

export const useOnBoardingSelector = createSelectors(useOnBoardingStore);
