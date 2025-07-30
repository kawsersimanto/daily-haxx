import { ArticleUnlockCard } from "@/components/article-unlock-card/ArticleUnlockCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IArticleProps } from "@/features/article";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
dayjs.extend(relativeTime);

export const ArticleDetailsCard = ({ data }: IArticleProps) => {
  return (
    <div>
      <Card className="w-full p-3.5 rounded-md shadow-none gap-9">
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
          <div className="flex items-center justify-between mt-3.5">
            <div className="flex items-center gap-3">
              <p className="text-light-muted md:text-base text-sm">
                {dayjs(data?.createdAt).fromNow()}
              </p>
              <span className="text-light-muted">•</span>
              <span className="text-light-muted md:text-base text-sm">
                Newsletter Pro
              </span>
            </div>
            <div className="flex items-center gap-5">
              <Button variant={"link"} className="p-0 h-auto">
                <Image
                  src="/facebook-share.svg"
                  width={18}
                  height={20}
                  className="object-contain"
                  alt="Facebook Icon"
                />
              </Button>
              <Button variant={"link"} className="p-0 h-auto">
                <Image
                  src="/x-share.svg"
                  width={18}
                  height={18}
                  className="object-contain"
                  alt="Facebook Icon"
                />
              </Button>
              <Button variant={"link"} className="p-0 h-auto">
                <Image
                  src="/linked-in-share.svg"
                  width={18}
                  height={18}
                  className="object-contain"
                  alt="Facebook Icon"
                />
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-0 relative">
          <h2 className="sm:text-4xl text-xl mb-4 line-clamp-2 text-foreground font-bold leading-[120%] pb-5 border-b border-border">
            {data?.title || "No Title Found"}
          </h2>
          <div className="relative">
            <div
              className="text-foreground text-lg prose"
              dangerouslySetInnerHTML={{ __html: data?.description || "" }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-linear-(--gradient-lock) h-full"></div>
          </div>
          <ArticleUnlockCard />
        </CardContent>
      </Card>
    </div>
  );
};
