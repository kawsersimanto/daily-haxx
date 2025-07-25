import SectionTitle from "@/components/section-title/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { articles, ExploreArticleCard } from "@/features/article";
import Link from "next/link";

export const ExploreSection = () => {
  return (
    <div>
      <SectionTitle>Explore More</SectionTitle>
      <Card className="w-full p-5 rounded-xl shadow-none">
        <CardContent className="p-0">
          {articles
            .slice(10, 18)
            .map(
              (article, id) =>
                article.category && (
                  <ExploreArticleCard key={id} data={article} />
                )
            )}
          <Link
            href="/article"
            className="p-2.5 mt-7 uppercase text-center text-sm font-semibold leading-[130%] tracking-[2px] block bg-accent text-accent-foreground border border-border"
          >
            See More!
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
