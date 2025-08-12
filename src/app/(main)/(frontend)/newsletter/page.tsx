import { SectionHeader } from "@/components/section-header/SectionHeader";
import {
  NewsletterFilterDropdown,
  NewsletterSearchBar,
} from "@/features/newsletter";

const NewsletterPage = () => {
  return (
    <section className="pt-[60px] pb-[160px]">
      <div className="container">
        <SectionHeader title="Newsletter">
          Read our previous insight-driven newsletters covering business,
          finance, economics and tech.
        </SectionHeader>
        <div className="flex md:flex-row flex-col justify-center md:gap-6 gap-3 max-w-[780px] mx-auto">
          <div className="grow">
            <NewsletterSearchBar />
          </div>
          <div className="basis-[200px]">
            <NewsletterFilterDropdown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterPage;
