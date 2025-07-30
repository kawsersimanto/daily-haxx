import { useOnboardingSelector } from "@/features/onboarding";

export function useOnboardingData() {
  const data = useOnboardingSelector.use.data();
  const updateData = useOnboardingSelector.use.updateData();
  const resetForm = useOnboardingSelector.use.resetForm();

  return { data, updateData, resetForm };
}
