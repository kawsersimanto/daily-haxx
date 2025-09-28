export interface ArticleCategory {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface IArticle {
  id: string;
  title: string;
  body: string;
  slug: string;
  companyName: string;
  coverImage: string;
  readingTime: number;
  userId: string;
  updatedAt: string;
  createdAt: string;
}

export interface IArticleProps {
  data: IArticle;
}

export interface ArticleState {
  search: string;
  page: number;
  category: string;
}

export interface ArticleActions {
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
  setCategory: (value: string) => void;
}

export type ArticleStore = ArticleState & ArticleActions;
