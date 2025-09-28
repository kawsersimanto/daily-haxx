"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface FilterOption {
  label: string;
  value: string;
}

interface FilterDropdownProps {
  category: string;
  setCategory: (value: string) => void;
  options: FilterOption[];
  disabled?: boolean;
}

export const FilterDropdown = ({
  category,
  setCategory,
  options,
  disabled,
}: FilterDropdownProps) => {
  return (
    <Select value={category} onValueChange={setCategory} disabled={disabled}>
      <SelectTrigger className="!h-auto py-4">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
