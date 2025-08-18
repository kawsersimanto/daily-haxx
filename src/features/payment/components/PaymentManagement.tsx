"use client";

import CrownIcon from "@/assets/navbar/crown.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  PaymentManagementHeader,
  PaymentMethod,
  usePaymentStore,
} from "@/features/payment";
import { History, MoreHorizontal, Plus } from "lucide-react";
import Image from "next/image";

export function PaymentManagement() {
  const {
    subscription,
    paymentMethods,
    invoices,
    cancelSubscription,
    removePaymentMethod,
    setPrimaryPaymentMethod,
  } = usePaymentStore();

  const handleCancelSubscription = () => {
    cancelSubscription();
  };

  const handleRemovePaymentMethod = (id: string) => {
    removePaymentMethod(id);
  };

  const handleSetPrimary = (id: string) => {
    setPrimaryPaymentMethod(id);
  };

  const renderPaymentMethodIcon = (type: PaymentMethod["type"]) => {
    if (type === "visa") {
      return (
        <Image
          src="/payment/visa.svg"
          alt="Visa icon"
          height={24}
          width={34}
          className="object-contain sm:w-[34px] sm:h-[24px] w-[28px] h-auto"
        />
      );
    }

    return (
      <Image
        src="/payment/mastercard.svg"
        alt="Visa icon"
        height={24}
        width={34}
        className="object-contain sm:w-[34px] sm:h-[24px] w-[28px] h-auto"
      />
    );
  };

  return (
    <div>
      <PaymentManagementHeader />

      {/* Premium Subscription */}
      <Card className="p-0">
        <CardContent className="p-5">
          <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src={CrownIcon}
                  alt="Crown Icon"
                  height={20}
                  width={20}
                  className="object-contain"
                />
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
              onClick={handleCancelSubscription}
            >
              Cancel Subscription
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods */}
      <Card className="p-5 mt-5">
        <CardHeader className="p-0">
          <div>
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <p className="text-sm">Manage payment methods from here</p>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col gap-5 items-start">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center justify-between sm:pb-5 pb-4 border-b border-border w-full"
              >
                <div className="flex items-start sm:gap-3 gap-1.5">
                  {renderPaymentMethodIcon(method.type)}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium sm:text-base text-sm">
                        **** **** **** {method.lastFour}
                      </span>
                      {method.isPrimary && (
                        <Badge
                          variant="secondary"
                          className="sm:text-sm text-xs sm:px-2.5 px-1.5 rounded-full sm:font-semibold font-normal"
                        >
                          Primary
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm">Expiry: {method.expiry}</div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit payment method</DropdownMenuItem>
                    {!method.isPrimary && (
                      <DropdownMenuItem
                        onClick={() => handleSetPrimary(method.id)}
                      >
                        Set as primary
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => handleRemovePaymentMethod(method.id)}
                    >
                      Remove
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
            <Button variant="outline" className="justify-center gap-2 py-2">
              <Plus className="w-4 h-4" />
              Add payment method
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Invoice History */}
      <Card className="p-5 mt-5">
        <CardHeader className="p-0">
          <div>
            <h2 className="text-xl font-semibold">Invoice History</h2>
            <p className="text-sm">Manage invoices from here</p>
          </div>
        </CardHeader>
        <CardContent className="p-0 overflow-x-scroll">
          <div className="flex flex-col gap-5 [&>div:last-child]:border-b-0 [&>div:last-child]:pb-0 w-[500px]">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center md:gap-25 gap-10 sm:pb-5 pb-4 border-b border-border"
              >
                <div className="flex items-center gap-3">
                  <History className="w-5 h-5 text-ash-gray" />
                  <span className="text-base">{invoice.date}</span>
                </div>
                <span className="font-medium">
                  ${invoice.amount.toFixed(2)}
                </span>
                <Badge
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-sm font-semibold"
                >
                  {invoice.status.charAt(0).toUpperCase() +
                    invoice.status.slice(1)}
                </Badge>
                <span className="text-almond-yellow font-medium text-sm">
                  {invoice.plan}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
