import Image from "next/image";
import { ComponentType, ReactNode } from "react";
import Logo from "../logo/Logo";
import { Button } from "../ui/button";
import { Card, CardDescription } from "../ui/card";

interface AuthProps {
  children: ReactNode;
  onClose?: () => void;
  progress?: ComponentType;
}

const Auth = ({ children, onClose, progress: Progress }: AuthProps) => {
  return (
    <Card className="mx-auto py-12 relative max-w-[530px]">
      <CardDescription>
        <div className="flex justify-center mb-[38px]">
          <Logo className="w-[140px]" />
          {Progress && <Progress />}
        </div>
        {children}
      </CardDescription>
      <Button
        onClick={onClose}
        className="absolute top-6 right-6 p-0 h-auto"
        variant={"link"}
      >
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

export default Auth;
