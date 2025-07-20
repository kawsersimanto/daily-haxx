import Register from "@/components/forms/register/Register";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <Card className="max-w-[530px] w-full mx-auto py-12 md:px-[74px] relative">
      <CardDescription>
        <div className="flex justify-center mb-[38px]">
          <Image
            src="/logo.svg"
            width={180}
            height={40}
            className="xl:w-[180px] w-[160px] h-auto lg:h-[40px] object-contain dark:hidden"
            alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
          />
          <Image
            src="/dark-logo.svg"
            width={180}
            height={40}
            className="xl:w-[180px] xs:w-[140px] w-[120px] h-auto lg:h-[40px] object-contain not-dark:hidden"
            alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
          />
        </div>
        <div className="mb-[38px] px-5">
          <h2 className="text-[28px] mb-3.5 font-bold text-foreground text-center">
            Welcome to
          </h2>
          <p className="text-center sm:text-base text-sm">
            Enter your email address and we&apos;ll send you a verification code
            to <strong>Sign in</strong>
          </p>
        </div>
        <Register />
      </CardDescription>
      <Button className="absolute top-6 right-6 p-0 h-auto" variant={"link"}>
        <Image
          src="/close.svg"
          height={12}
          width={12}
          className="w-2.5 h-2.5 object-contain"
          alt="Close Icon"
        />
      </Button>
    </Card>
  );
};

export default RegisterPage;
