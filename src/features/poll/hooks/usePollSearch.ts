"use client";

import { usePollSelector } from "@/features/poll";
import { useDebounce } from "@/hooks";
import { useEffect, useState } from "react";

export const usePollSearch = () => {
  const setSearch = usePollSelector.use.setSearch();
  const storeSearch = usePollSelector.use.search();

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
