"use client";

import { FormInput } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import z from "zod";
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
          <Image
            src="/mail.svg"
            width={14}
            height={12}
            className="object-contain pointer-events-none absolute top-1/2 -translate-y-1/2 left-[10px]"
            alt="Mail Icon"
          />
          <FormInput
            control={form.control}
            name="email"
            placeholder="Enter your email"
            className="border-r-0 rounded-tr-[0] rounded-br-[0] bg-card pt-2.5 pb-2.5 pe-2.5 ps-8 h-[42px]"
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
