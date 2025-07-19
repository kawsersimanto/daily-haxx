import { REGEXP_ONLY_DIGITS } from "input-otp";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

type FormOtpProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  maxLength?: number;
};

const FormOtp = <T extends FieldValues>({
  control,
  name,
  label,
  maxLength = 6,
}: FormOtpProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="mb-0 gap-x-2.5">
        {label && <FormLabel>{label}</FormLabel>}
        <FormControl>
          <InputOTP
            maxLength={maxLength}
            pattern={REGEXP_ONLY_DIGITS}
            {...field}
          >
            <InputOTPGroup className="gap-3.5">
              {[...Array(maxLength)].map((_, i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="w-12 h-12 border border-border rounded"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormOtp;
