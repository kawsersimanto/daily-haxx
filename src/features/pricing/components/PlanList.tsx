import { Plan, PlanCard } from "@/features/pricing";

interface PlanListProps {
  plans: Plan[];
}

export const PlanList = ({ plans }: PlanListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-13.5 gap-5">
      {plans.map((plan, id) => (
        <PlanCard
          key={id}
          plan={plan}
          buttonVariant={plan.price === 0 ? "outline" : "default"}
        />
      ))}
    </div>
  );
};
