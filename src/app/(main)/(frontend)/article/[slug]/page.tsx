import SidebarLayout from "@/components/layout/SidebarLayout";
import {
  ArticleDetailsCard,
  articles,
  SidebarArticle,
} from "@/features/article";

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
          <ArticleDetailsCard data={articles[0]} />
          <div>
            <div className="sticky top-28">
              <SidebarArticle />
            </div>
          </div>
        </SidebarLayout>
      </div>
    </main>
  );
};

export default ArticleDetails;
