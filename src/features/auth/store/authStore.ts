/* eslint-disable @typescript-eslint/no-empty-object-type */
import { create } from "zustand";

interface AuthState {
  // state
}

export const useAuthStore = create<AuthState>(() => ({
  // initial state
}));
