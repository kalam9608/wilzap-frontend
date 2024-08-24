import Link from "next/link";
import { images } from "../../../../assets/index";
import Image from "next/image";
import RadiusButton1 from '../../RadiusButton1'
const HeroSection = () => {
  return (
    <section
      className="bg-[#fdf6e3] py-16 px-6"
      style={{ height: "90vh", position: "relative" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Empower Your Legacy: <br />
            <span className="text-[#AF8F6F]">Create Your Will</span> in Minutes!
          </h1>
          <p className="text-gray-600 mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <RadiusButton1 text={"Get Started"} path={"#"} />
            <Link href="#">
              <button
                style={{
                  border: "2px solid #a78b7b",
                  borderRadius: "85% 15% 81% 19% / 0% 100% 0% 100% ",
                }}
                className="text-[#a78b7b] px-6 py-3"
              >
                Contact a Lawyer
              </button>
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className=" flex justify-center lg:justify-end">
          <div
            style={{
              //   overflow: 'hidden',
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              position: "absolute",
              top: "10%",
              right: "0",
            }}
            className="h-100 bg-cover bg-center"
          >
            <Image
              src={images.HeroSection2} // Replace with your image path
              alt="write"
              style={{
                position: "absolute",
                zIndex: 999,
                top: "20%",
                right: "50%",
              }}
              className="w-15 h-15"
            />
            <Image
              src={images.heroSection1} // Replace with your image path
              alt="Signing"
              style={{ right: "-6.5%" }}
              className="w-50 h-50 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
