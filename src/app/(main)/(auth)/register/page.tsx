import Register from "@/components/forms/register/Register";
import Logo from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Card className="max-w-[530px] mx-auto py-12 relative">
      <CardDescription>
        <div className="flex justify-center mb-[38px]">
          <Logo />
        </div>
        <Register />
      </CardDescription>
      <Button
        className="absolute top-6 right-6 p-0 h-auto"
        variant={"link"}
        asChild
      >
        <Link href="/">
          <Image
            src="/close.svg"
            height={12}
            width={12}
            className="w-2.5 h-2.5 object-contain"
            alt="Close Icon"
          />
        </Link>
      </Button>
    </Card>
  );
};

export default RegisterPage;
