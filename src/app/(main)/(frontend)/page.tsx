import SidebarLayout from "@/components/layout/SidebarLayout";
import {
  ArticlesSection,
  ExploreSection,
  SectorNewsletter,
  SidebarArticle,
  TrendingSection,
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
          <TrendingSection />
        </SidebarLayout>
        <section className="pt-10 pb-20">
          <SectorNewsletter />
        </section>
      </div>
    </main>
  );
};

export default Home;
