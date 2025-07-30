"use client";

import { Card, CardDescription } from "@/components/ui/card";
import {
  ProgressBar,
  Step1,
  Step2,
  Step3,
  useOnboardingStore,
} from "@/features/onboarding";
import { Logo } from "@/shared";

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
    <>
      <Card className=" max-w-[440px] !px-5 mx-auto py-12 relative">
        <CardDescription>
          <div className="flex justify-center mb-[38px]">
            <Logo />
          </div>
          {/* Progress Bar */}
          <div className="mb-8">
            <ProgressBar currentStep={currentStep} totalSteps={3} />
          </div>

          {/* Step Content */}
          {renderStep()}
        </CardDescription>
      </Card>
    </>
  );
};
