import Image from "next/image";
import React from "react";

const IconComponent = ({ url, alt, width, height }) => {
  return (
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] white:invert"
      src={url}
      alt={alt}
      width={width}
      height={height}
      priority
    />
  );
};

export default IconComponent;
