import React from "react";

const FooterCardLayout = ({ children, className, title }) => {
  return (
    <div className={`rounded-[6px] bg-[#FBFFF4] p-[15px] ${className}`}>
      <h3 className="text-borderColor text-xl font-medium leading-[31.25px]">
        {title}
      </h3>
      {children}
    </div>
  );
};
export default FooterCardLayout;
