import { useAuthSelector } from "../store/authStore";

export function useAuthEmail() {
  return {
    email: useAuthSelector.use.email(),
    setEmail: useAuthSelector.use.setEmail(),
    hydrated: useAuthSelector.use.hydrated(),
  };
}
