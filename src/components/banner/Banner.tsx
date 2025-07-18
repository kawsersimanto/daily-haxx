import { news } from "@/constants/news";
import NewsCard from "../news-card/NewsCard";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3.5">
      {news
        .slice(0, 4)
        .map((news, index) =>
          index === 0 ? (
            <BannerCard key={index} data={news} />
          ) : (
            <NewsCard key={index} data={news} />
          )
        )}
    </div>
  );
};

export default Banner;
