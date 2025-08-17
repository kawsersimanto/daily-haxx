import { CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/shared";

export const PaymentHeader = () => {
  return (
    <CardHeader className="text-center gap-1 p-0">
      <CardTitle className="text-[28px] flex flex-col items-center justify-center gap-3">
        <Logo />
        <p className="md:text-sm font-normal text-sm md:max-w-full max-w-[320px]">
          Add your preferred payment method from here
        </p>
      </CardTitle>
    </CardHeader>
  );
};
