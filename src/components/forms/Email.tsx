import { EmailFormValues, emailSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
            <FormItem>
              <div className="relative">
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className="h-auto py-2.5 px-5 !text-base"
                  />
                </FormControl>
                <Image
                  src={"/mail-2.svg"}
                  width={20}
                  height={16}
                  className="absolute top-1/2 -translate-y-1/2 right-[10px] object-contain w-[20px] h-[16px]"
                  alt="Form Icon"
                />
              </div>
              <FormMessage />
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
