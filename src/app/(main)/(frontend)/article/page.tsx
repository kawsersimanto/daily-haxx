import { SectionHeader } from "@/components/section-header/SectionHeader";

const ArticlePage = () => {
  return (
    <section className="pt-15 md:pb-40 pb-20">
      <div className="container">
        <div>
          <SectionHeader title="Articles">
            Read our previous insight-driven newsletters covering business,
            finance, economics and tech.
          </SectionHeader>
        </div>
      </div>
    </section>
  );
};

export default ArticlePage;
