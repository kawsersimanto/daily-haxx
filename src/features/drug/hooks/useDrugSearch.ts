import { useDrugSelector } from "@/features/drug";

export const useDrugSearch = () => {
  const searchQuery = useDrugSelector.use.searchQuery();
  const setSearchQuery = useDrugSelector.use.setSearchQuery();

  return {
    searchQuery,
    setSearchQuery,
  };
};
