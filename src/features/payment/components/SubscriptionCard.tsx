"use client";

import CrownIcon from "@/assets/navbar/crown.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSubscription } from "@/features/payment";
import Image from "next/image";

export const SubscriptionCard = () => {
  const { subscription, cancelSubscription } = useSubscription();

  return (
    <Card className="p-0">
      <CardContent className="p-5">
        <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src={CrownIcon} alt="Crown Icon" height={20} width={20} />
              <span className="text-xl font-semibold text-almond-yellow">
                {subscription.plan}
              </span>
            </div>
            <div className="text-[22px] font-semibold text-primary">
              ${subscription.amount.toFixed(2)} per month
            </div>
            <div className="text-sm">
              Your subscription renews on {subscription.renewalDate}
            </div>
          </div>
          <Button
            variant="outline"
            className="text-danger hover:text-danger hover:bg-danger/[5%] text-sm bg-transparent"
            onClick={cancelSubscription}
          >
            Cancel Subscription
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
