"use client";

import { Button } from "@/components/ui/button";
import { useOnBoardingSelector } from "@/store/auth/onboardingStore";

const CompanyInfo = () => {
  const prevStep = useOnBoardingSelector.use.prevStep();
  return (
    <div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          prevStep();
        }}
        variant={"outline"}
        className="md:text-lg text-sm font-medium h-auto py-2.5 border-primary text-primary grow"
      >
        Previous
      </Button>
    </div>
  );
};

export default CompanyInfo;
