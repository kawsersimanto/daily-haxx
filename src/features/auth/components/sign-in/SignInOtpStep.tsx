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
import { Spinner } from "@/components/ui/spinner";
import {
  sendOtp,
  useAuthEmail,
  useAuthSteps,
  verifyOtp,
} from "@/features/auth";
import { OtpFormValues, otpSchema } from "@/features/auth/schemas/authSchema";
import { ApiErrorResponse } from "@/types";
import { handleApiError } from "@/utils/handleApiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const SignInOtpStep = () => {
  const router = useRouter();
  const { mutate: sendOtpFn, isPending: isResendingOtp } = useMutation({
    mutationFn: sendOtp,
    onSuccess: () => {
      toast.success("OTP sent successfully!");
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      handleApiError(error);
    },
  });

  const { mutate: verifyOtpFn, isPending: isVerifying } = useMutation({
    mutationFn: ({ email, otp }: { email: string; otp: string }) =>
      verifyOtp(email, otp),
    onSuccess: () => {
      toast.success("OTP verified successfully!");
      router.push("/onboarding");
    },
    onError: (error: AxiosError<ApiErrorResponse>) => {
      handleApiError(error);
    },
  });

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
    if (!email) {
      toast.error("Email not available");
      return;
    }
    verifyOtpFn({ email, otp: data.otp });
  };

  return (
    <div>
      <div className="mb-[38px] px-5">
        <h2 className="text-[28px] mb-3.5 font-bold text-foreground text-center">
          Verify your email
        </h2>
        <p className="text-center sm:text-base text-sm">
          We sent a 6-digit verification code to
          <br />
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
              disabled={!form.formState.isValid || isVerifying}
              type="submit"
              className="md:text-lg text-sm font-medium text-background h-auto py-2.5 grow"
            >
              {isVerifying ? <Spinner /> : "Verify"}
            </Button>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="md:text-lg text-sm">Didn&apos;t receive the code?</p>
            <Button
              variant={"link"}
              className="h-auto p-0 font-semibold md:text-lg text-sm text-foreground"
              onClick={() => sendOtpFn(email)}
              disabled={isResendingOtp}
            >
              Resend code
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
