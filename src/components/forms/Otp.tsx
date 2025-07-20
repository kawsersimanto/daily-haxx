"use client";

import { OtpFormValues, otpSchema } from "@/schemas/authSchema";
import { useRegisterSelector } from "@/store/auth/registerStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const Otp = () => {
  const email = useRegisterSelector.use.email();
  const prevStep = useRegisterSelector.use.prevStep();
  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: OtpFormValues) => {
    console.log(data);
  };

  return (
    <>
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
          <div className="flex gap-3.5 items-center mt-5 max-w-[280px] justify-center mx-auto">
            <Button
              onClick={prevStep}
              variant={"outline"}
              className="w-full md:text-lg text-sm font-medium h-auto py-2.5 border-primary text-primary shrink grow basis-[50%]"
            >
              Previous
            </Button>
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              className="w-full md:text-lg text-sm font-medium text-background h-auto py-2.5 shrink grow basis-[50%]"
            >
              Verify
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Otp;
