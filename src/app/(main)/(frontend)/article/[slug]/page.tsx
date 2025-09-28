import { ArticleDetailsPage } from "@/features/article/components/ArticleDetailsPage";

const ArticleDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <main>
      <div className="container">
        <ArticleDetailsPage slug={slug} />
      </div>
    </main>
  );
};

export default ArticleDetails;
