import { EmailFormValues, emailSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const Email = () => {
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: EmailFormValues) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="gap-2.5">
              <FormLabel className="text-lg font-medium text-foreground leading-5">
                Email address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email address"
                  {...field}
                  className="h-auto py-2.5 px-5 !text-base"
                />
              </FormControl>
              <FormMessage className="mb-2" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full mt-5 text-lg font-medium text-background h-auto py-2.5"
        >
          Next
        </Button>
      </form>
    </Form>
  );
};

export default Email;
