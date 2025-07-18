import { news } from "@/constants/news";
import Image from "next/image";
import Link from "next/link";
import ExclusiveCard from "./ExclusiveCard";

const ExclusiveSidebar = () => {
  return (
    <aside>
      <h2 className="text-lg font-semibold text-primary dark:text-foreground uppercase tracking-[2px] font-work-sans mb-4 flex gap-2.5">
        <Image
          src="/crown-light.svg"
          width={17}
          height={16}
          alt="Crown Icon"
          className="object-contain dark:hidden"
        />
        <Image
          src="/crown-dark.svg"
          width={17}
          height={16}
          alt="Crown Icon"
          className="object-contain not-dark:hidden"
        />
        Premium
      </h2>
      <div className="rounded-xl border border-border overflow-hidden bg-card">
        <div className="py-3.5 px-6 text-center border-b border-border">
          <h2 className="text-sea-green font-work-sans font-semibold">
            Exclusive Analysis
          </h2>
        </div>
        {news.slice(0, 8).map((news, id) => (
          <ExclusiveCard key={id} data={news} />
        ))}
        <Link
          href="/"
          className="py-3.5 px-6 uppercase text-center text-sm font-semibold leading-[130%] tracking-[2px] block bg-accent text-accent-foreground"
        >
          See More!
        </Link>
      </div>
    </aside>
  );
};

export default ExclusiveSidebar;
