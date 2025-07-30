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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  jobFunctions,
  jobLevels,
  Step2Data,
  step2Schema,
  useOnboardingData,
  useOnboardingStep,
} from "@/features/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Step2 = () => {
  const { nextStep, previousStep } = useOnboardingStep();
  const { data, updateData } = useOnboardingData();

  const form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      jobLevel: data.jobLevel || "",
      jobFunction: data.jobFunction || "",
      companyName: data.companyName || "",
    },
  });

  const onSubmit = (formData: Step2Data) => {
    updateData(formData);
    nextStep();
  };

  return (
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="jobLevel"
            render={({ field }) => (
              <FormItem className="mb-[22px]">
                <FormLabel className="md:text-lg text-sm text-foreground">
                  {"What's your current job level?*"}
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="!h-auto py-2.5 !px-5 md:text-base text-sm">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {jobLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="jobFunction"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg text-sm text-foreground">
                  What is your day-to-day job function?*
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="!h-auto py-2.5 !px-5 md:text-base text-sm">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {jobFunctions.map((jobFunction) => (
                      <SelectItem key={jobFunction} value={jobFunction}>
                        {jobFunction}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg text-sm text-foreground">
                  What company do you work for?
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-auto py-2.5 px-5 md:!text-base text-sm"
                    placeholder="Company name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={previousStep}
              className="flex-1 w-full md:mt-5 mt-4 md:text-lg text-sm font-medium text-foreground h-auto py-2.5"
            >
              Previous
            </Button>
            <Button
              type="submit"
              className="flex-1 w-full md:mt-5 mt-4 md:text-lg text-sm font-medium text-background h-auto py-2.5"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
