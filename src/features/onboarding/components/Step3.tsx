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
  useOnboardingStore,
} from "@/features/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Step3 = () => {
  const { data, updateData, previousStep, resetForm } = useOnboardingStore();

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
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Just one last step
        </h2>
        <p className="text-gray-600">
          {"Just a few more questions, you're almost done!"}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="companyIndustry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{"What's your company's industry?*"}</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
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
                <FormLabel>How big is your company?*</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
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
                <FormLabel>Your postal code?</FormLabel>
                <FormControl>
                  <Input placeholder="12345" {...field} />
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
              Complete
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
