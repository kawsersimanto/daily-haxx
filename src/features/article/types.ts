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
