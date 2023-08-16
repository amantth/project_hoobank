import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 rounded-[10px] px-6 bg-blue-gradient font-poppins mt-5 font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get started
    </button>
  );
};

export default Button;