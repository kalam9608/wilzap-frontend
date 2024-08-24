"use client";
import React, { useState } from "react";
import Header from "../components/header/page";
import Card from "../components/Card";
import { images } from "../../assets";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import BannerComponent from "../components/BannerComponent";
import CustomSlider from "../components/CustomSlider";
import ErrorText from "../components/ErrorText";

const PersonalDetails = () => {
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
    } catch (error) {
      console.error(error);
    }
  };

  const isFormEmpty = !watch("email") || !watch("password");
  return (
    <>
      <Header />
      <BannerComponent />
      <CustomSlider />
      <div className="container max-w-xl md:max-w-2xl lg:max-w-4xl p-4 mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            image={images.profile}
            title={"Personal Details"}
            className="bg-[#E27396] rounded-2xl border border-[#27454A]"
            textColor="text-white"
          />
          <Card
            image={images.baneficiary}
            title={"Beneficiaries"}
            className="bg-[#F9F9F9] rounded-2xl border border-[#27454A]"
          />
          <Card
            image={images.asset}
            title={"Asset"}
            className="bg-[#F9F9F9] rounded-2xl border border-[#27454A]"
          />
          <Card
            image={images.profile}
            title={"Personal Details"}
            className="bg-[#F9F9F9] rounded-2xl border border-[#27454A]"
          />
          <Card
            image={images.baneficiary}
            title={"Beneficiaries"}
            className="bg-[#F9F9F9] rounded-2xl border border-[#27454A]"
          />
          <Card
            image={images.asset}
            title={"Asset"}
            className="bg-[#F9F9F9] rounded-2xl border border-[#27454A]"
          />
        </div>
      </div>

      <div className="mx-auto mt-8">
        <div className="relative min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center h-[54vh]  object-cover"
            style={{ backgroundImage: `url('/authBgImage.svg')` }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>

          <div className="relative top-16 left-0 z-10 flex items-center justify-center h-full">
            <h4
              className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white text-center`}
            >
              Personal Details
            </h4>
          </div>

          {/* Form Section */}
          <div className="relative flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-full mx-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      label="First Name:"
                      className={
                        isFormEmpty ? "border-gray-300" : "border-borderColor"
                      }
                      placeholder=""
                      type="text"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    {errors.firstName && (
                      <ErrorText message={errors.firstName.message} />
                    )}
                  </div>

                  <div>
                    <Input
                      label="Last Name:"
                      className={
                        isFormEmpty ? "border-gray-300" : "border-borderColor"
                      }
                      placeholder=""
                      type="text"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    {errors.lastName && (
                      <ErrorText message={errors.lastName.message} />
                    )}
                  </div>

                  <div>
                    <Input
                      label="Phone Number:"
                      className={
                        isFormEmpty ? "border-gray-300" : "border-borderColor"
                      }
                      placeholder=""
                      type="text"
                      {...register("phone", {
                        required: "Phone Number is required",
                      })}
                    />
                    {errors.phone && (
                      <ErrorText message={errors.phone.message} />
                    )}
                  </div>

                  <div>
                    <Input
                      label="Date of Birth:"
                      className={
                        isFormEmpty ? "border-gray-300" : "border-borderColor"
                      }
                      placeholder=""
                      type="text"
                      {...register("Date", {
                        required: "Date of birth is required",
                      })}
                    />
                    {errors.Date && <ErrorText message={errors.Date.message} />}
                  </div>

                  <div>
                    <Input
                      label="Aadhar Number:"
                      className={
                        isFormEmpty ? "border-gray-300" : "border-borderColor"
                      }
                      placeholder=""
                      type="tel"
                      {...register("adhar", {
                        required: "Aadhar Number is required",
                      })}
                    />
                    {errors.adhar && (
                      <ErrorText message={errors.adhar.message} />
                    )}
                  </div>

                  <div>
                    <Input
                      label="Address:"
                      className={
                        isFormEmpty ? "border-gray-300" : "border-borderColor"
                      }
                      placeholder=""
                      type="text"
                      {...register("address", {
                        required: "Address is required",
                      })}
                    />
                    {errors.address && (
                      <ErrorText message={errors.address.message} />
                    )}
                  </div>

                  <div>
                    <Input
                      label="Pan Card:"
                      className={
                        isFormEmpty ? "border-gray-300" : "border-borderColor"
                      }
                      placeholder=""
                      type="text"
                      {...register("pan", {
                        required: "Pan Number is required",
                      })}
                    />
                    {errors.pan && <ErrorText message={errors.pan.message} />}
                  </div>

                  <div>
                    <Input
                      label="Aadhar Card:"
                      className={
                        isFormEmpty ? "border-gray-300" : "border-borderColor"
                      }
                      placeholder=""
                      type="text"
                      {...register("adhar", {
                        required: "Aadhar is required",
                      })}
                    />
                    {errors.adhar && (
                      <ErrorText message={errors.adhar.message} />
                    )}
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center px-3 py-1 border border-borderColor text-sm font-medium rounded-br-[10px] rounded-tl-[10px] shadow-sm text-white bg-transprant hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
                  >
                    <Image
                      src={images.arrow}
                      alt="India Flag"
                      className="w-6 h-6 "
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
