import { useAuthSelector } from "@/features/auth";

export const useAuthSteps = () => {
  return {
    currentStep: useAuthSelector.use.currentStep(),
    goToStep: useAuthSelector.use.goToStep(),
    nextStep: useAuthSelector.use.nextStep(),
    prevStep: useAuthSelector.use.prevStep(),
    hydrated: useAuthSelector.use.hydrated(),
  };
};
