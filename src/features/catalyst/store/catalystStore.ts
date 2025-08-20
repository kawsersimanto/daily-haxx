import { CatalystStore } from "@/features/catalyst";
import { createSelectors } from "@/lib/createSelector";
import { create } from "zustand";

export const useCatalystStore = create<CatalystStore>((set) => ({
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

export const useCatalystSelector = createSelectors(useCatalystStore);
