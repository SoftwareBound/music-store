import React, { useEffect } from "react";

const Textarea = ({ value, change_func, valid_func, validation, title }) => {
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
    <textarea title={title} value={value} rows="3" onChange={handleChange} />
  );
};

export default Textarea;
