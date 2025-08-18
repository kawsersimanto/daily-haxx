"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useInvoices } from "@/features/payment";
import { History } from "lucide-react";

export function InvoiceHistory() {
  const { invoices } = useInvoices();

  return (
    <Card className="p-5 mt-5">
      <CardHeader className="p-0">
        <h2 className="text-xl font-semibold">Invoice History</h2>
        <p className="text-sm">Manage invoices from here</p>
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
              <span className="font-medium">${invoice.amount.toFixed(2)}</span>
              <Badge className="rounded-full px-3 py-1 text-sm font-semibold">
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
  );
}
