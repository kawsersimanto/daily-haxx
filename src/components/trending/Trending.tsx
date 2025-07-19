import SectionTitle from "../section-title/SectionTitle";
import NewsletterCard from "./NewsletterCard";
import TrendingSidebar from "./TrendingSidebar";

const Trending = () => {
  return (
    <aside>
      <div className="sticky top-16">
        <SectionTitle>Trending</SectionTitle>
        <NewsletterCard />
        <TrendingSidebar />
      </div>
    </aside>
  );
};

export default Trending;
