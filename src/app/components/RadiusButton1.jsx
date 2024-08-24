import React from "react";
import Link from "next/link";
const RadiusButton1 = ({ text,path }) => {
  return (
    <Link href={path}>
              <button
                style={{
                  borderRadius: "100% 0% / 88% 91% 76% 67%",
                  paddingInline: 35,
                  paddingBlock: 15,
                }}
                className="bg-[#a78b7b] text-white px-6 py-3"
              >
                {text}
              </button>
            </Link>
  );
};
export default RadiusButton1;