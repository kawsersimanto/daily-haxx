import { ArticleUnlockCard } from "@/components/article-unlock-card/ArticleUnlockCard";
import { Card, CardContent } from "@/components/ui/card";
import { IArticleProps } from "@/features/article";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
dayjs.extend(relativeTime);

export const ArticleDetailsCard = ({ data }: IArticleProps) => {
  return (
    <div>
      <Card className="w-full p-3.5 rounded-xl gap-3.5 shadow-none">
        <div>
          <div className="overflow-hidden rounded lg:h-[438px] h-[280px]">
            <Image
              src={data?.image || "/placeholder.png"}
              alt={data?.title || "Placeholder"}
              width={800}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <p className="text-light-muted">
                {dayjs(data?.createdAt).fromNow()}
              </p>
              <span className="text-light-muted">•</span>
              <span className="text-light-muted">Newsletter Pro</span>
            </div>
            <div></div>
          </div>
        </div>
        <CardContent className="p-0 relative">
          <h2 className="sm:text-[28px] text-xl mb-4 line-clamp-2 text-foreground font-bold leading-[120%]">
            {data?.title || "No Title Found"}
          </h2>
          <div className="flex items-center text-sm text-light-muted gap-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              iusto fugiat magnam autem voluptatem explicabo inventore quibusdam
              ducimus earum provident.
            </p>
          </div>
          <ArticleUnlockCard />
        </CardContent>
      </Card>
    </div>
  );
};
