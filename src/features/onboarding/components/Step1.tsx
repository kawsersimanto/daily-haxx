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
import {
  Step1Data,
  step1Schema,
  useOnboardingData,
  useOnboardingStep,
} from "@/features/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Step1 = () => {
  const { data, updateData } = useOnboardingData();
  const { nextStep } = useOnboardingStep();

  const form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      firstName: data.firstName || "",
      lastName: data.lastName || "",
    },
  });

  const onSubmit = (formData: Step1Data) => {
    updateData(formData);
    nextStep();
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="mb-[38px]">
          <h2 className="text-[28px] mb-3.5 font-bold text-foreground text-center leading-tight">
            Welcome to the{" "}
            <span className="text-primary">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </span>{" "}
            Community
          </h2>
          <p className="text-center sm:text-base text-sm">
            Get the latest updates and insights delivered straight to your
            inbox. Start by telling us your name.
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="mb-[22px]">
                <FormLabel className="md:text-lg text-sm text-foreground">
                  First name
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-auto py-2.5 px-5 md:!text-base text-sm"
                    placeholder="Enter your first name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg text-sm text-foreground">
                  Last name
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-auto py-2.5 px-5 md:!text-base text-sm"
                    placeholder="Enter your last name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full md:mt-5 mt-4 md:text-lg text-sm font-medium text-background h-auto py-2.5"
          >
            Next
          </Button>
        </form>
      </Form>
    </div>
  );
};
