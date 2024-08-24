"use client";
import React from "react";
import Header from "../components/header/page";
import CustomSlider from "../components/CustomSlider";
import Card from "../components/Card";
import { images } from "../../assets";
import BannerComponent from "../components/BannerComponent";
import Footer from "../components/footer/page";

const Dashboard = () => {
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

      <div className="bg-dashboardBg">
        <div className="container max-w-xl md:max-w-2xl lg:max-w-4xl p-4 mx-auto mt-8">
          <h4
            className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-darkGray mb-1 sm:mb-2 md:mb-2 text-center`}
          >
            Dashboard
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
              image={images.mywill}
              title={"Asset"}
              className="bg-white rounded-bl-[50px] rounded-br-[25px] border border-[rgba(175, 143, 111, 0.25)]"
            />
            <Card
              image={images.financeRecord}
              title={"Asset"}
              className="bg-white rounded-b-[25px] border border-[rgba(175, 143, 111, 0.25)]"
            />

            <Card
              image={images.help}
              title={"Asset"}
              className="bg-white rounded-bl-[25px] rounded-br-[50px] border border-[rgba(175, 143, 111, 0.25)]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
