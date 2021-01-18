import React from "react";
import { FieldFeedbackLabel } from "./FieldFeedbackLabel";

const getFieldCSSClasses = (touched: Boolean, errors: any) => {
  const classes = ["form-control"];
  if (touched && errors) {
    classes.push("is-invalid");
  }

  if (touched && !errors) {
    classes.push("is-valid");
  }

  return classes.join(" ");
};

export function Select({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors },
  label,
  withFeedbackLabel = true,
  type = "text",
  customFeedbackLabel,
  children,
  ...props
}: any) {
  return (
    <>
      {label && <label>{label}</label>}
      <select
        {...field}
        {...props}
        className={getFieldCSSClasses(touched[field.name], errors[field.name])}
        onChange={(event: any) => {
          field.onChange(event);
          if (props.onChange) {
            props.onChange(event);
          }
        }}
      >
        {children}
      </select>
      {withFeedbackLabel && (
        <FieldFeedbackLabel
          error={errors[field.name]}
          touched={touched[field.name]}
          label={label}
          customFeedbackLabel={customFeedbackLabel}
        />
      )}
    </>
  );
}
