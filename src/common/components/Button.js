import React from "react";

const Button = ({ btn_name, btn_type, btn_func, isDisabled }) => {
  return (
    <div>
      <button
        className={`btn btn-${btn_type}`}
        onClick={() => btn_func()}
        disabled={isDisabled}
      >
        {btn_name}
      </button>
    </div>
  );
};

export default Button;
