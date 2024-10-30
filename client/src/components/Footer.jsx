import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import mongo from "../assets/mongo.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import vite from "../assets/vite.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="gap-8 bg-slate-950 flex flex-col lg:px-32 py-16 mt-32 w-full text-white ">
      <div className="flex justify-center items-center text-center">
        <p className="italic text-sm font-quicksand">"JavaLogic"</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10 lg:gap-0 items-center lg:px-60">
        <div className="gap-7 flex items-center">
          <a
            href="https://www.instagram.com/pizzahouse_lhokseumawe/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="lg:h-10 h-5" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faFacebook} className="lg:h-8 h-5" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faXTwitter} className="lg:h-9 h-5" />
          </a>
        </div>
        <div className="h-40 w-[1px] bg-white lg:inline hidden"></div>
        <div>
          <img src={logo} alt="logo" className="h-20 lg:h-40"></img>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 mt-10">
        <h2 className="font-quicksand">Powered By</h2>
        <div className="flex gap-5 lg:gap-10 items-center">
          <img src={tailwind} alt="Tailwind" className="h-5 lg:h-7" />
          <img src={react} alt="React" className="h-6 lg:h-9" />
          <img src={vite} alt="Vite" className="h-6 lg:h-10" />
          <img src={mongo} alt="Mongo" className="h-7 lg:h-10" />
          <img src={node} alt="Node" className="h-6 lg:h-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
