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
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-secondery-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        className="textField "
        {...register(name, validationSchema)}
        id={name}
        autoComplete="off"
        type={type}
        value={value}
        onChange={onChange}
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
