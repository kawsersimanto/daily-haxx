import { Plan, PlanCard } from "@/features/pricing";

interface PlanListProps {
  plans: Plan[];
}

export const PlanList = ({ plans }: PlanListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {plans.map((plan, idx) => (
        <PlanCard key={idx} plan={plan} />
      ))}
    </div>
  );
};
