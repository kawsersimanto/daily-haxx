import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import { IPoll } from "../types";

export const PollCard = ({ data }: { data: IPoll }) => {
  return (
    <Link href={`/poll/${data?.id}`}>
      <Card className="w-full p-2 rounded-[6px] gap-3.5 shadow-none h-full">
        <div className="overflow-hidden rounded xl:h-[248px] lg:h-[240px] md:h-[200px] sm:h-[243px] h-[200px]">
          <Image
            src={data?.coverImage || "/placeholder.png"}
            alt={data?.question || "Question not found"}
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-0 grow flex flex-col">
          <h3 className="text-primary text-sm uppercase font-work-sans font-medium mb-2">
            {data?.companyName || "Category Not Found"}
          </h3>
          <h2 className="text-[17px] font-medium text-foreground mb-3.5 leading-6 line-clamp-2">
            {data?.question || "No Title Found"}
          </h2>
          <div className="flex items-center text-sm text-light-muted gap-2 mt-auto">
            <span className="xl:text-sm lg:text-xs text-sm capitalize">
              {formatDate(data?.createdAt)}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
