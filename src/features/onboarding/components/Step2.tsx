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
  useOnboardingStore,
} from "@/features/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Step2 = () => {
  const { data, updateData, nextStep, previousStep } = useOnboardingStore();

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
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          {"Let's get know you better!"}
        </h2>
        <p className="text-gray-600">
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
              <FormItem>
                <FormLabel>{"What's your current job level?*"}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
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
                <FormLabel>What is your day-to-day job function?*</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
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
                <FormLabel>What company do you work for?</FormLabel>
                <FormControl>
                  <Input placeholder="Company name" {...field} />
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
              className="flex-1 bg-transparent"
            >
              Previous
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-green-700 hover:bg-green-800"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
