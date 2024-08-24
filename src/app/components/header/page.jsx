"use client";
import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  // const router = useRouter()
  return (
    <div className="flex items-center justify-between bg-[#F8F4E1] px-12 py-5">
      <div className=" text-black text-[20px] md:text-[40px] font-normal leading-[52.08px]">
        Logo
      </div>
      <div
        role="button"
        aria-label="menu"
        className="block ring-primary focus-visible:ring-1 md:hidden"
      >
        <IoMenu />
      </div>
      <nav className="hidden gap-[30px] md:flex">
        <Link
          className="headerLink  self-center text-base font-normal leading-[20.83px] text-[#27454A]"
          href="/"
        >
          Home
        </Link>
        <div className="flex items-center gap-[5.33px]">
          <Link
            className="headerLink  self-center text-base font-normal leading-[20.83px] text-primaryColor"
            href="/personalDetails"
          >
            Services
          </Link>
          <FaAngleDown className="text-primaryColor" />
        </div>
        <Link
          className="headerLink  self-center text-base font-normal leading-[20.83px] text-[#27454A]"
          href="/"
        >
          About Us
        </Link>
        <Link
          className="headerLink  self-center text-base font-normal leading-[20.83px] text-[#27454A]"
          href="/"
        >
          Contact Us
        </Link>
        <button className="rounded-br-[20px] rounded-tl-[20px] bg-primaryColor px-[30px] py-[10px] text-base font-medium leading-[20.83px] text-[#fff]">
          Login
        </button>
      </nav>
    </div>
  );
};

export default Header;
