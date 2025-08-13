export interface IArticle {
  title: string;
  description?: string;
  category?: string;
  publisher?: string;
  date?: string;
  createdAt: string;
  image?: string;
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
