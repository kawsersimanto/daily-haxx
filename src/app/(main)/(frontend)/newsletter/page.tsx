import {
  NewsletterFilterDropdown,
  NewsletterSearchBar,
} from "@/features/newsletter";

const NewsletterPage = () => {
  return (
    <section className="pt-[60px] pb-[160px]">
      <div className="container">
        <NewsletterSearchBar />
        <NewsletterFilterDropdown />
      </div>
    </section>
  );
};

export default NewsletterPage;
