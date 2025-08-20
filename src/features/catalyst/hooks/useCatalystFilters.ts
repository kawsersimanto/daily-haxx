import { useCatalystSelector } from "@/features/catalyst";

const labels = {
  diseaseArea: "Disease Area",
  modality: "Modality",
  mechanism: "Mechanism",
  sortBy: "Sort by",
  salesRange: "LTM Range",
};

export const useCatalystFilters = () => {
  const filters = useCatalystSelector.use.filters();
  const setFilter = useCatalystSelector.use.setFilter();
  const removeFilter = useCatalystSelector.use.removeFilter();
  const clearAllFilters = useCatalystSelector.use.clearAllFilters();

  const activeFilters = Object.entries(filters)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => value !== "")
    .map(([key, value]) => ({
      key,
      label: `${labels[key as keyof typeof labels]}: ${value}`,
      value,
    }));

  return {
    filters,
    setFilter,
    removeFilter,
    clearAllFilters,
    activeFilters,
  };
};
