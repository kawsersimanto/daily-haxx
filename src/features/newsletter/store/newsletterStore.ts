import { NewsletterStore } from "@/features/newsletter";
import { createSelectors } from "@/lib/createSelector";
import { create } from "zustand";

export const useNewsletterStore = create<NewsletterStore>((set) => ({
  search: "",
  page: 1,
  category: "",
  setSearch: (search) => set({ search: search.trim(), page: 1 }),
  setPage: (page) => set({ page }),
  setCategory: (category) => set({ category, page: 1 }),
}));

export const useNewsletterSelector = createSelectors(useNewsletterStore);
