export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  email: string;
  currentStep: number;
  totalSteps: number;
  token: string;
  user: User | null;
  hydrated: boolean;
}

export interface AuthActions {
  setEmail: (email: string) => void;
  setToken: (token: string) => void;
  setUser: (user: User | null) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
  setHydrated: (value: boolean) => void;
}

export type AuthStore = AuthState & AuthActions;
