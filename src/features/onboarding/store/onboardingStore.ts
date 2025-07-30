import { OnboardingData, OnboardingStore } from "@/features/onboarding";
import { createSelectors } from "@/lib/createSelector";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const initialData: OnboardingData = {
  firstName: "",
  lastName: "",
  jobLevel: "",
  jobFunction: "",
  companyName: "",
  companyIndustry: "",
  companySize: "",
  postalCode: "",
};

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      currentStep: 1,
      data: initialData,

      setCurrentStep: (step) => set({ currentStep: step }),

      updateData: (newData) =>
        set((state) => ({
          data: { ...state.data, ...newData },
        })),

      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, 3),
        })),

      previousStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1),
        })),

      resetForm: () =>
        set({
          data: initialData,
        }),
    }),
    {
      name: "onboarding-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useOnboardingSelector = createSelectors(useOnboardingStore);
