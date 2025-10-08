import { PollStore } from "@/features/poll";
import { createSelectors } from "@/lib/createSelector";
import { create } from "zustand";

export const usePollStore = create<PollStore>((set) => ({
  search: "",
  page: 1,
  selectedOptionId: null,
  category: "all",
  setSearch: (search) => set({ search: search.trim(), page: 1 }),
  setPage: (page) => set({ page }),
  setCategory: (category) => set({ category, page: 1 }),
  setSelectedOptionId: (id) => set({ selectedOptionId: id }),
}));

export const usePollSelector = createSelectors(usePollStore);
