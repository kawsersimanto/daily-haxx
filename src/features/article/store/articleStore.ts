/* eslint-disable @typescript-eslint/no-empty-object-type */
import { create } from "zustand";

interface ArticleState {
  // state
}

export const useArticleStore = create<ArticleState>(() => ({
  // initial state
}));
