import ExclusiveSidebar from "@/components/exclusive-sidebar/ExclusiveSidebar";
import SidebarLayout from "@/components/layout/SidebarLayout";
import { Explore, MainNews } from "@/components/news";
import SectorNewsletter from "@/components/sector-newsletter/SectorNewsletter";
import Trending from "@/components/trending/Trending";

const Home = () => {
  return (
    <main>
      <div className="container">
        <SidebarLayout>
          <MainNews />
          <ExclusiveSidebar />
        </SidebarLayout>
        <SidebarLayout>
          <Explore />
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
