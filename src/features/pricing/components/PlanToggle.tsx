import { PlanToggleProps } from "@/features/pricing";
import { cn } from "@/lib/utils";

export const PlanToggle = ({ isYearly, onToggle }: PlanToggleProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex bg-background rounded-[8px] md:p-2.5 p-1.5 border border-border">
        <button
          onClick={onToggle}
          className={cn(
            `md:px-8.5 px-6 md:py-2.5 py-1.5 rounded-md text-sm font-medium cursor-pointer font-space-grotesk ${
              !isYearly ? "bg-primary text-white" : "text-gray-700"
            }`
          )}
        >
          Monthly
        </button>
        <button
          onClick={onToggle}
          className={cn(
            `md:px-8.5 px-6 md:py-2.5 py-1.5 rounded-md text-sm font-medium cursor-pointer font-space-grotesk ${
              isYearly ? "bg-primary text-white" : "text-gray-700"
            }`
          )}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};
