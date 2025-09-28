import { ArticleList } from "@/features/article";
import { ArticleHeader } from "./ArticleHeader";

export const AllArticles = () => {
  return (
    <section className="pt-15 md:pb-20 pb-10">
      <div className="container">
        <ArticleHeader />
        <ArticleList />
      </div>
    </section>
  );
};
