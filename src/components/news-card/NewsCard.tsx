import BannerImage from "@/assets/banner/banner.jpg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const NewsCard = () => {
  return (
    <Link href="/">
      <Card className="w-full p-2.5 rounded-xl gap-3.5 shadow-none">
        <div className="overflow-hidden rounded h-[243px]">
          <Image
            src={BannerImage}
            alt="COVID-19 vaccine vials"
            className="object-cover w-full"
          />
        </div>
        <CardContent className="p-0">
          <h2 className="text-lg font-semibold text-gray-900 mb-3.5 leading-5">
            Moderna&apos;s rsv vaccine shows 84% efficacy in final-stage trial,
            more to go!
          </h2>
          <div className="flex items-center text-sm text-light-muted gap-2">
            <span>20min ago</span>
            <span>•</span>
            <span>Tedox Pharma</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
