import { CardHeader, CardTitle } from "@/components/ui/card";

export const PaymentHeader = () => {
  return (
    <CardHeader className="text-center gap-1">
      <CardTitle className="text-[28px] font-semibold">
        Add Payment Method
      </CardTitle>
      <p>Add your preferred payment method from here</p>
    </CardHeader>
  );
};
