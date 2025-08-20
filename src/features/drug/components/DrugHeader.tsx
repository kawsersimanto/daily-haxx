"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDrugSearch } from "@/features/drug";
import { Search } from "lucide-react";

export const DrugHeader = () => {
  const { searchQuery, setSearchQuery } = useDrugSearch();

  return (
    <div className="bg-white border-b border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Drug Database</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
