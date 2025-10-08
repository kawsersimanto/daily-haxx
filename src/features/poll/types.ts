// Poll Option from API
export interface IPollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

export interface IPollCategories {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

// Poll for list view
export interface IPoll {
  id: string;
  userId: string;
  categoryId: string;
  question: string;
  slug: string;
  coverImage: string;
  companyName: string;
  options: IPollOption[];
  createdAt: string;
  updatedAt: string;
  totalVotes: number;
}

// Poll with details (options, feedback, category info)
export interface IPollDetails extends Omit<IPoll, "userId" | "categoryId"> {
  options: IPollOption[];
  category: string | null;
  feedbacks: string;
}

// Props
export interface IPollProps {
  data: IPoll | IPollDetails;
}

// Zustand store
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

// Component props for rendering an option
export interface PollOptionProps extends IPollOption {
  percentage: number;
  highlight: boolean;
  setSelectedOptionId: (id: string) => void;
}
