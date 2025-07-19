import { cn } from "@/lib/utils";
import Image from "next/image";
import type { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type FormIconInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  labelClass?: string;
  icon?: string;
  position: "start" | "end";
  iconClass?: string;
};

const FormIconInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  className,
  labelClass,
  icon,
  position = "start",
  iconClass,
}: FormIconInputProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="mb-0 gap-x-2.5">
        {label && <FormLabel className={labelClass}>{label}</FormLabel>}
        {/* <FormControl>
          <div className="relative">
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className={className}
            />
            <Image
              src={icon || "/mail.svg"}
              width={14}
              height={12}
              className={cn(
                "absolute top-1/2 -translate-y-1/2",
                position === "start" && "left-[10px]",
                position === "end" && "right-[10px]",
                iconClass
              )}
              alt="Form Icon"
            />
          </div>
        </FormControl> */}
        <div className="relative">
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className={cn(
                className,
                position === "start" && "pt-2.5 pb-2.5 pe-2.5 ps-8",
                position === "end" && "pt-2.5 pb-2.5 ps-2.5 pe-8"
              )}
            />
          </FormControl>
          <Image
            src={icon || "/mail.svg"}
            width={14}
            height={12}
            className={cn(
              "absolute top-1/2 -translate-y-1/2",
              position === "start" && "left-[10px]",
              position === "end" && "right-[10px]",
              iconClass
            )}
            alt="Form Icon"
          />
        </div>
        <FormMessage className="mb-2" />
      </FormItem>
    )}
  />
);

export default FormIconInput;
