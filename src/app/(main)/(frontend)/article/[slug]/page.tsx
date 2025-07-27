import SidebarLayout from "@/components/layout/SidebarLayout";
import { ArticleDetailsCard, SidebarArticle } from "@/features/article";

const ArticleDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <main>
      <div className="container">
        <SidebarLayout>
          <ArticleDetailsCard />
          <SidebarArticle />
        </SidebarLayout>
      </div>
    </main>
  );
};

export default ArticleDetails;
