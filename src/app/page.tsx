"use client"
import Image from "next/image";
import Login from "./login/page";
import SignUp from "./signUp/page";
import OTPInputScreen from "./otpScreen/page";
import Dashboard from "./dashboard/page"
import PersonalDetails from "./personalDetails/page"


export default function Home() {
  return (
    <Login />
    // <Dashboard />
    // <PersonalDetails/>
  );
}
