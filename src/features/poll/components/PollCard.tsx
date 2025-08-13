import { Card, CardContent } from "@/components/ui/card";
import { IPollProps } from "@/features/poll";
import { formatDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";

export const PollCard = ({ data }: IPollProps) => {
  return (
    <Link href={`/poll/${"pfizer-acquires"}`}>
      <Card className="w-full p-2 rounded-[6px] gap-3.5 shadow-none">
        <div className="overflow-hidden rounded xl:h-[248px] lg:h-[240px] md:h-[200px] sm:h-[243px] h-[200px]">
          <Image
            src={data?.image || "/placeholder.png"}
            alt={data?.title}
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-0">
          <h3 className="text-primary text-sm uppercase font-work-sans font-medium mb-2">
            {data?.category || "Category Not Found"}
          </h3>
          <h2 className="text-[17px] font-medium text-foreground mb-3.5 leading-6 line-clamp-2">
            {data?.title || "No Title Found"}
          </h2>
          <div className="flex items-center text-sm text-light-muted gap-2">
            <span className="xl:text-sm lg:text-xs text-sm capitalize">
              {formatDate(data?.createdAt)}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
