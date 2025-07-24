"use client";

import Logo from "@/components/logo/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  PersonalInfoFormValues,
  personalInfoSchema,
} from "@/features/auth/schemas/authSchema";
import { useOnBoardingSelector } from "@/store/auth/onboardingStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  const updateFormData = useOnBoardingSelector.use.updateFormData();
  const isHydrated = useOnBoardingSelector.use.isHydrated();
  const currentStep = useOnBoardingSelector.use.currentStep();
  const progress = useOnBoardingSelector.use.progress();
  const { firstName, lastName } = useOnBoardingSelector.use.formData();
  const nextStep = useOnBoardingSelector.use.nextStep();

  const form = useForm<PersonalInfoFormValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data: PersonalInfoFormValues) => {
    console.log(data);
    updateFormData(data);
    nextStep();
  };

  useEffect(() => {
    if (isHydrated) {
      form.reset({
        firstName,
        lastName,
      });
    }
  }, [isHydrated, firstName, lastName, form]);

  return (
    <Card className="mx-auto py-12 px-[74px] relative">
      <CardDescription>
        <div className="flex justify-center mb-[38px]">
          <Logo />
        </div>
        <div className="mb-[38px]">
          <p className="mb-2">Step {currentStep + 1} of 3</p>
          <Progress
            value={progress}
            className="w-full h-[5px] rounded-[20px]"
          />
        </div>
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="mb-[22px]">
                    <FormLabel className="md:text-lg text-sm text-foreground">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your first name"
                        {...field}
                        className="h-auto py-2.5 px-5 md:!text-base text-sm"
                        autoFocus={false}
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
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your last name"
                        {...field}
                        className="h-auto py-2.5 px-5 md:!text-base text-sm"
                        autoFocus={false}
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
      </CardDescription>
    </Card>
  );
};

export default PersonalInfo;
