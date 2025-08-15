import CrownIcon from "@/assets/navbar/crown.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const PremiumCard = () => {
  return (
    <Card className="py-3.5 px-5 sticky top-[120px]">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div>
            <h2 className="text-xl text-almond-yellow">Subscriptions</h2>
            <p>You are currently on free plan</p>
          </div>
          <div className="flex flex-col justify-center items-center my-12 gap-3.5">
            <div className="w-23 h-23 rounded-full flex items-center justify-center bg-almond-yellow/[13%]">
              <Image
                src={CrownIcon}
                className="w-8 h-10 object-contain"
                alt="Crown icon"
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
              <h3 className="font-semibold text-xl text-almond-yellow">
                Premium
              </h3>
              <p>Access to Exclusive newsletters</p>
              <p className="font-semibold text-lg">$29.99/ month</p>
              <p>Next Billing: 29 Aug, 2025</p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <Button
              variant={"outline"}
              className="border !border-danger text-danger bg-pale-red hover:bg-pale-red hover:text-danger py-3 h-auto"
              asChild
            >
              <Link href="/billing/downgrade">Downgrade to Free Plan</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
