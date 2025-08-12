"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNewsletterCategory } from "@/features/newsletter";

export const NewsletterFilterDropdown = () => {
  const { category, setCategory } = useNewsletterCategory();

  return (
    <Select value={category} onValueChange={setCategory}>
      <SelectTrigger className="!h-auto py-4">
        <SelectValue placeholder="All Newsletters" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All">All Newsletters</SelectItem>
        <SelectItem value="Business">Business</SelectItem>
        <SelectItem value="Finance">Finance</SelectItem>
        <SelectItem value="Economics">Economics</SelectItem>
        <SelectItem value="Tech">Tech</SelectItem>
      </SelectContent>
    </Select>
  );
};
