import Banner from "@/components/banner/Banner";
import ExclusiveSidebar from "@/components/exclusive-sidebar/ExclusiveSidebar";

const Home = () => {
  return (
    <main className="pt-4 pb-10">
      <div className="container">
        <div className="grid grid-cols-[1fr_360px] gap-6">
          <div>
            <Banner />
          </div>
          <div>
            <ExclusiveSidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
