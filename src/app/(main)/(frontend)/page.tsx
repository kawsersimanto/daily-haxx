import SidebarLayout from "@/components/layout/SidebarLayout";
import {
  ArticlesSection,
  ExploreSection,
  SectorNewsletter,
  SidebarArticle,
  TrendingSection,
} from "@/features/article";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <div className="container">
        <SidebarLayout>
          <ArticlesSection />
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
            <SidebarArticle />
          </div>
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
