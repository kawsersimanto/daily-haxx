import { useCatalystSelector } from "@/features/catalyst";

export const useCatalystSearch = () => {
  const searchQuery = useCatalystSelector.use.searchQuery();
  const setSearchQuery = useCatalystSelector.use.setSearchQuery();

  return {
    searchQuery,
    setSearchQuery,
  };
};
