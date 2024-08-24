import Image from "next/image";
import { images } from "../../../../assets/index";
import RadiusButton1 from "../../RadiusButton1";

import CircularImageWithShadow from "../../circlesImage";
const Work = () => {
  return (
    <section
      className="bg-[#F3F3F3] py-16 px-6"
      style={{ height: "90vh", position: "relative" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around">
        <CircularImageWithShadow />
        <div className=" flex flex-col justify-center lg:justify-start">
          <h3 className="text-darkGray font-medium text-3xl">
            How do we <span className="text-borderColor">Work?</span>
          </h3>

          <div className="flex flex-col mt-4">
            <div className="flex flex-row gap-x-2 mt-2">
              {" "}
              <Image
                src={images.boy} // Replace with your image path
                alt="write"
                style={{}}
                className="w-5 h-5"
              />
              <p className="font-medium">Personal Details</p>
            </div>

            <div className="flex flex-row gap-x-2 mt-2">
              {" "}
              <Image
                src={images.family} // Replace with your image path
                alt="write"
                style={{}}
                className="w-5 h-5"
              />
              <p className="font-medium">Family Details</p>
            </div>

            <div className="flex flex-row gap-x-2 mt-2">
              {" "}
              <Image
                src={images.asset} // Replace with your image path
                alt="write"
                style={{}}
                className="w-5 h-5"
              />
              <p className="font-medium">Asset Details</p>
            </div>

            <div className="flex flex-row gap-x-2 mt-2">
              {" "}
              <Image
                src={images.insurence} // Replace with your image path
                alt="write"
                style={{}}
                className="w-5 h-5"
              />
              <p className="font-medium">Insurance Details</p>
            </div>

            <div className="flex flex-row gap-x-2 mt-2">
              {" "}
              <Image
                src={images.bank} // Replace with your image path
                alt="write"
                style={{}}
                className="w-5 h-5"
              />
              <p className="font-medium">Bank Details</p>
            </div>

            <div className="flex flex-row gap-x-2 mt-2">
              {" "}
              <Image
                src={images.investment} // Replace with your image path
                alt="write"
                style={{}}
                className="w-5 h-5"
              />
              <p className="font-medium">Investment Details</p>
            </div>
            <div className="mt-3">
              <RadiusButton1 text={"Get Started"} path={"#"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
