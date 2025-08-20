"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PaymentMethod, usePaymentMethods } from "@/features/payment";
import { MoreHorizontal, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PaymentMethodIcon = ({ type }: { type: PaymentMethod["type"] }) => {
  const icon =
    type === "visa" ? "/payment/visa.svg" : "/payment/mastercard.svg";
  return (
    <Image
      src={icon}
      alt={`${type} icon`}
      height={24}
      width={34}
      className="object-contain sm:w-[34px] sm:h-[24px] w-[28px] h-auto"
    />
  );
};

export const PaymentMethodsList = () => {
  const { paymentMethods, setPrimaryPaymentMethod, removePaymentMethod } =
    usePaymentMethods();

  return (
    <Card className="p-5 mt-5">
      <CardHeader className="p-0">
        <h2 className="text-xl font-semibold">Payment Method</h2>
        <p className="text-sm">Manage payment methods from here</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col gap-5 items-start">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex items-center justify-between sm:pb-5 pb-4 border-b border-border w-full"
            >
              <div className="flex items-start sm:gap-3 gap-1.5">
                <PaymentMethodIcon type={method.type} />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium sm:text-base text-sm">
                      **** **** **** {method.lastFour}
                    </span>
                    {method.isPrimary && (
                      <Badge variant="secondary" className="sm:text-sm text-xs">
                        Primary
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm">Expiry: {method.expiry}</div>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-400">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit payment method</DropdownMenuItem>
                  {!method.isPrimary && (
                    <DropdownMenuItem
                      onClick={() => setPrimaryPaymentMethod(method.id)}
                    >
                      Set as primary
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem
                    className="text-red-600"
                    onClick={() => removePaymentMethod(method.id)}
                  >
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
          <Button
            variant="outline"
            className="justify-center gap-2 py-2 bg-transparent"
            asChild
          >
            <Link href="/payment">
              <Plus className="w-4 h-4" />
              Add payment method
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
