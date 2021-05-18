import React, { useEffect } from "react";

const Input = ({ value, change_func, valid_func, validation, title }) => {
  useEffect(() => {
    if (value) {
      if (!valid_func(value)) {
        return validation([title, false]);
      } else {
        return validation([title, true]);
      }
    }
  }, [value]);
  const handleChange = (input) => {
    change_func(input);
    if (!valid_func(input.target.value)) {
      return validation([input.target.title, false]);
    } else {
      return validation([input.target.title, true]);
    }
  };
  return (
    <input title={title} type="text" value={value} onChange={handleChange} />
  );
};

export default Input;
