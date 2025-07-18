import { MainNewsCard, NewsCard } from "@/components/news";
import { news } from "@/constants/news";

const MainNews = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-primary dark:text-foreground uppercase tracking-[2px] font-work-sans mb-4">
        Latest
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3.5">
        {news
          .slice(0, 4)
          .map((news, index) =>
            index === 0 ? (
              <MainNewsCard key={index} data={news} />
            ) : (
              <NewsCard key={index} data={news} />
            )
          )}
      </div>
    </div>
  );
};

export default MainNews;
