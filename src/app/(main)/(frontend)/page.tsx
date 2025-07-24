import SidebarLayout from "@/components/layout/SidebarLayout";
import SectorNewsletter from "@/components/sector-newsletter/SectorNewsletter";
import Trending from "@/components/trending/Trending";
import {
  ArticlesSection,
  ExploreSection,
  SidebarArticle,
} from "@/features/article/components/sections";

const Home = () => {
  return (
    <main>
      <div className="container">
        <SidebarLayout>
          <ArticlesSection />
          <SidebarArticle />
        </SidebarLayout>
        <SidebarLayout>
          <ExploreSection />
          <Trending />
        </SidebarLayout>
        <section className="pt-10 pb-20">
          <SectorNewsletter />
        </section>
      </div>
    </main>
  );
};

export default Home;
