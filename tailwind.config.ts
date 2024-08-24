import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        dashboardBg:
          "linear-gradient(to bottom, rgba(254, 248, 244, 0.5), rgba(175, 143, 111, 0.5))",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        bgWhite: "#F4F4F4",
        primaryColor: "#AF8F6F",
        borderColor: "#74512D",
        grayText: "#666666",
        darkGray: "#27454A",
      
        whiteGrey:'#FBFFF4'
      },
    },
  },
  plugins: [],
};
export default config;
