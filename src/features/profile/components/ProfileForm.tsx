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
import { ProfileFormValues, ProfileSchema } from "@/features/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const ProfileForm = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      postCode: "",
    },
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
                    {...field}
                    className="h-auto py-2 px-3.5 md:!text-base text-sm"
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
                <FormLabel className="text-foreground">Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
                    {...field}
                    className="h-auto py-2 px-3.5 md:!text-base text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    className="h-auto py-2 px-3.5 md:!text-base text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Post Code</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your post code"
                    {...field}
                    className="h-auto py-2 px-3.5 md:!text-base text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-10">
          <Button
            type="submit"
            className="w-auto md:text-lg text-sm font-medium text-background h-auto py-2.5"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};
