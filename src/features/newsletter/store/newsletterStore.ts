/* eslint-disable @typescript-eslint/no-empty-object-type */
import { create } from "zustand";

interface NewsletterState {
  // state
}

export const useNewsletterStore = create<NewsletterState>(() => ({
  // initial state
}));
