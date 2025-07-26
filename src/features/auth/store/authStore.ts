import { AuthState, AuthStore } from "@/features/auth";
import { createSelectors } from "@/lib/createSelector";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState: AuthState = {
  email: "",
  currentStep: 0,
  totalSteps: 2,
  token: "",
  user: null,
  hydrated: false,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initialState,
      setEmail: (email) => set({ email }),
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),

      nextStep: () =>
        set((state) =>
          state.currentStep < state.totalSteps - 1
            ? { currentStep: state.currentStep + 1 }
            : state
        ),

      prevStep: () =>
        set((state) =>
          state.currentStep > 0 ? { currentStep: state.currentStep - 1 } : state
        ),

      goToStep: (step) =>
        set((state) => {
          if (step >= 0 && step < state.totalSteps) {
            return { currentStep: step };
          }
          return state;
        }),

      reset: () =>
        set({
          ...initialState,
          hydrated: true,
        }),

      setHydrated: (value) => set({ hydrated: value }),
    }),
    {
      name: "auth",
      partialize: (state) => ({
        token: state.token,
        user: state.user,
        email: state.email,
        currentStep: state.currentStep,
        totalSteps: state.totalSteps,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);

export const useAuthSelector = createSelectors(useAuthStore);
