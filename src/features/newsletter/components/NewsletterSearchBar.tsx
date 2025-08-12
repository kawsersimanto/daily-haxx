"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNewsletterSelector } from "@/features/newsletter";
import { useDebounce } from "@/hooks";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export const NewsletterSearchBar = () => {
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

  const handleSearchClick = () => {
    const trimmed = term.trim();
    setSearch(trimmed);
    console.log("Manual search:", trimmed);
  };

  return (
    <div className="flex gap-2 w-full max-w-md">
      <Input
        type="text"
        placeholder="Search here"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
      />
      <Button onClick={handleSearchClick} variant="default">
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>
    </div>
  );
};
