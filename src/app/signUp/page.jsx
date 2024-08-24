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

const SignUp = () => {
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
      router.push("/mobileSignUp");
    } catch (error) {
      console.error(error);
    }
  };

  const isFormEmpty = !watch("email") || !watch("password");

  return (
    <AuthLayout title="SIGN UP">
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

          <Input
            label="Password"
            className={isFormEmpty ? "border-gray-300" : "border-borderColor"}
            placeholder=""
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
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
                onClick={() => {
                  router.push("/mobileSignUp");
                }}
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

              <p className=" mt-2 text-xs lg:text-sm">
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
      </form>
    </AuthLayout>
  );
};

export default SignUp;
