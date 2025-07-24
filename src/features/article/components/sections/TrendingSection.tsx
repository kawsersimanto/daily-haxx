import SectionTitle from "@/components/section-title/SectionTitle";
import NewsletterCard from "@/features/newsletter/components/NewsletterCard";
import { articles } from "../../constants/articles";
import { TrendingArticleCard } from "../cards";

const TrendingSection = () => {
  return (
    <aside>
      <div className="sticky top-16">
        <SectionTitle>Trending</SectionTitle>
        <NewsletterCard />
        <aside>
          <div className="rounded-xl border border-border overflow-hidden bg-card mt-6">
            {articles.slice(0, 3).map((article, id) => (
              <TrendingArticleCard key={id} data={article} />
            ))}
          </div>
        </aside>
      </div>
    </aside>
  );
};

export default TrendingSection;
