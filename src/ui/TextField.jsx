import React from "react";

function TextField({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
  value,
  onChange,
  placeholder,
  className,
}) {
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
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
