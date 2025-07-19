import ExclusiveSidebar from "@/components/exclusive-sidebar/ExclusiveSidebar";
import { Explore, MainNews } from "@/components/news";
import Trending from "@/components/trending/Trending";

const Home = () => {
  return (
    <main>
      <div className="container">
        <section className="grid lg:grid-cols-[1fr_360px] gap-6 pt-4 pb-10">
          <MainNews />
          <ExclusiveSidebar />
        </section>
        <section className="grid lg:grid-cols-[1fr_360px] gap-6 pt-10 pb-12.5">
          <Explore />
          <Trending />
        </section>
      </div>
    </main>
  );
};

export default Home;
