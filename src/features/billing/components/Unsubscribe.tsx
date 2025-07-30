import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Unsubscribe = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 items-center gap-5">
        <div className="cancel-left-column lg:py-0 py-10 pe-5">
          <div className="lg:max-w-[463px] w-full">
            <h2 className="text-[38px] font-bold text-primary leading-11 mb-4.5">
              Are you sure you want to unsubscribe?
            </h2>
            <div className="mb-8 prose">
              <p>
                {`You’ll stop receiving all newsletters, updates, and data reports from us.`}
              </p>
              <p>
                {`We know inboxes can get crowded, but our emails are built to keep you ahead with curated insights you won’t find elsewhere.`}
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-3.5">
            <Button className="text-white py-3 px-8 h-auto">
              Keep Me Subscribed
            </Button>
            <Button
              variant={"outline"}
              className="text-danger border-danger hover:bg-danger/10 hover:text-danger py-3 px-8 h-auto"
            >
              Yes, I want to unsubscribe
            </Button>
          </div>
        </div>

        <div>
          <Image
            src="/cancel-img.jpg"
            width={724}
            height={724}
            alt="Unsubscribe Image"
            className="object-cover w-full lg:h-[724px]"
          />
        </div>
      </div>
    </div>
  );
};
