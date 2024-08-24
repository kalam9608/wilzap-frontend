"use client";
import React from "react";
import "./authLayout.css";

const AuthLayout = ({ children, title, className = "text-start" }) => {
  return (
    <div className="w-full mx-auto px-4  auth-container">
      <div className="max-h-[95vh] w-full max-w-xs lg:max-w-md px-6 py-8 bg-bgWhite rounded-3xl  mt-8 mb-8 shadow-lg">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-4">
          LOGO
        </h2>
        <div className="px-2 sm:px-4 md:px-6 lg:px-8">
          <h4
            className={`text-base sm:text-lg md:text-lg lg:text-xl font-bold text-darkGray mb-1 sm:mb-2 md:mb-2 ${className}`}
          >
            {title}
          </h4>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
