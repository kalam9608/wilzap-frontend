"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthLayout from "../components/AuthLayout";
import Image from "next/image";
import Button from "../components/Button";
import facebookLogo from "../../../public/facebook.svg";
import googlekLogo from "../../../public/Google.svg";
import Input from "../components/Input";
import { useRouter } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";
import { images } from "../../assets";
import { PiLineVertical } from "react-icons/pi";

const MobileSignUP = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      console.log("data", data);
      router.push("/otpScreen");
    } catch (error) {
      console.error(error);
    }
  };

  const isFormEmpty = !watch("mobile");

  return (
    <AuthLayout title="SIGN UP">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-up">
          {/* <div className="my-2">
                        <Input
                            label="Mobile Number"
                            placeholder="Enter your phone number"
                            type="tel"
                            {...register("mobile", {
                                required: "Please enter your mobile number",
                                validate: {
                                    matchPattern: (value) =>
                                        /^\d{10}$/.test(value) ||
                                        "Mobile number must be a valid 10-digit",
                                },
                            })}
                        />
                        {errors.mobile && <span className="text-red-500 text-xs">{errors.mobile.message}</span>}
                    </div> */}

          <div
            className={`flex items-center border ${
              isFormEmpty ? "border-gray-300" : "border-borderColor"
            }  px-3 rounded-md bg-white`}
          >
            <div className="flex items-center">
              <span className="mr-2">
                <Image
                  src={images.indianFlag}
                  alt="India Flag"
                  className="w-8 h-6"
                />
              </span>
              <select
                {...register("countryCode", { required: true })}
                className="focus:outline-none bg-transparent text-sm appearance-none text-gray-700"
              >
                <option value="+91">+91</option>
              </select>
              <FaCaretDown className="text-gray-900 ml-1" size={16} />
              <PiLineVertical color="gray" size={32} />
            </div>
            <input
              {...register("mobile", {
                required: "Please enter your mobile number",
                validate: {
                  matchPattern: (value) =>
                    /^\d{10}$/.test(value) ||
                    "Mobile number must be a valid 10-digit",
                },
              })}
              type="tel"
              className="ml-3 w-full focus:outline-none py-2 rounded-md text-gray-900"
            />
          </div>
          {errors.mobile && (
            <span className="text-red-500 text-xs">
              {errors.mobile.message}
            </span>
          )}
          <Button
            type="submit"
            disabled={isFormEmpty || !isValid}
            className={
              isFormEmpty || !isValid ? "cursor-not-allowed opacity-65" : ""
            }
          >
            Verify Mobile Number
          </Button>
          <div>
            <div className="mt-[5px] sm:mt-[8px] md:mt-[10px] lg:mt-[15px]">
              <p className="text-sm lg:text-base text-gray-700 text-center">
                Or,
              </p>
              <p className="text-sm lg:text-base font-bold text-gray-700 text-center">
                Sign in <span className="font-normal">with</span>{" "}
              </p>
              <div className="flex justify-center items-center mt-1">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] white:invert"
                  src={facebookLogo}
                  alt="Facebook Logo"
                  width={50}
                  height={25}
                  priority
                />
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] white:invert"
                  src={googlekLogo}
                  alt="Google Logo"
                  width={50}
                  height={25}
                  priority
                />
              </div>
              <p className="text-center text-gray-700 text-sm lg:text-base">
                Already an existing user?{" "}
                <span
                  className="authLink cursor-pointer underline font-bold text-blue-500"
                  onClick={() => {}}
                >
                  Sign In
                </span>{" "}
                here
              </p>

              <div className="mx-auto mt-2 max-w-[220px] md:max-w-[240px] lg:max-w-[240px] xl:max-w-[310px] text-center">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    className="h-[12px] sm:h-[14px] md:h-[16px] w-[12px] sm:w-[14px] md:w-[16px]"
                  />
                  <p className="text-xs lg:text-sm text-gray-700 ml-2">
                    By Signing in, you agree to our{" "}
                  </p>
                </div>

                <p className="text-xs lg:text-sm mt-2">
                  <span
                    className="text-xs lg:text-sm text-blue-500 underline cursor-pointer"
                    onClick={() => {}}
                  >
                    Terms & Conditions
                  </span>{" "}
                  &{" "}
                  <span
                    className="text-xs lg:text-sm text-blue-500 underline cursor-pointer"
                    onClick={() => {}}
                  >
                    Privacy Policy
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default MobileSignUP;
