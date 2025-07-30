"use client";

import { useState } from "react";

export const usePricingToggle = () => {
  const [isYearly, setIsYearly] = useState(false);
  const togglePricing = () => setIsYearly((prev) => !prev);

  return { isYearly, togglePricing };
};
