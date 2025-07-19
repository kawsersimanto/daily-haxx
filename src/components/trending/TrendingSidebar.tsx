import { news } from "@/constants/news";
import TrendingCard from "./TrendingCard";

const TrendingSidebar = () => {
  return (
    <aside>
      <div className="rounded-xl border border-border overflow-hidden bg-card mt-6">
        {news.slice(0, 3).map((news, id) => (
          <TrendingCard key={id} data={news} />
        ))}
      </div>
    </aside>
  );
};

export default TrendingSidebar;
