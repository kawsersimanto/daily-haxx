import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../../lib/createSelector";

type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
};

const authStore = create<AuthState>()(
  persist(
    immer((set) => ({
      token: null,
      setToken: (token: string) =>
        set((state) => {
          state.token = token;
        }),
      logout: () =>
        set((state) => {
          state.token = null;
        }),
    })),
    {
      name: "auth",
      partialize: (state) => ({ token: state.token }),
    }
  )
);

export const useAuthStore = createSelectors(authStore);
