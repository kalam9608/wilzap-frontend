import React from "react";

const Button = ({ children, type = "submit", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`w-full mt-4 text-white bg-primaryColor outline-none focus:outline-none shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
