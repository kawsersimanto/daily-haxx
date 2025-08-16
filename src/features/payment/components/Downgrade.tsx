import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Downgrade = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 items-center gap-5">
        <div className="cancel-left-column lg:py-0 py-10 pe-5">
          <div className="lg:max-w-[463px] w-full">
            <h2 className="text-[38px] font-bold text-primary leading-11 mb-4.5">
              Downgrading from Pro? Are you sure?
            </h2>
            <div className="mb-8 prose">
              <p>{`You’re about to lose access to:`}</p>
              <ul>
                <li>Premium data and deep-dives</li>
                <li>Early access to reports</li>
                <li>Downloadable insights & Pro tools</li>
              </ul>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-3.5">
            <Button className="text-white py-3 px-8 h-auto">Stay on Pro</Button>
            <Button
              variant={"outline"}
              className="text-danger border-danger hover:bg-danger/10 hover:text-danger py-3 px-8 h-auto"
            >
              Yes, Downgrade my plan
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
