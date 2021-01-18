import React from "react";
import { Form } from "react-bootstrap";

const isValidField = (touched: Boolean, errors: any) => {
  if (touched && errors) {
    return false;
  }

  if (touched && !errors) {
    return true;
  }

  return null;
};

export function Textarea({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  withFeedbackLabel = true,
  customFeedbackLabel,
  ...props
}: any) {
  console.log(field);

  const valid = isValidField(touched[field.name], errors[field.name]);
  const isValid = valid !== null ? valid : undefined;
  const isInValid = valid !== null ? !valid : undefined;

  return (
    <>
      <Form.Group>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control
          as="textarea"
          isValid={isValid}
          isInvalid={isInValid}
          {...field}
          {...props}
        />
        <Form.Control.Feedback type="invalid">
          {errors[field.name]}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
}
