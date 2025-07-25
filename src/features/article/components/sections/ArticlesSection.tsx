import { Article, articles, LatestArticle } from "@/features/article";

export const ArticlesSection = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-primary dark:text-foreground uppercase tracking-[2px] font-work-sans mb-4">
        Latest
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3.5">
        {articles
          .slice(0, 4)
          .map((article, id) =>
            id === 0 ? (
              <LatestArticle key={id} data={article} />
            ) : (
              <Article key={id} data={article} />
            )
          )}
      </div>
    </div>
  );
};
