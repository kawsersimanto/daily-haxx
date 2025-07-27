"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useAuthEmail, useAuthSteps } from "@/features/auth";
import { OtpFormValues, otpSchema } from "@/features/auth/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useForm } from "react-hook-form";

export const SignInOtpStep = () => {
  const { email } = useAuthEmail();
  const { prevStep } = useAuthSteps();

  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (data: OtpFormValues) => {
    console.log(data);
  };

  return (
    <div>
      <div className="mb-[38px] px-5">
        <h2 className="text-[28px] mb-3.5 font-bold text-foreground text-center">
          Verify your email
        </h2>
        <p className="text-center sm:text-base text-sm">
          We sent a 6-digit verification code to<br></br>
          <strong>{email || "Not Available"}</strong>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="justify-center">
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                    autoFocus={false}
                    {...field}
                  >
                    <InputOTPGroup className="md:gap-3.5 gap-2">
                      {[...Array(6)].map((_, i) => (
                        <InputOTPSlot
                          key={i}
                          index={i}
                          className="md:w-12 w-10 h-10 md:h-12 border border-border text-primary rounded"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />
          <div className="flex justify-center mt-7 gap-3.5 mb-7">
            <Button
              onClick={(e) => {
                e.preventDefault();
                prevStep();
              }}
              variant={"outline"}
              className="md:text-lg text-sm font-medium h-auto py-2.5 border-primary text-primary grow"
            >
              Previous
            </Button>
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              className="md:text-lg text-sm font-medium text-background h-auto py-2.5 grow"
            >
              Verify
            </Button>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="md:text-lg text-sm">Didn&apos;t receive the code?</p>
            <Button
              variant={"link"}
              className="h-auto p-0 font-semibold md:text-lg text-sm text-foreground"
            >
              Resend code
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
