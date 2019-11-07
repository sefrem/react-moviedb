import React from "react";

const Field = props => {
  const {
    labelText,
    id,
    type,
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    error
  } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{labelText}</label>
      <input
        id={id}
        type={type}
        className={error ? "form-control border-danger" : "form-control"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  );
};

export default Field;
