import { Progress } from "@/components/ui/progress";

const OnBoarding = () => {
  return (
    <div className="max-w-[440px] mx-auto">
      <div>
        <p className="mb-2">Step 1 of 3</p>
        <Progress value={10} className="w-full h-[5px] rounded-[20px]" />
      </div>
    </div>
  );
};

export default OnBoarding;
