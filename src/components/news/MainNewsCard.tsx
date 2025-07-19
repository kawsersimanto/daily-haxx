import { Card, CardContent } from "@/components/ui/card";
import { INewsData } from "@/constants/news";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";
dayjs.extend(relativeTime);

const BannerCard = ({ data }: INewsData) => {
  return (
    <Link href="/" className="md:col-span-3 col-span-1">
      <Card className="w-full p-3.5 rounded-xl gap-3.5 shadow-none">
        <div className="overflow-hidden rounded lg:h-[462px] h-[280px]">
          <Image
            src={data?.image || "/placeholder.png"}
            alt={data?.title}
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-0">
          <h2 className="sm:text-[28px] text-xl mb-4 line-clamp-2 text-foreground font-bold leading-[120%]">
            {data?.title || "No Title Found"}
          </h2>
          <div className="flex items-center text-sm text-light-muted gap-2">
            <span>{dayjs(data?.createdAt).fromNow()}</span>
            {data?.publisher && (
              <>
                <span>•</span>
                <span>{data?.publisher}</span>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BannerCard;
