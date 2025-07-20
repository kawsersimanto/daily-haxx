import Register from "@/components/forms/register/Register";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <Card className="max-w-[530px] mx-auto py-12 md:px-[74px] px-5S">
      <CardDescription>
        <div className="flex flex-col gap-9.5 items-center">
          <div>
            <Image
              src="/logo.svg"
              width={180}
              height={40}
              className="xl:w-[180px] xs:w-[140px] w-[120px] h-auto lg:h-[40px] object-contain dark:hidden"
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
          <div className="flex flex-col gap-9.5">
            <div>
              <h2 className="text-[28px] mb-3.5 font-bold text-foreground text-center">
                Welcome to
              </h2>
              <p className="text-center text-base">
                Enter your email address and we&apos;ll send you a verification
                code to <strong>Sign in</strong>
              </p>
            </div>
            <Register />
          </div>
        </div>
      </CardDescription>
    </Card>
  );
};

export default RegisterPage;
