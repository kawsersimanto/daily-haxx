import { create } from "zustand";

interface FilterState {
  searchQuery: string;
  filters: {
    diseaseArea: string;
    modality: string;
    mechanism: string;
    sortBy: string;
    salesRange: string;
  };
  setSearchQuery: (query: string) => void;
  setFilter: (key: string, value: string) => void;
  removeFilter: (key: string) => void;
  clearAllFilters: () => void;
}

export const useDrugStore = create<FilterState>((set) => ({
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
