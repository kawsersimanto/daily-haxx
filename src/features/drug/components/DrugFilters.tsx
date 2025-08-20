"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDrugFilters } from "@/features/drug";
import { Filter, X } from "lucide-react";

export const DrugFilters = () => {
  const { filters, setFilter, removeFilter, clearAllFilters, activeFilters } =
    useDrugFilters();

  return (
    <div className="bg-card md:p-6 p-4 rounded-b-xl mb-4">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-4 h-4" />
        <span className="font-medium">Filter & Sort</span>
      </div>
      <div className="overflow-y-auto">
        <div className="flex gap-4 mb-4 lg:max-w-full max-w-[1024px]">
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              Disease Area
            </label>
            <Select
              value={filters.diseaseArea}
              onValueChange={(value) => setFilter("diseaseArea", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select disease area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Infectious Disease">
                  Infectious Disease
                </SelectItem>
                <SelectItem value="Oncology">Oncology</SelectItem>
                <SelectItem value="Cardiology">Cardiology</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Modality */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Modality</label>
            <Select
              value={filters.modality}
              onValueChange={(value) => setFilter("modality", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select modality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Biologic">Biologic</SelectItem>
                <SelectItem value="Small Molecule">Small Molecule</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mechanism */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Mechanism</label>
            <Select
              value={filters.mechanism}
              onValueChange={(value) => setFilter("mechanism", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select mechanism" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Agonist">Agonist</SelectItem>
                <SelectItem value="Antagonist">Antagonist</SelectItem>
                <SelectItem value="Inhibitor">Inhibitor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort by */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">Sort by</label>
            <Select
              value={filters.sortBy}
              onValueChange={(value) => setFilter("sortBy", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Brand name: A-Z">Brand name: A-Z</SelectItem>
                <SelectItem value="Brand name: Z-A">Brand name: Z-A</SelectItem>
                <SelectItem value="Company">Company</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* LTM Sales Range */}
          <div className="w-full">
            <label className="block text-sm font-medium mb-1">
              LTM Sales range
            </label>
            <Select
              value={filters.salesRange}
              onValueChange={(value) => setFilter("salesRange", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="$0.0B - $20.0B">$0.0B - $20.0B</SelectItem>
                <SelectItem value="$20.0B - $50.0B">$20.0B - $50.0B</SelectItem>
                <SelectItem value="$50.0B+">$50.0B+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium">Active filters:</span>
          {activeFilters.map((filter, index) => (
            <Badge
              key={index}
              variant="secondary"
              onClick={() => removeFilter(filter.key)}
              className="cursor-pointer"
            >
              <X className="w-3 h-3 ml-1" />
              {filter.label}
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-primary text-xs h-full py-1"
          >
            <X className="w-2 h-2 mr-1" />
            Clear filter
          </Button>
        </div>
      )}
    </div>
  );
};
