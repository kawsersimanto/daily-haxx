import { articles } from "@/features/article/constants/articles";
import TrendingCard from "./TrendingCard";

const TrendingSidebar = () => {
  return (
    <aside>
      <div className="rounded-xl border border-border overflow-hidden bg-card mt-6">
        {articles.slice(0, 3).map((article, id) => (
          <TrendingCard key={id} data={article} />
        ))}
      </div>
    </aside>
  );
};

export default TrendingSidebar;
