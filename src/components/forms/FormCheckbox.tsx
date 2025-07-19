import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

type FormCheckboxProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
};

const FormCheckbox = <T extends FieldValues>({
  control,
  name,
  label,
}: FormCheckboxProps<T>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex items-center gap-2 space-y-0">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        {label && <FormLabel className="!m-0">{label}</FormLabel>}
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormCheckbox;
