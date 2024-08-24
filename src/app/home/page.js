import React from "react";
import Work from "../components/home/work/page";
import Header from "../components/header/page";
import HeroSection from "../components/home/heroSection/page";
import FAQ from "../components/home/faq";
import ExpertSection from "../components/home/Expert";
import Video from "../components/home/Video";
import Footer from "../components/footer/page";
// import { useRouter } from 'next/navigation'

const Home = () => {
  // const router = useRouter()
  return (
    <>
      <Header />
      {/* <HeroSection />
      <Work />
      <FAQ />
      <ExpertSection /> */}
      <Video />
      <Footer />
    </>
  );
};
export default Home;
