import React from "react";

const inputLabel = ({ label, touched, error, customFeedbackLabel }: any) => {
  if (error) {
    return <div className="invalid-feedback d-block">{error}</div>;
  }

  // if (touched && !error && label) {
  //   return <div className="valid-feedback">{label} was entered correct</div>;
  // }

  return (
    <div className="feedback">
      {customFeedbackLabel && <>{customFeedbackLabel}</>}
      {/* {!customFeedbackLabel && (
        <>
          Please enter <b>{label}</b>
        </>
      )} */}
    </div>
  );
};

const selectLabel = ({ label, touched, error, customFeedbackLabel }: any) => {
  if (error) {
    return <div className="invalid-feedback d-block">{error}</div>;
  }

  return (
    <div className="feedback">
      {customFeedbackLabel && <>{customFeedbackLabel}</>}
      {/* {!customFeedbackLabel && label && (
				<>
					Hãy chọn <b>{label}</b>
				</>
			)} */}
    </div>
  );
};

export function FieldFeedbackLabel({
  label,
  touched,
  error,
  type,
  customFeedbackLabel,
}: any) {
  switch (type) {
    case "text":
      return inputLabel({ label, touched, error, customFeedbackLabel });
    case "email":
      return inputLabel({ label, touched, error, customFeedbackLabel });
    case "password":
      return inputLabel({ label, touched, error, customFeedbackLabel });
    default:
      return selectLabel({ label, touched, error, customFeedbackLabel });
  }
}