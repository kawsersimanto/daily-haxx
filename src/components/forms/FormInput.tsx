import type { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type FormInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  labelClass?: string;
};

const FormInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className,
  labelClass,
}: FormInputProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="mb-0 gap-x-2.5">
        {label && <FormLabel className={labelClass}>{label}</FormLabel>}
        <FormControl>
          <Input
            type={type}
            placeholder={placeholder}
            {...field}
            className={className}
          />
        </FormControl>
        <FormMessage className="mb-2" />
      </FormItem>
    )}
  />
);

export default FormInput;
