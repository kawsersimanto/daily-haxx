import { Logo } from "@/shared";

const NewsletterDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  console.log((await params).slug);

  return (
    <section className="md:pt-12 pt-7 md:pb-20 pb-10 px-5">
      <div className="max-w-[793px] mx-auto">
        <div className="flex flex-col md:gap-12.5 gap-5">
          <Logo className="mx-auto xl:w-[200px] w-[140px] h-full" />
          <div className="md:py-7.5 py-3 md:px-10 px-5 bg-card border border-border rounded-xl prose md:text-lg text-sm">
            <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
              fuga!
            </h2>
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              explicabo iure qui fugiat enim accusamus sapiente ullam nemo fugit
              assumenda unde impedit aliquam nam, corporis earum at dolores
              aspernatur quos.
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque odio quod commodi incidunt maiores, ipsum maxime
              adipisci nisi natus illum vero saepe aperiam animi! Sequi fugit
              consequuntur eos sed hic!
            </p>
            <ol>
              <li>lorem10</li>
              <li>lorem10</li>
              <li>lorem10</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterDetails;
