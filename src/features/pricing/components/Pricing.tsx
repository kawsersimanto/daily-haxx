"use client";

import { SectionHeader } from "@/components/section-header/SectionHeader";
import {
  PlanList,
  plans,
  PlanToggle,
  usePricingToggle,
} from "@/features/pricing";

export const Pricing = () => {
  const { isYearly, togglePricing } = usePricingToggle();

  const currentPlans = isYearly ? plans.yearly : plans.monthly;

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <SectionHeader title="Choose Your Plan">
        Stay informed. Go deeper. Pick your access.
      </SectionHeader>

      <PlanToggle isYearly={isYearly} onToggle={togglePricing} />
      <PlanList plans={currentPlans} />
    </section>
  );
};
