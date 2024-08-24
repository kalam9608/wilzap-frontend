import React, { useState } from "react";

const CustomSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="my-4 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-3xl mx-auto mt-16">
        <div className="border-[#74512D]  w-full items-center justify-start rounded-[50px] border-2 px-2 py-1">
          <div className="bg-[#74512D] flex h-[30px] w-[30px] items-center justify-center rounded-full text-[12px] font-medium leading-[18.23px] text-[#fff]">
            1/6
          </div>
        </div>
      </div>

      {/* <div className=" flex justify-center items-center mt-10 border ">
        <div className="relative w-2/3">     
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
            className="w-full h-4 bg-gradient-to-r from-gray-200 via-amber-500 to-amber-700 rounded-full appearance-none cursor-pointer"
          />
          <div
            className="absolute top-0 left-0 flex items-center justify-center w-8 h-8 text-xs text-white bg-amber-700 rounded-full transform -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${value}%` }}
          >
            {value}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CustomSlider;
