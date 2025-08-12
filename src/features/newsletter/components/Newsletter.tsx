import { SectionHeader } from "@/components/section-header/SectionHeader";
import {
  NewsletterFilterDropdown,
  NewsletterList,
  NewsletterSearchBar,
} from "@/features/newsletter";

export const Newsletter = () => {
  return (
    <>
      <SectionHeader title="Newsletter">
        Read our previous insight-driven newsletters covering business, finance,
        economics and tech.
      </SectionHeader>
      <div className="max-w-[780px] mx-auto">
        <div className="flex md:flex-row flex-col justify-center md:gap-6 gap-3 md:mb-10 mb-5">
          <div className="grow">
            <NewsletterSearchBar />
          </div>
          <div className="md:basis-[200px]">
            <NewsletterFilterDropdown />
          </div>
        </div>
        <NewsletterList />
      </div>
    </>
  );
};
