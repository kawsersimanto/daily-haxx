export interface PollOption {
  id: string;
  label: string;
  votes: number;
  percentage: number;
}

export interface IPoll {
  id: string;
  title: string;
  category?: string;
  createdAt: string;
  image?: string;
  options: PollOption[];
  totalVotes: number;
  userHasVoted: boolean;
  additionalFeedback?: string;
  selectedOptionId?: string;
}

export interface IPollProps {
  data: IPoll;
}

export interface PollState {
  search: string;
  page: number;
  category: string;
}

export interface PollActions {
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
  setCategory: (value: string) => void;
}

export type PollStore = PollState & PollActions;
