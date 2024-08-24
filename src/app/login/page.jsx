"use client";
import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import facebookLogo from "../../../public/facebook.svg";
import googlekLogo from "../../../public/Google.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoEyeOffSharp } from "react-icons/io5";

const Login = () => {
  const router = useRouter();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
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
      router.push('/signUp');
    } catch (error) {
      console.error(error);
    }
  };

  const isFormEmpty = !watch("email") || !watch("password");

  return (
    <AuthLayout title="SIGN IN">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-up">
          <div className="my-2">
            <Input
              label="Email"
              className={isFormEmpty ? "border-gray-300" : "border-borderColor"}
              placeholder=""
              type="email"
              {...register("email", {
                required: "Email is required",
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="relative">
            <Input
              label="Password"
              className={isFormEmpty ? "border-gray-300" : "border-borderColor"}
              placeholder=""
              type={isPasswordShow ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {isFormEmpty ? null : (
              <IoEyeOffSharp
                className="absolute top-10 right-4 cursor-pointer"
                size={14}
                color="gray"
                onClick={() => setIsPasswordShow((prevState) => !prevState)}
              />
            )}
          </div>

          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}

          <Button
            type="submit"
            disabled={isFormEmpty || !isValid}
            className={
              isFormEmpty || !isValid ? "cursor-not-allowed opacity-65" : ""
            }
          >
            Sign Up
          </Button>
        </div>

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
                alt="faceBook Logo"
                width={50}
                height={25}
                priority
              />
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] white:invert"
                src={googlekLogo}
                alt="faceBook Logo"
                width={50}
                height={25}
                priority
              />
            </div>
            <p className="text-center text-gray-700 text-sm lg:text-base">
              New to Name?{" "}
              <span
                className="authLink cursor-pointer underline font-bold text-blue-500"
                onClick={() => {
                  router.push("/signUp");
                }}
              >
                Sign Up
              </span>{" "}
              here
            </p>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
