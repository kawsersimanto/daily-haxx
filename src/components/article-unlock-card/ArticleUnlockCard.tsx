import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/shared";
import Image from "next/image";

export const ArticleUnlockCard = () => {
  return (
    <div className="p-7.5 border border-forest-green bg-mint-white rounded-lg mt-3.5">
      <div className="flex items-center gap-3 mb-8.5">
        <Logo className="w-[140px] h-[40px]" />
        <Separator orientation="vertical" className="!h-[35px]" />
        <p className="uppercase text-golden-sand text-2xl font-medium">PRO</p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3.5">
          <h3 className="text-primary text-[28px] font-bold">
            Signup to read this article for free
          </h3>
          <p className="text-lg font-space-grotesk">
            Get free access to a limited number of articles, plus choose
            newsletters to get straight to your inbox.
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start md:gap-7.5 gap-5">
          <div className="flex items-center gap-2">
            <Image
              src="/check-mark.svg"
              width={16}
              height={16}
              className="object-contain w-[16] h-[16]"
              alt="Check mark Icon"
            />
            <p className="font-medium">Breaking news first</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/check-mark.svg"
              width={16}
              height={16}
              className="object-contain w-[16] h-[16]"
              alt="Check mark Icon"
            />
            <p className="font-medium">Expert analysis</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/check-mark.svg"
              width={16}
              height={16}
              className="object-contain w-[16] h-[16]"
              alt="Check mark Icon"
            />
            <p className="font-medium">Full story access</p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-3.5">
          <Button
            className="uppercase bg-transparent px-13.5 border-primary text-primary border-2 py-3 font-semibold text-sm leading-[150%] h-auto"
            variant={"outline"}
          >
            Join For Free
          </Button>
          <Button className="py-3 px-10 font-semibold text-sm leading-[150%] h-auto uppercase text-mustard-yellow">
            Become a premium subscriber
          </Button>
        </div>
      </div>
    </div>
  );
};
