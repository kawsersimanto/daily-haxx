"use client";

import { usePreferenceSelector } from "@/features/profile";

export const usePreference = () => {
  const weeklyNewsletter = usePreferenceSelector.use.weeklyNewsletter();
  const toggleWeeklyNewsletter =
    usePreferenceSelector.use.toggleWeeklyNewsletter();
  const dailyNewsletter = usePreferenceSelector.use.dailyNewsletter();
  const toggleDailyNewsletter =
    usePreferenceSelector.use.toggleDailyNewsletter();

  return {
    weeklyNewsletter,
    dailyNewsletter,
    toggleWeeklyNewsletter,
    toggleDailyNewsletter,
  };
};
