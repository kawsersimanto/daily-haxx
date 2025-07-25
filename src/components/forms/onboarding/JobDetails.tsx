"use client";

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { jobFunctions, jobLevels } from "@/constants/onboarding";
import {
  JobDetailsFormValues,
  jobDetailsSchema,
} from "@/features/auth/schemas/authSchema";
import { Logo } from "@/shared";
import { useOnBoardingSelector } from "@/store/auth/onboardingStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const JobDetails = () => {
  const updateFormData = useOnBoardingSelector.use.updateFormData();
  const isHydrated = useOnBoardingSelector.use.isHydrated();
  const currentStep = useOnBoardingSelector.use.currentStep();
  const progress = useOnBoardingSelector.use.progress();
  const { jobLevel, jobFunction, company } =
    useOnBoardingSelector.use.formData();
  const nextStep = useOnBoardingSelector.use.nextStep();
  const prevStep = useOnBoardingSelector.use.prevStep();

  const form = useForm<JobDetailsFormValues>({
    resolver: zodResolver(jobDetailsSchema),
    defaultValues: {
      jobLevel: "",
      jobFunction: "",
      company: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: JobDetailsFormValues) => {
    console.log(data);
    updateFormData(data);
    nextStep();
  };

  useEffect(() => {
    console.log("Hydration effect:", {
      isHydrated,
      jobLevel,
      jobFunction,
      company,
    });

    if (isHydrated && (jobLevel || jobFunction || company)) {
      form.reset({
        jobLevel: jobLevel || "",
        jobFunction: jobFunction || "",
        company: company || "",
      });
    }
  }, [isHydrated, jobLevel, jobFunction, company, form]);

  if (!isHydrated) return null;

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
              Let&apos;s get know you better!
            </h2>
            <p className="text-center sm:text-base text-sm">
              Nice to meet you! Tell us a little about your job to help us cover
              topics most relevant to you.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="jobLevel"
                render={({ field }) => (
                  <FormItem className="mb-[22px]">
                    <FormLabel className="md:text-lg text-sm text-foreground">
                      What&apos;s your current job level?*
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value);
                          updateFormData({ jobLevel: value });
                        }}
                      >
                        <SelectTrigger className="!h-auto py-2.5 !px-5 md:text-base text-sm">
                          <SelectValue placeholder="Select job level" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobFunction"
                render={({ field }) => (
                  <FormItem className="mb-[22px]">
                    <FormLabel className="md:text-lg text-sm text-foreground">
                      What is your day-to-day job function?*
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => {
                          field.onChange(value);
                          updateFormData({ jobFunction: value });
                        }}
                      >
                        <SelectTrigger className="!h-auto py-2.5 !px-5 md:text-base text-sm">
                          <SelectValue placeholder="Select job level" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobFunctions.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="md:text-lg text-sm text-foreground">
                      What company do you work for?
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company name"
                        {...field}
                        className="h-auto py-2.5 px-5 md:!text-base text-sm"
                        autoFocus={false}
                      />
                    </FormControl>
                    <FormMessage />
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
                  Next
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardDescription>
    </Card>
  );
};

export default JobDetails;
