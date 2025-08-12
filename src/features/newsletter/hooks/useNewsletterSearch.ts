"use client";

import { useNewsletterSelector } from "@/features/newsletter";
import { useDebounce } from "@/hooks";
import { useEffect, useState } from "react";

export const useNewsletterSearch = () => {
  const setSearch = useNewsletterSelector.use.setSearch();
  const storeSearch = useNewsletterSelector.use.search();

  const [term, setTerm] = useState(storeSearch);
  const debouncedTerm = useDebounce(term, 400);

  useEffect(() => {
    const trimmed = debouncedTerm.trim();
    if (trimmed !== "") {
      setSearch(trimmed);
      console.log("Debounced value:", trimmed);
    }
  }, [debouncedTerm, setSearch]);

  const triggerSearch = () => {
    const trimmed = term.trim();
    setSearch(trimmed);
    console.log("Manual search:", trimmed);
  };

  return {
    term,
    setTerm,
    triggerSearch,
  };
};
