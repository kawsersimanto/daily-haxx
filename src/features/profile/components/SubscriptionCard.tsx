import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserRound } from "lucide-react";

export const SubscriptionCard = () => {
  return (
    <Card className="py-3.5 px-5 sticky top-[120px]">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div>
            <h2 className="text-xl">Subscriptions</h2>
            <p>You are currently on free plan</p>
          </div>
          <div className="flex flex-col justify-center items-center my-12 gap-3.5">
            <div className="w-23 h-23 rounded-full flex items-center justify-center bg-flash-white">
              <UserRound className="w-8 h-10 object-contain" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="font-semibold text-xl">Free Plan</h3>
              <p>Access to basic newsletters</p>
              <p className="font-semibold text-lg">$29.99/ month</p>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <Button className="py-3 h-auto">Upgrade to Premium Plan!</Button>
            <Button
              variant={"outline"}
              className="border !border-danger text-danger bg-pale-red hover:bg-pale-red hover:text-danger py-3 h-auto"
            >
              Unsubscribe
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
