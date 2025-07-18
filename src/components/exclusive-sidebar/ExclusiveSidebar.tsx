import { news } from "@/constants/news";
import Link from "next/link";
import ExclusiveCard from "./ExclusiveCard";

const ExclusiveSidebar = () => {
  return (
    <aside className="rounded-xl border border-border overflow-hidden bg-card">
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
    </aside>
  );
};

export default ExclusiveSidebar;
