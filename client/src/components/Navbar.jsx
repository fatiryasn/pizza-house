import React, { useState } from "react";

import logo from "../assets/logo.png";
import { useLocation } from "react-router-dom";
import "../global.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();
  const checkPath = (path) => location.pathname === path;

  return (
    <>
      <div className="px-5 md:px-32 py-3 md:py-0 z-50 fixed flex justify-between items-center w-full shadow-md   border-b bg-white">
        <div className="gap-1 lg:gap-3 flex items-center">
          <img src={logo} alt="Logo Pizza" className="h-6 md:h-12" />
          <span className="font-playwrite font-bold text-xs md:text-base">
            Pizza House
          </span>
        </div>

        <div className="gap-10 hidden md:flex items-center font-semibold ">
          <div className="gap-10 flex items-center font-semibold border-r px-10 py-6 font-quicksand">
            <a
              href="/"
              className={`${
                checkPath("/")
                  ? "text-green-950 font-bold border-solid border-slate-900"
                  : "text-black  border-transparent"
              } border-b `}
            >
              Home
            </a>
            <a
              href="/menu"
              className={`${
                checkPath("/menu")
                  ? "text-green-950 font-bold border-solid border-slate-900"
                  : "text-black  border-transparent"
              } border-b `}
            >
              Menu
            </a>
            <a
              href="/about"
              className={`${
                checkPath("/about")
                  ? "text-green-950 font-bold border-solid border-slate-900"
                  : "text-black  border-transparent"
              } border-b `}
            >
              About Us
            </a>
          </div>
          <div>
            <button
              onClick={() => setVisible(true)}
              className="px-5 py-2 text-white bg-green-800 rounded-lg border hover:bg-green-900 text-center"
            >
              Order Now{" "}
              <FontAwesomeIcon icon={faWhatsapp} className="pl-2 h-5" />
            </button>
          </div>
        </div>

        <div className="flex md:hidden" onClick={() => setSidebar(!sidebar)}>
          {sidebar ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>
      {visible ? (
        <div className="fixed top-0 w-full h-full bg-shade flex justify-center items-center z-50">
          <div className="fixed border-black border-2 border-t-4 rounded-xl w-64 shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 px-10 pt-5 pb-10 bg-gradient-to-br from-green-200 to-white">
            <div className="flex flex-col">
              <FontAwesomeIcon
                icon={faXmark}
                className="h-5 self-end cursor-pointer"
                onClick={() => setVisible(false)}
              />
              <h1 className="font-bold text-2xl font-poppins">Maaf</h1>
              <p className="font-quicksand">Nomor WhatsApp belum tersedia</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {sidebar ? (
        <div className="fixed z-40 top-12 bottom-0 right-0 left-1/2 bg-green-950 flex flex-col">
          <div className="flex flex-col justify-between p-5 mt-16  h-full ">
            <div className="flex flex-col gap-10">
              <a
                href="/"
                className={`${
                  checkPath("/")
                    ? "text-green-200 font-bold border-solid border-slate-900 w-fit"
                    : "text-white  border-transparent"
                } border-b-2 `}
              >
                Home
              </a>
              <a
                href="/menu"
                className={`${
                  checkPath("/menu")
                    ? "text-green-200 font-bold border-solid border-slate-900 w-fit"
                    : "text-white  border-transparent"
                } border-b-2 `}
              >
                Menu
              </a>
              <a
                href="/about"
                className={`${
                  checkPath("/about")
                    ? "text-green-200 font-bold border-solid border-slate-900 w-fit"
                    : "text-white  border-transparent"
                } border-b-2 `}
              >
                About Us
              </a>
            </div>
            <div>
              <button
                onClick={() => setVisible(true)}
                className="px-5 py-2 self-end text-white bg-green-800 rounded-lg border hover:bg-green-900 text-center"
              >
                Order Now{" "}
                <FontAwesomeIcon icon={faWhatsapp} className="pl-2 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
