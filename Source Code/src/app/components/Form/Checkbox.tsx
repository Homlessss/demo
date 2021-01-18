import React, { useState } from "react";
import { Field } from "formik";
import { makeid } from "../../helpers";

const getFieldCSSClasses = (touched: Boolean, errors: any) => {
  const classes = ["form-check-input"];
  if (touched && errors) {
    classes.push("is-invalid");
  }

  if (touched && !errors) {
    classes.push("is-valid");
  }

  return classes.join(" ");
};

export function Checkbox({
  field,
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  children,
  ...props
}: any) {
  return (
    <label>
      <input {...field} {...props} type="checkbox" />
      {label}
    </label>
  );
}

export function FCheckbox(props: any) {
  const [id] = useState(makeid(5));
  return (
    <Field name={props.name}>
      {({ field, form }: any) => {
        const processData = () => {
          if (Array.isArray(field.value)) {
            if (field.value.includes(props.value)) {
              const nextValue = field.value.filter(
                (value: any) => value !== props.value
              );

              form.setFieldValue(props.name, nextValue);
            } else {
              const nextValue = field.value.concat(props.value);
              form.setFieldValue(props.name, nextValue);
            }
          } else {
            if (field.value === (props.value || true)) {
              form.setFieldValue(
                props.name,
                props["uncheck-value"] !== false
                  ? props["uncheck-value"]
                  : false
              );
            } else {
              form.setFieldValue(props.name, props.value || true);
            }
          }
        };

        const isChecked = () => {
          if (Array.isArray(field.value)) {
            return field.value.includes(props.value || true);
          } else {
            return field.value === (props.value || true);
          }
        };
        return (
          <div className="form-check">
            <input
              {...props}
              className={getFieldCSSClasses(
                form.touched[field.name],
                form.errors[field.name]
              )}
              id={id}
              type="checkbox"
              checked={isChecked()}
              onChange={(event) => {
                processData();

                if (props.onChange) {
                  props.onChange(event);
                }
              }}
            />
            <label htmlFor={id} className="form-check-label">
              {props.label}
            </label>
          </div>
        );
      }}
    </Field>
  );
}
