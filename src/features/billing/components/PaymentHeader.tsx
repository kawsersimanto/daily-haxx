import { CardHeader, CardTitle } from "@/components/ui/card";

export const PaymentHeader = () => {
  return (
    <CardHeader className="text-center pb-6">
      <CardTitle className="text-xl font-semibold">
        Add Payment Method
      </CardTitle>
      <p className="text-sm text-muted-foreground">
        Add your preferred payment method from here
      </p>
    </CardHeader>
  );
};
