"use client";

import { useArticleSelector } from "@/features/article";
import { useDebounce } from "@/hooks";
import { useEffect, useState } from "react";

export const useArticleSearch = () => {
  const setSearch = useArticleSelector.use.setSearch();
  const storeSearch = useArticleSelector.use.search();

  const [term, setTerm] = useState(storeSearch);
  const debouncedTerm = useDebounce(term, 400);

  useEffect(() => {
    const trimmed = debouncedTerm.trim();
    setSearch(trimmed);
  }, [debouncedTerm, setSearch]);

  const triggerSearch = () => {
    const trimmed = term.trim();
    setSearch(trimmed);
  };

  return {
    term,
    setTerm,
    triggerSearch,
  };
};
