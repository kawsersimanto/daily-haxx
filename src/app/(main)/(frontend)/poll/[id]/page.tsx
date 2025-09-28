import { PollDetails } from "@/features/poll";

const PollDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log(id);

  return (
    <>
      <PollDetails id={id} />
    </>
  );
};

export default PollDetailsPage;
