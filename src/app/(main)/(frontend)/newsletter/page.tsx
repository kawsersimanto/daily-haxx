import { SectionHeader } from "@/components/section-header/SectionHeader";
import {
  NewsletterFilterDropdown,
  NewsletterSearchBar,
} from "@/features/newsletter";

const NewsletterPage = () => {
  return (
    <section className="pt-[60px] pb-[160px] px-4">
      <SectionHeader title="Newsletter Archive">
        Read our previous insight-driven newsletters covering business, finance,
        economics and tech.
      </SectionHeader>
      <div className="container">
        <NewsletterSearchBar />
        <NewsletterFilterDropdown />
      </div>
    </section>
  );
};

export default NewsletterPage;
