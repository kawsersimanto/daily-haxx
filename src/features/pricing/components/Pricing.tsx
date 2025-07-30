"use client";

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
      <h1 className="text-3xl font-bold text-center text-green-900">
        Choose Your Plan
      </h1>
      <p className="text-center text-gray-600 mt-2 mb-6">
        Stay informed. Go deeper. Pick your access.
      </p>

      <PlanToggle isYearly={isYearly} onToggle={togglePricing} />
      <PlanList plans={currentPlans} />
    </section>
  );
};
