import React from "react";
import logo from "../assets/logo.png"

const OutletCard = ({ city, address }) => {
  return (
    <div className="flex items-center gap-2 lg:gap-5 border-2 rounded-xl p-2 lg:p-5 w-60 lg:w-96 lg:max-w-96">
      <div>
        <img src={logo} alt="logo" className="lg:h-20 h-10  flex-shrink-0 " />
      </div>
      <div className="flex flex-col flex-grow">
        <h2 className="font-semibold font-poppins text-base lg:text-lg">{city}</h2>
        <p className="font-quicksand text-xs lg:text-base">{address}</p>
      </div>
    </div>
  );
};

export default OutletCard;
