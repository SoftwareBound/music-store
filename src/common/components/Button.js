import React from "react";

const Button = ({ btn_name, btn_type, btn_func }) => {
  return (
    <div>
      <button className={`btn btn-${btn_type}`} onClick={() => btn_func()}>
        {btn_name}
      </button>
    </div>
  );
};

export default Button;
