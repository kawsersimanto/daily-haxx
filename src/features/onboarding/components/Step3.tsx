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
  companySizes,
  industries,
  Step3Data,
  step3Schema,
  useOnboardingData,
  useOnboardingStep,
} from "@/features/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Step3 = () => {
  const { previousStep } = useOnboardingStep();
  const { data, updateData, resetForm } = useOnboardingData();

  const form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      companyIndustry: data.companyIndustry || "",
      companySize: data.companySize || "",
      postalCode: data.postalCode || "",
    },
  });

  const onSubmit = (formData: Step3Data) => {
    updateData(formData);
    console.log("Onboarding completed successfully!", { ...data, ...formData });
    resetForm();
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
            name="companyIndustry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg text-sm text-foreground">
                  {"What's your company's industry?*"}
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="!h-auto py-2.5 !px-5 md:text-base text-sm">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
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
            name="companySize"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg text-sm text-foreground">
                  How big is your company?*
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="!h-auto py-2.5 !px-5 md:text-base text-sm">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {companySizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
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
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="md:text-lg text-sm text-foreground">
                  Your postal code?
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-auto py-2.5 px-5 md:!text-base text-sm"
                    placeholder="1204"
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
              Complete
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
