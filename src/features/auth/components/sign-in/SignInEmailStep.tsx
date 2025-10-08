"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import {
  EmailFormValues,
  emailSchema,
  sendOtp,
  useAuthEmail,
  useAuthSteps,
} from "@/features/auth";
import { ApiErrorResponse } from "@/types";
import { handleApiError } from "@/utils/handleApiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const SignInEmailStep = () => {
  const { mutate: sendOtpFn, isPending } = useMutation({
    mutationFn: sendOtp,
    onSuccess: () => {
      toast.success("OTP sent successfully!");
      nextStep();
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      handleApiError(error);
    },
  });

  const { email, setEmail, hydrated: emailHydrated } = useAuthEmail();
  const { nextStep } = useAuthSteps();

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: EmailFormValues) => {
    setEmail(data?.email);
    sendOtpFn(data?.email);
  };

  useEffect(() => {
    if (emailHydrated) {
      form.reset({ email });
    }
  }, [emailHydrated, email, form]);

  return (
    <div className="max-w-[380px] mx-auto">
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
                <FormLabel className="md:text-lg text-sm text-foreground">
                  Email Address
                </FormLabel>
                <div className="relative">
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="h-auto py-2.5 px-5 md:!text-base text-sm"
                      autoFocus={false}
                    />
                  </FormControl>
                  <Image
                    src={"/mail-2.svg"}
                    width={20}
                    height={16}
                    className="absolute top-1/2 -translate-y-1/2 right-[10px] object-contain w-[20px] h-[16px] pointer-events-none"
                    alt="Form Icon"
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isPending}
            className="w-full md:mt-5 mt-4 md:text-lg text-sm font-medium text-background h-auto py-2.5"
          >
            {isPending ? <Spinner /> : "Next"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
