"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDrugSearch } from "@/features/drug";
import { Search } from "lucide-react";

export const DrugHeader = () => {
  const { searchQuery, setSearchQuery } = useDrugSearch();

  return (
    <div className="bg-card border-border border-b md:p-6 p-4 rounded-t-xl">
      <div className="flex md:flex-row flex-col md:items-center justify-between gap-4">
        <h1 className="md:text-[28px] text-xl font-semibold font-work-sans text-primary">
          Drug Database
        </h1>
        <div className="flex sm:flex-row flex-col sm:items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 sm:w-64 w-full"
            />
          </div>
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};
