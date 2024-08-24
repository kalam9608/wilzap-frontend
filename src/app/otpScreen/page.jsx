"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const OTPInputScreen = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      otp: ["", "", "", "", "", ""],
    },
  });

  const onSubmit = (data) => {
    const otpValue = data.otp.join("");
    console.log("OTP Entered:", otpValue);
    router.push("/dashboard");

    //API call to verify OTP
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      setValue(`otp.${index}`, value);
      if (index < 5) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    } else if (value === "") {
      setValue(`otp.${index}`, "");
      if (index > 0) {
        const prevInput = document.getElementById(`otp-input-${index - 1}`);
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };

  const isFormEmpty = watch("otp").some((digit) => digit === "");

  return (
    <AuthLayout title="We’ve sent you an OTP" className="text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-center text-xs mb-4 text-gray-700">
          Please enter the 6 digit OTP sent to <br />
          +91 98xxxxxx10
        </p>
        <div className="flex justify-between mb-4">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Controller
                key={index}
                name={`otp.${index}`}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength={1}
                    className={`
                                w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10  
                                        border ${
                                          isFormEmpty
                                            ? "border-gray-400"
                                            : "border-borderColor"
                                        } 
                                        rounded-md text-center text-lg sm:text-xl md:text-2xl 
                                        focus:outline-none focus:ring-2 focus:ring-blue-500
                                      `}
                    onChange={(e) => handleChange(e, index)}
                    value={watch(`otp.${index}`)}
                  />
                )}
              />
            ))}
        </div>

        <p className="text-center text-gray-700 text-sm lg:text-base ">
          Didn’t receive OTP?{" "}
          <span
            className="authLink cursor-pointer underline font-bold text-blue-500"
            onClick={() => {}}
          >
            Resend
          </span>
        </p>

        <Button
          type="submit"
          disabled={isFormEmpty || !isValid}
          className={
            isFormEmpty || !isValid ? "cursor-not-allowed opacity-65" : ""
          }
        >
          Verify Mobile Number
        </Button>

        <p className="text-center text-gray-700 text-sm lg:text-base mt-4">
          Already an existing user?{" "}
          <span
            className="authLink cursor-pointer underline font-bold text-blue-500"
            onClick={() => {}}
          >
            Sign In
          </span>{" "}
          here
        </p>
      </form>
    </AuthLayout>
  );
};

export default OTPInputScreen;
