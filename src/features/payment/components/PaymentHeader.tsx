import { CardHeader, CardTitle } from "@/components/ui/card";

export const PaymentHeader = () => {
  return (
    <CardHeader className="text-center gap-1 p-0">
      <CardTitle className="text-[28px] font-semibold">
        Add Payment Method
      </CardTitle>
      <p className="md:text-base text-sm md:max-w-full max-w-[320px]">
        Add your preferred payment method from here
      </p>
    </CardHeader>
  );
};
