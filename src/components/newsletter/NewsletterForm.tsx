"use client";

import {
  FormCheckbox,
  FormInput,
  FormOtp,
  FormSelect,
  FormTextArea,
} from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

// Your Zod schema
export const sampleSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  agreeToTerms: z.boolean().refine((v) => v === true, {
    message: "You must accept the terms",
  }),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  country: z.string().nonempty("Country is required"),
  otp: z.string().length(6, "OTP must be 6 digits"),
});

// Typed form data from schema
type FormData = z.infer<typeof sampleSchema>;

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "bd", label: "Bangladesh" },
];

const NewsletterForm: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(sampleSchema),
    defaultValues: {
      username: "",
      email: "",
      agreeToTerms: false,
      bio: "",
      country: "",
      otp: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormInput
          control={form.control}
          name="username"
          label="Username"
          placeholder="Enter your username"
        />

        <FormInput
          control={form.control}
          name="email"
          label="Email"
          placeholder="you@example.com"
          type="email"
        />

        <FormCheckbox
          control={form.control}
          name="agreeToTerms"
          label="I agree to the terms and conditions"
        />

        <FormTextArea
          control={form.control}
          name="bio"
          label="Bio"
          placeholder="Tell us about yourself"
        />

        <FormSelect
          control={form.control}
          name="country"
          label="Country"
          options={countries}
          placeholder="Select your country"
        />

        <FormOtp
          control={form.control}
          name="otp"
          label="One-Time Password"
          maxLength={6}
        />

        <Button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default NewsletterForm;
