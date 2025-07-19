import { ExploreCard } from "@/components/news";
import { news } from "@/constants/news";
import Link from "next/link";
import SectionTitle from "../section-title/SectionTitle";
import { Card, CardContent } from "../ui/card";

const Explore = () => {
  return (
    <div>
      <SectionTitle>Explore More</SectionTitle>
      <Card className="w-full p-5 rounded-xl shadow-none">
        <CardContent className="p-0">
          {news
            .slice(10, 18)
            .map(
              (news, id) =>
                news.category && <ExploreCard key={id} data={news} />
            )}
          <Link
            href="/"
            className="p-2.5 mt-7 uppercase text-center text-sm font-semibold leading-[130%] tracking-[2px] block bg-accent text-accent-foreground border border-border"
          >
            See More!
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Explore;
