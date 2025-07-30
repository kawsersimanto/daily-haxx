"use client";

import { Card, CardDescription } from "@/components/ui/card";
import {
  ProgressBar,
  Step1,
  Step2,
  Step3,
  useOnboardingStep,
} from "@/features/onboarding";
import { Logo } from "@/shared";

export const OnboardingForm = () => {
  const { currentStep } = useOnboardingStep();

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
    <>
      <Card className="max-w-[590px] !px-5 mx-auto py-12 relative">
        <CardDescription className="max-w-[440px] mx-auto">
          <div className="flex justify-center mb-[38px]">
            <Logo />
          </div>
          <div className="mb-8">
            <ProgressBar currentStep={currentStep} totalSteps={3} />
          </div>
          {renderStep()}
        </CardDescription>
      </Card>
    </>
  );
};
