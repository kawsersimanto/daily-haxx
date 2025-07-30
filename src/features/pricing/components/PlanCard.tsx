import { Button } from "@/components/ui/button";
import { PlanCardProps } from "@/features/pricing";
import { CircleCheckBig } from "lucide-react";

export const PlanCard = ({ plan, buttonVariant }: PlanCardProps) => {
  return (
    <div className="border border-border rounded-xl bg-background shadow-sm flex flex-col pb-6">
      <div className="bg-primary text-white rounded-t-[8px] md:px-10 px-5 py-5 flex flex-col gap-5 relative">
        <h3 className="text-2xl font-bold uppercase leading-6">{plan.name}</h3>
        <p className="text-[40px] leading-10 font-medium font-space-grotesk flex items-center gap-2.5">
          ${plan.price}
          <span className="block md:h-[37px] h-7 w-[1px] bg-white"></span>
          <span className="md:text-[22px] text-lg">{plan.duration}</span>
        </p>
        {plan.discount && (
          <span className="bg-soft-green top-5 right-10 text-black text-sm font-medium px-2.5 py-1.5 rounded-[40px] absolute">
            {plan.discount}
          </span>
        )}
      </div>
      <ul className="md:px-10 px-5 py-10.5 flex flex-col gap-4">
        {plan.features.map((feature, id) => (
          <li
            key={id}
            className="flex items-center gap-2 md:text-lg text-sm text-surface-dark"
          >
            <CircleCheckBig className="text-primary" size={18} /> {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex justify-center">
        <Button
          variant={buttonVariant}
          className="md:text-lg text-sm font-medium uppercase py-2.5 px-11 h-auto"
        >
          {plan.cta}
        </Button>
      </div>
    </div>
  );
};
