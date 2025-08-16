"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  formatCardNumber,
  formatExpiryDate,
  PaymentFormData,
  PaymentHeader,
  paymentSchema,
  Privacy,
} from "@/features/billing";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";

export const AddPaymentMethod = () => {
  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
      name: "",
      email: "",
    },
  });

  const handleSubmit = async (data: PaymentFormData) => {
    console.log(data);
  };

  const handleCardNumberChange = (
    value: string,
    onChange: (value: string) => void
  ) => {
    const formattedCardNumber = formatCardNumber(value);
    onChange(formattedCardNumber);
  };

  const handleExpiryDateChange = (
    value: string,
    onChange: (value: string) => void
  ) => {
    const formattedExpiryDate = formatExpiryDate(value);
    onChange(formattedExpiryDate);
  };

  return (
    <Card className="max-w-[570px] mx-auto gap-10 px-10 py-7.5">
      <PaymentHeader />
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-start">
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Card Number</FormLabel>
                    <div className="relative">
                      <FormControl className="py-3 px-5 h-auto">
                        <Input
                          placeholder="1223 1208 0911 1123"
                          {...field}
                          onChange={(e) =>
                            handleCardNumberChange(
                              e.target.value,
                              field.onChange
                            )
                          }
                          maxLength={19}
                        />
                      </FormControl>
                      <Image
                        src="visa.svg"
                        height={24}
                        width={32}
                        className="w-8 h-6 object-contain absolute top-1/2 -translate-y-1/2 right-5 pointer-events-none"
                        alt="Visa icon"
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry date</FormLabel>
                    <FormControl className="py-3 px-5 h-auto">
                      <Input
                        placeholder="MM / YY"
                        {...field}
                        onChange={(e) =>
                          handleExpiryDateChange(e.target.value, field.onChange)
                        }
                        maxLength={7}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="securityCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Security Code</FormLabel>
                    <FormControl className="py-3 px-5 h-auto">
                      <Input placeholder="CVV" {...field} maxLength={4} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Full Name</FormLabel>
                    <FormControl className="py-3 px-5 h-auto">
                      <Input placeholder="eg. John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl className="py-3 px-5 h-auto">
                      <Input placeholder="eg. johndoe@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Privacy />
            <div className="space-y-3">
              <Button
                type="submit"
                className="w-full bg-primary py-2.5 h-auto text-lg"
              >
                Add
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full bg-transparent py-2.5 h-auto text-lg"
                onClick={() => form.reset()}
              >
                Go Back
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
