export interface OnboardingData {
  // Step 1
  firstName: string;
  lastName: string;

  // Step 2
  jobLevel: string;
  jobFunction: string;
  companyName: string;

  // Step 3
  companyIndustry: string;
  companySize: string;
  postalCode: string;
}

export interface OnboardingState {
  currentStep: number;
  data: OnboardingData;
}
export interface OnboardingActions {
  setCurrentStep: (step: number) => void;
  updateData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  previousStep: () => void;
  resetForm: () => void;
}

export type OnboardingStore = OnboardingState & OnboardingActions;

export interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}
