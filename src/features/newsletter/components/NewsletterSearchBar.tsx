"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNewsletterSearch } from "@/features/newsletter";
import { Search } from "lucide-react";

export const NewsletterSearchBar = () => {
  const { term, setTerm, triggerSearch } = useNewsletterSearch();

  return (
    <div className="flex gap-2 w-full max-w-md">
      <Input
        type="text"
        placeholder="Search here"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && triggerSearch()}
      />
      <Button onClick={triggerSearch} variant="default">
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>
    </div>
  );
};
