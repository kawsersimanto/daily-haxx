import { useOnboardingSelector } from "@/features/onboarding";

export function useOnboardingStep() {
  const currentStep = useOnboardingSelector.use.currentStep();
  const nextStep = useOnboardingSelector.use.nextStep();
  const previousStep = useOnboardingSelector.use.previousStep();
  const setCurrentStep = useOnboardingSelector.use.setCurrentStep();

  return { currentStep, nextStep, previousStep, setCurrentStep };
}
