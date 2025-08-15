import { PreferenceStore } from "@/features/profile";
import { createSelectors } from "@/lib/createSelector";
import { create } from "zustand";

export const usePreferenceStore = create<PreferenceStore>((set) => ({
  weeklyNewsletter: false,
  dailyNewsletter: false,
  toggleWeeklyNewsletter: () =>
    set((state) => ({ weeklyNewsletter: !state.weeklyNewsletter })),
  toggleDailyNewsletter: () =>
    set((state) => ({ dailyNewsletter: !state.dailyNewsletter })),
}));

export const usePreferenceSelector = createSelectors(usePreferenceStore);
