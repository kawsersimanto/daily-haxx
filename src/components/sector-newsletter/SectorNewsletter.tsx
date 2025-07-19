import { news } from "@/constants/news";
import { NewsCard } from "../news";
import SectionTitle from "../section-title/SectionTitle";

const SectorNewsletter = () => {
  return (
    <div>
      <SectionTitle>Sector Newsletter</SectionTitle>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3.5 mb-15">
        {news.slice(8, 16).map((news, index) => (
          <NewsCard key={index} data={news} />
        ))}
      </div>
    </div>
  );
};

export default SectorNewsletter;
