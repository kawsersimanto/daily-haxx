"use client";

import { EmailFormValues, emailSchema } from "@/schemas/authSchema";
import { useRegisterSelector } from "@/store/auth/registerStore";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const Email = () => {
  const email = useRegisterSelector.use.email();
  const isHydrated = useRegisterSelector.use.isHydrated();
  const setEmail = useRegisterSelector.use.setEmail();
  const nextStep = useRegisterSelector.use.nextStep();

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: EmailFormValues) => {
    console.log(data);
    setEmail(data?.email);
    nextStep();
  };

  useEffect(() => {
    if (isHydrated) {
      form.reset({ email });
    }
  }, [isHydrated, email, form]);

  return (
    <>
      <div className="mb-[38px] px-5">
        <h2 className="text-[28px] mb-3.5 font-bold text-foreground text-center">
          Welcome to
        </h2>
        <p className="text-center sm:text-base text-sm">
          Enter your email address and we&apos;ll send you a verification code
          to <strong>Sign in</strong>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="h-auto py-2.5 px-5 !text-base"
                    />
                  </FormControl>
                  <Image
                    src={"/mail-2.svg"}
                    width={20}
                    height={16}
                    className="absolute top-1/2 -translate-y-1/2 right-[10px] object-contain w-[20px] h-[16px]"
                    alt="Form Icon"
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full mt-5 text-lg font-medium text-background h-auto py-2.5"
          >
            Next
          </Button>
        </form>
      </Form>
    </>
  );
};

export default Email;
