import React from "react";
import "./Expert.css";
const ExpertSection = () => {
  return (
    <section className="container flex justify-between flex-col bg-[#F3F3F3] lg:flex-row items-center">
      <div className="background-container lg:w-1/1.9  flex ">
        <div className="content">
          <h3 className="text-darkGray font-medium text-3xl">
            Trust Your <span className="text-borderColor">Will </span> Experts{" "}
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
      </div>

      {/* Right Section - Card/Slider */}
      <div
        className="lg:w-1/2 bg-white  flex justify-center lg:justify-end "
        style={{
          padding: "8%",
          borderTopLeftRadius: 250,
          borderBottomLeftRadius: 250,
        }}
      >
        <div
          className="relative  p-8 rounded-xl shadow-lg"
          style={{
            border: "1px solid #27454A",
            borderRadius: "30px",
            width: "380px",
            textAlign: "center",
          }}
        >
          {/* Profile Image */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "50%",
              border: "5px solid #f8f8f8",
              boxShadow:
                "0px 13px 27px -5px rgba(50, 50, 93, 0.25), 0px 8px 16px -8px rgba(0, 0, 0, 0.3)",
            }}
          ></div>

          {/* Card Content */}
          <h3 className="mt-16 text-2xl font-bold text-gray-800">
            Lorem Ipsum
          </h3>
          <p className="text-sm text-gray-500 mb-4">Lorem Ipsum</p>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s.
          </p>

          {/* Slider Arrows */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button
              className="bg-[#AF8F6F] text-white p-2 rounded-full shadow"
              style={{ backgroundColor: "#AF8F6F" }}
            >
              <span className="text-xl">&#9664;</span>
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button
              className="bg-[#AF8F6F] text-white p-2 rounded-full shadow"
              style={{ backgroundColor: "#AF8F6F" }}
            >
              <span className="text-xl">&#9654;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;
