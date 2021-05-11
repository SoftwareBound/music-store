import React from "react";

const Input = ({ value, change_func }) => {
  return (
    <input type="text" value={value} defaultValue="" onChange={change_func} />
  );
};

export default Input;
