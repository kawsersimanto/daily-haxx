import { INewsletter } from "@/features/newsletter";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import Link from "next/link";
dayjs.extend(relativeTime);

export const NewsletterCard = ({ data }: { data: INewsletter }) => {
  return (
    <Link
      href={"/newsletter/details"}
      className="flex border border-border rounded-xl overflow-hidden"
    >
      <div className="md:py-5 md:w-[150px] w-25 md:ps-5 md:pe-5 ps-3 pe-2 py-2 bg-primary flex md:flex-row flex-col items-center justify-center md:gap-2.5 gap-2">
        <CalendarDays className="text-white md:h-7 md:w-7 h-5 w-5 shrink-0" />
        <p className="text-white uppercase md:w-[58px] w-auto md:text-sm text-[10px] md:text-start text-center">
          {dayjs(data?.createdAt).format("MMM DD, YYYY").toUpperCase()}
        </p>
      </div>
      <div className="grow md:py-5 py-2 md:px-5 ps-3 pe-2 flex justify-between items-center gap-1">
        <div>
          <h2 className="line-clamp-1 font-medium text-lg">
            {data?.title || "Not found"}
          </h2>
          <p className="line-clamp-1 text-sm text-light-muted">
            {data?.summary || "Not found"}
          </p>
        </div>
        <ArrowUpRight className="text-primary h-6 w-6 shrink-0 md:block hidden" />
      </div>
    </Link>
  );
};
