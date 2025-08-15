export interface IProfile {
  id: string;
  // define fields
}

export interface NewsletterToggleProps {
  enabled: boolean;
  onToggle: () => void;
  title: string;
  description: string;
  isPremium?: boolean;
}

export interface PreferenceState {
  weeklyNewsletter: boolean;
  dailyNewsletter: boolean;
}
export interface PreferenceActions {
  toggleWeeklyNewsletter: () => void;
  toggleDailyNewsletter: () => void;
}

export type PreferenceStore = PreferenceState & PreferenceActions;
