"use client";

import { useArticleSelector } from "@/features/article";

export const useArticleCategory = () => {
  const category = useArticleSelector.use.category();
  const setCategory = useArticleSelector.use.setCategory();

  return {
    category,
    setCategory,
  };
};
