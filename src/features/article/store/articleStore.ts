import { ArticleStore } from "@/features/article";
import { createSelectors } from "@/lib/createSelector";
import { create } from "zustand";

export const useArticleStore = create<ArticleStore>((set) => ({
  search: "",
  page: 1,
  category: "All Articles",
  setSearch: (search) => set({ search: search.trim(), page: 1 }),
  setPage: (page) => set({ page }),
  setCategory: (category) => set({ category, page: 1 }),
}));

export const useArticleSelector = createSelectors(useArticleStore);
