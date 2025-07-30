import { PlanToggleProps } from "@/features/pricing";
import { cn } from "@/lib/utils";

export const PlanToggle = ({ isYearly, onToggle }: PlanToggleProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex bg-background rounded-[8px] p-2.5 border border-border">
        <button
          onClick={onToggle}
          className={cn(
            `px-4 py-2 rounded-md text-sm font-medium ${
              !isYearly ? "bg-primary text-white" : "text-gray-700"
            }`
          )}
        >
          Monthly
        </button>
        <button
          onClick={onToggle}
          className={cn(
            `px-4 py-2 rounded-md text-sm font-medium ${
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
