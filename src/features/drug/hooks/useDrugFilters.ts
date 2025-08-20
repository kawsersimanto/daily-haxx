import { useDrugSelector } from "@/features/drug";

const labels = {
  diseaseArea: "Disease Area",
  modality: "Modality",
  mechanism: "Mechanism",
  sortBy: "Sort by",
  salesRange: "LTM Range",
};

export const useDrugFilters = () => {
  const filters = useDrugSelector.use.filters();
  const setFilter = useDrugSelector.use.setFilter();
  const removeFilter = useDrugSelector.use.removeFilter();
  const clearAllFilters = useDrugSelector.use.clearAllFilters();

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
