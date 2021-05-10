import React from "react";

const Button = ({ btn_name, btn_type }) => {
  return (
    <div>
      <button className={`btn btn-${btn_type}`}>{btn_name}</button>
    </div>
  );
};

export default Button;
