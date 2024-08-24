"use client";
import IconComponent from "../../components/IconComponent";
import { images } from "../../../assets";
import FooterCardLayout from "../FooterCardLayout";
import { IoIosArrowForward } from "react-icons/io";
import FooterBottom from "../FooterBottom";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-darkGray">
      <div className="container  mx-auto">
        <div className="p-8 md:p-24 lg:p-32  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <FooterCardLayout className="min-h-72 md:min-w-64 lg:min-w-72 md:ml-1 lg:ml-[-36px]">
            <div className="mt-2 text-2xl font-bold leading-[52.08px] black">
              Logo
            </div>
            <div className="mt-4 text-base font-normal leading-[21.79px] text-darkGray">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </div>
          </FooterCardLayout>

          <FooterCardLayout title=" Useful Links" className="min-h-72">
            {["Home", "Services", "About Us", "Contact Us"].map(
              (item, index) => (
                <div className="flex items-center gap-[7px] mt-3" key={index}>
                  <IoIosArrowForward size={22} color="#74512D" />
                  <Link
                    href="#"
                    className="text-darkGray text-base font-semibold leading-[21.79px]"
                  >
                    {item}
                  </Link>
                </div>
              )
            )}
          </FooterCardLayout>
          <FooterCardLayout title="Services" className="min-h-72">
            {[
              "Will Drafting",
              "Financial Recordkeeper",
              "Legal Assistance",
            ].map((item, index) => (
              <div className="flex items-center mt-3" key={index}>
                <IoIosArrowForward size={22} color="#74512D" />
                <Link
                  href="#"
                  className=" text-darkGray text-base font-semibold leading-[21.79px]"
                >
                  {item}
                </Link>
              </div>
            ))}
          </FooterCardLayout>
          <FooterCardLayout title="Contact Us" className="min-h-72">
            <div className="flex items-center mt-4">
              <IconComponent
                url={images.email}
                alt={"fb icon"}
                width={20}
                height={10}
              />
              <Link
                href="mailto:abc@gmail.com"
                className="text-gray-600 text-base font-normal ml-2"
              >
                abc@gmail.com
              </Link>
            </div>

            <div className="flex ml-[-20px] mt-1">
              <IconComponent
                url={images.facebook}
                alt={"fb icon"}
                width={70}
                height={45}
              />
              <div className="ml-[-24px]">
                <IconComponent
                  url={images.whtsp}
                  alt={"fb icon"}
                  width={70}
                  height={45}
                />
              </div>
              <div className="ml-[-24px]">
                <IconComponent
                  url={images.insta}
                  alt={"fb icon"}
                  width={70}
                  height={45}
                />
              </div>
            </div>
          </FooterCardLayout>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}
