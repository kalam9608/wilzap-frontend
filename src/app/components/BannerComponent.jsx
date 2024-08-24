"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banerStyle.css";
import bannerImage from "../../../public/authBgImage.svg";
import Image from "next/image";

const images = [bannerImage, bannerImage, bannerImage];

const BannerComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <>
        <div></div>
      </>
    ),
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="bg-red-400 object-cover">
            <Image
              src={src}
              alt={`Slide ${index}`}
              className="h-[400px] w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerComponent;
