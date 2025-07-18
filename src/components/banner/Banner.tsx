import NewsCard from "../news-card/NewsCard";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="grid grid-cols-3 gap-3.5">
      <BannerCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default Banner;
