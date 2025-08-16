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
  paymentSchema,
} from "@/features/billing";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const AddPaymentMethod = () => {
  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
      country: "",
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
    <Card className="w-full max-w-md mx-auto">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1223 1208 0911 1123"
                      {...field}
                      onChange={(e) =>
                        handleCardNumberChange(e.target.value, field.onChange)
                      }
                      maxLength={19}
                    />
                  </FormControl>
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
                  <FormControl>
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
                  <FormControl>
                    <Input placeholder="CVV" {...field} maxLength={4} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="eg. John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-3">
              <Button type="submit" className="w-full bg-primary">
                Add
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full bg-transparent"
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
