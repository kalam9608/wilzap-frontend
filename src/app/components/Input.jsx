import React, { useId, forwardRef, InputHTMLAttributes } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block mb-1 pl-1 font-medium text-xs lg:text-base  text-grayText"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <div
        className={`rounded-md bg-white text-gray-700 border w-full ${className}`}
      >
        <input
          type={type}
          ref={ref}
          {...props}
          id={id}
          className={`px-3 py-2 text-gray-700  text-xs lg:text-sm outline-none w-full bg-white border-transparent rounded-md`}
        />
      </div>
    </div>
  );
});

export default Input;
