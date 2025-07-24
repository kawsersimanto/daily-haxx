const ArticleDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <div>ArticleDetails: {slug}</div>;
};

export default ArticleDetails;
