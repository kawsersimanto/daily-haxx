"use client";

import { usePollSelector } from "@/features/poll";

export const usePollCategory = () => {
  const category = usePollSelector.use.category();
  const setCategory = usePollSelector.use.setCategory();

  return {
    category,
    setCategory,
  };
};
