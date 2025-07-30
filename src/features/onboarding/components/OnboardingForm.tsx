"use client";

import {
  ProgressBar,
  Step1,
  Step2,
  Step3,
  useOnboardingStore,
} from "@/features/onboarding";

export const OnboardingForm = () => {
  const { currentStep } = useOnboardingStore();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">H</span>
            </div>
            <span className="font-semibold text-gray-900">HEXX Daily</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar currentStep={currentStep} totalSteps={3} />
        </div>

        {/* Step Content */}
        {renderStep()}
      </div>
    </div>
  );
};
