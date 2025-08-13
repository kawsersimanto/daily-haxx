"use client";

import { useArticleSelector } from "@/features/article";

export const usePagination = (totalPages: number = 1) => {
  const page = useArticleSelector.use.page();
  const setPage = useArticleSelector.use.setPage();

  return {
    page,
    setPage,
    totalPages,
  };
};
