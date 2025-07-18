import Banner from "@/components/banner/Banner";
import ExclusiveSidebar from "@/components/exclusive-sidebar/ExclusiveSidebar";
import Image from "next/image";

const Home = () => {
  return (
    <main className="pt-4 pb-10">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          <div>
            <h2 className="text-lg font-semibold text-primary dark:text-foreground uppercase tracking-[2px] font-work-sans mb-4">
              Latest
            </h2>
            <Banner />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-primary dark:text-foreground uppercase tracking-[2px] font-work-sans mb-4 flex gap-2.5">
              <Image
                src="/crown-light.svg"
                width={17}
                height={16}
                alt="Crown Icon"
                className="object-contain dark:hidden"
              />
              <Image
                src="/crown-dark.svg"
                width={17}
                height={16}
                alt="Crown Icon"
                className="object-contain not-dark:hidden"
              />
              Premium
            </h2>
            <ExclusiveSidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
