export interface IPollOption {
  id: string;
  label: string;
  percentage: number;
  highlight?: boolean;
}

export interface IPoll {
  id: string;
  title: string;
  category?: string;
  createdAt: string;
  image?: string;
  options: IPollOption[];
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
  selectedOptionId: string | null;
}

export interface PollActions {
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
  setCategory: (value: string) => void;
  setSelectedOptionId: (id: string | null) => void;
}

export type PollStore = PollState & PollActions;

export interface PollOptionProps extends IPollOption {
  setSelectedOptionId: (id: string) => void;
}
