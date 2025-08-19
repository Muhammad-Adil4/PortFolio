import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import image1 from "../assets/logo1.jpg";
const About = () => {
  return (
    <div id="about" className="scroll-mt-28 my-30 px-5">
      {/* Heading */}
      <div className="text-center leading-8 text-xl">
        <h4 className="text-gray-500">Introduction</h4>
        <h1 className="text-5xl font-semibold">About me</h1>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center mt-10 items-start max-w-6xl mx-auto">
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="w-60 h-90 md:w-70 md:h-100 relative">
            <Image
              src={image1}
              alt="user"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2">
          <p className="mt-3 text-center md:text-left text-gray-700 transition-all max-w-3xl mx-auto">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field...
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-2xl">
            {infoList.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 p-5 rounded-xl flex flex-col items-center md:items-start gap-4 text-center md:text-left hover:bg-gray-100 hover:-translate-y-2 transform transition-all duration-400 md:hover:[box-shadow:4px_4px_0px_#000000] cursor-pointer"
              >
                <Image src={item.icon} alt={item.title} className="w-8" />
                <h1 className="text-xl text-gray-600 font-medium">{item.title}</h1>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Tools */}
          <h1 className="text-xl font-medium py-5 text-gray-500 text-center md:text-left">
            Tools I Use
          </h1>
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 max-w-lg mx-auto md:mx-0">
            {[assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git].map((tool, index) => (
              <div
                key={index}
                className="border border-gray-300 flex items-center justify-center py-5 px-3 rounded-xl hover:bg-gray-100 hover:translate-y-[-5px] transform transition-all duration-500 ease-in-out hover:border-gray-500"
              >
                <Image src={tool} alt={`tool-${index}`} className="w-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
