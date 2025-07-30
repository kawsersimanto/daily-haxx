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
  useOnboardingStore,
} from "@/features/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Step1 = () => {
  const { data, updateData, nextStep } = useOnboardingStore();

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
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Welcome to the <span className="text-green-600">HexxDaily</span>{" "}
          Community
        </h2>
        <p className="text-gray-600">
          Get the latest updates and insights delivered straight to your inbox.
          Start by telling us your name.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
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
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800"
          >
            Next
          </Button>
        </form>
      </Form>
    </div>
  );
};
