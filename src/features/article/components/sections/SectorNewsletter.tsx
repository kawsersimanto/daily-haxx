import SectionTitle from "@/components/section-title/SectionTitle";
import { Article } from "@/features/article/components/cards";
import { articles } from "@/features/article/constants/articles";

const SectorNewsletter = () => {
  return (
    <div>
      <SectionTitle>Sector Newsletter</SectionTitle>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3.5 md:mb-15 mb-10">
        {articles.slice(8, 16).map((article, id) => (
          <Article key={id} data={article} />
        ))}
      </div>
    </div>
  );
};

export default SectorNewsletter;
