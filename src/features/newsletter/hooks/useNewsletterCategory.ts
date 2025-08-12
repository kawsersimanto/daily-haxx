"use client";

import { useNewsletterSelector } from "@/features/newsletter";

export const useNewsletterCategory = () => {
  const category = useNewsletterSelector.use.category();
  const setCategory = useNewsletterSelector.use.setCategory();

  return {
    category,
    setCategory,
  };
};
