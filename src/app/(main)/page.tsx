import ExclusiveSidebar from "@/components/exclusive-sidebar/ExclusiveSidebar";
import MainNews from "@/components/news/MainNews";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <main>
      <div className="container">
        <section className="grid lg:grid-cols-[1fr_360px] gap-6 pt-4 pb-10">
          <MainNews />
          <ExclusiveSidebar />
        </section>
        <section className="grid lg:grid-cols-[1fr_360px] gap-6 pt-10 pb-12.5">
          <Card className="w-full p-5 rounded-xl shadow-none">
            <div className="overflow-hidden rounded lg:h-[462px] h-[280px]">
              {/* <Image
            src={data?.image || "/placeholder.png"}
            alt={data?.title}
            width={800}
            height={800}
            className="object-cover w-full h-full"
          /> */}
            </div>
            <CardContent className="p-0">asd</CardContent>
          </Card>
          <div>hello</div>
        </section>
      </div>
    </main>
  );
};

export default Home;
