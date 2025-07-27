import { articles, SidebarArticleCard } from "@/features/article";
import Link from "next/link";

export const SidebarArticle = () => {
  return (
    <aside>
      <div className="rounded-xl border border-border overflow-hidden bg-card">
        <div className="py-3.5 px-6 text-center border-b border-border">
          <h2 className="text-sea-green font-work-sans font-semibold">
            Exclusive Analysis
          </h2>
        </div>
        {articles.slice(0, 7).map((article, id) => (
          <SidebarArticleCard key={id} data={article} />
        ))}
        <Link
          href="/"
          className="py-3.5 px-6 uppercase text-center text-sm font-semibold leading-[130%] tracking-[2px] block bg-accent text-accent-foreground"
        >
          See More!
        </Link>
      </div>
    </aside>
  );
};
