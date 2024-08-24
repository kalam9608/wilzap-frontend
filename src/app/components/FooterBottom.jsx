import Link from "next/link";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="flex flex-col md:flex-row  justify-between bg-[#173439] px-6 py-6 md:px-[108px] md:py-[31px] text-[#fff]">
      <div>
        <div>© 2024 All rights reserved</div>
      </div>
      <div className="flex ">
        <Link href="#">Privacy Policy</Link>
        <div className="mx-[6px] h-3 md:h-[19px] w-[1px] self-center bg-[#FFFFFF]"></div>
        <Link href="#">Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default FooterBottom;
