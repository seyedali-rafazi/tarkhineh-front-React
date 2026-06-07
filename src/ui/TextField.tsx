import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { ChangeEventHandler } from "react";

interface TextFieldProps<T extends FieldValues = FieldValues> {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  validationSchema?: RegisterOptions<T, Path<T>>;
  type?: string;
  required?: boolean;
  errors?: FieldErrors<T>;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
}

function TextField<T extends FieldValues = FieldValues>({
  name,
  register,
  validationSchema,
  type = "text",
  errors,
  value,
  onChange,
  placeholder,
  className,
}: TextFieldProps<T>) {
  return (
    <div className="space-y-2 w-full">
      <input
        className={className}
        {...register(name, validationSchema)}
        id={name}
        autoComplete="off"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errors && errors[name] && (
        <span className="text-error-200 block text-xs mt-2">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}

export default TextField;
