import React from "react";
import logo from "../assets/logo.png";
import halal from "../assets/halal.png";

const About = () => {
  return (
    <div className="lg:px-32 pt-32 mb-96 gap-20 flex flex-col min-h-[100vh]">
      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex gap-3 items-center justify-center">
          <img src={logo} alt="logo" className="h-28" />
          <img src={halal} alt="halal" className="h-36" />
        </div>
        <h1 className="font-bold font-playwrite text-center translate-x-2">
          Pizza House{" "}
          <span className="font-quicksand text-center font-normal tracking-[1rem]">
            ABOUT
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl w-80 lg:w-fit text-center font-poppins">
          We are from <span className="text-yellow-600">JavaLogic Group</span>
        </h1>
        <p className="flex gap-1 mt-3 lg:mt-0">
          Presents <img src={logo} className="h-7" />{" "}
          <span className="font-playwrite">Pizza House</span>Website
        </p>
        <span className="tracking-[1rem] lg:tracking-[2rem] font-quicksand mt-20 text-xl">
          LINE - UP
        </span>
        <div className="flex gap-3 lg:gap-10 mt-10">
          <div className="border border-gray-800 py-2 px-4 rounded-xl text-center w-24 lg:w-32 shadow-lg">
            Alvian
          </div>
          <div className="border border-gray-800 py-2 px-4 rounded-xl text-center w-24 lg:w-32 shadow-lg">
            Fatir
          </div>
          <div className="border border-gray-800 py-2 px-4 rounded-xl text-center w-24 lg:w-32 shadow-lg">
            Jona
          </div>
        </div>
        <div className="flex gap-3 lg:gap-10 mt-5">
          <div className="border border-gray-800 py-2 px-4 rounded-xl text-center w-24 lg:w-32 shadow-lg">
            Kristian
          </div>
          <div className="border border-gray-800 py-2 px-4 rounded-xl text-center w-24 lg:w-32 shadow-lg">
            Samuel
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
