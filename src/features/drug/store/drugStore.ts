import { DrugStore } from "@/features/drug";
import { createSelectors } from "@/lib/createSelector";
import { create } from "zustand";

export const useDrugStore = create<DrugStore>((set) => ({
  searchQuery: "",
  filters: {
    diseaseArea: "",
    modality: "",
    mechanism: "",
    sortBy: "",
    salesRange: "",
  },
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),
  removeFilter: (key) =>
    set((state) => ({
      filters: { ...state.filters, [key]: "" },
    })),
  clearAllFilters: () =>
    set({
      filters: {
        diseaseArea: "",
        modality: "",
        mechanism: "",
        sortBy: "",
        salesRange: "",
      },
    }),
}));

export const useDrugSelector = createSelectors(useDrugStore);
