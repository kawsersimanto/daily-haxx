"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import FormIconInput from "../forms/FormIconInput";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { NewsletterFormValues, newsletterSchema } from "./newsletterSchema";

const NewsletterForm = () => {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newsletterSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
        <div className="grow relative">
          <FormIconInput
            control={form.control}
            name="email"
            placeholder="Enter your email"
            className="border-r-0 rounded-tr-[0] rounded-br-[0] bg-card h-[42px]"
            position="start"
          />
        </div>
        <Button
          type="submit"
          className="rounded-tl-[0] rounded-bl-[0] uppercase p-2.5 font-work-sans h-[42px]"
        >
          Subscribe
        </Button>
      </form>
    </Form>
  );
};

export default NewsletterForm;
