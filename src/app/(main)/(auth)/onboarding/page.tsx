import OnBoarding from "@/components/forms/onboarding/OnBoarding";
import Logo from "@/components/logo/Logo";
import { Card, CardDescription } from "@/components/ui/card";

const OnBoardingPage = () => {
  return (
    <Card className="mx-auto py-12 relative max-w-[590px]">
      <CardDescription>
        <div className="flex justify-center mb-[38px]">
          <Logo />
        </div>
        <OnBoarding />
      </CardDescription>
    </Card>
  );
};

export default OnBoardingPage;
