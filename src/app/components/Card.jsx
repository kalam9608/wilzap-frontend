import Image from "next/image";
import React from "react";

const Card = ({
  image,
  title,
  className = "text-start",
  textColor = "text-darkGray",
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center  space-y-2 py-6  shadow-lg ${className}`}
    >
      <Image src={image} alt="India Flag" className="w-24 h-24" />
      <h4
        className={`text-base sm:text-lg md:text-lg lg:text-xl font-medium ${textColor} mb-1 sm:mb-2 md:mb-2 `}
      >
        {title}
      </h4>
    </div>
  );
};

export default Card;
