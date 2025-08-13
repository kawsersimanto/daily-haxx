"use client";

import { useNewsletterSelector } from "@/features/newsletter";

export const usePagination = (totalPages: number = 1) => {
  const page = useNewsletterSelector.use.page();
  const setPage = useNewsletterSelector.use.setPage();

  return {
    page,
    setPage,
    totalPages,
  };
};
