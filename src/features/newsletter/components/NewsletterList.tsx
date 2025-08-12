import { NewsletterCard, newsletters } from "@/features/newsletter";

export const NewsletterList = () => {
  return (
    <div className="flex flex-col md:gap-6 gap-4">
      {newsletters.map((newsletter) => (
        <NewsletterCard key={newsletter?.id} data={newsletter} />
      ))}
    </div>
  );
};
