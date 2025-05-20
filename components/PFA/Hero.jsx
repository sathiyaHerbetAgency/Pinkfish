/* eslint-disable */

import React from "react";
import "../../styles/live.css";
import "../../styles/contact.css";

const Hero = () => {
  const PFA = {
    first_heading: "",
    second_heading: "Boris Brejcha",
    second_heading_year: "2024",
    span_text: "Pinkfish Music & Arts Festival ",
    text: "pinkfish arena presents",
    text1: "pinkfish arena presents",
    text2: "public holiday eve",
    text_mob1: "Wednesday  •  30 apr 2025",
    text_mob2: "Mega Star Arena, Kuala Lumpur",
    pinkbg_text: "Public Holiday EVE",
    button_text: "BUY TICKETS",
    link: "#Tickets",
  };
  return (
    <div className={` flex flex-col justify-end md:justify-center pb-12 md:pb-0 md:pl-36 min-h-[80vh] md:min-h-[92vh]  bg-arena }`}>
      <div className="flex flex-col justify-center gap-2 md:gap-4 self-start ">
        <div className=" flex flex-col justify-center self-center  md:gap-4">
          <div className="flex flex-col gap-2">
            <img
              src="./PFA/pf_arena_logo.png"
              className="w-24 md:w-48 self-center"
              alt="pf_arena_logo"
            />
            <p className="text-[11px] md:text-[16px] font-[Integral] md:pb-2 font-[700] text-[#fff] text-center uppercase ">
              {PFA.text1}
            </p>
            <div className="flex justify-center">
              <div className="flex flex-col justify-center align-center">
                {/* <p className="text-[14px] md:text-[24px] font-[Integral] md:pb-2 font-[700] text-[#fff] text-start ">{PFA.first_heading}</p> */}

                <svg
                  width="60"
                  height="18"
                  className="text-center self-center w-[60%] md:w-full"
                  viewBox="0 0 60 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="9.07715"
                    width="12.3335"
                    height="12.3335"
                    transform="rotate(45 9.07715 0)"
                    fill="#FF0086"
                  />
                  <rect
                    x="30"
                    width="12.3335"
                    height="12.3335"
                    transform="rotate(45 30 0)"
                    fill="#FF0086"
                  />
                  <rect
                    x="50.9219"
                    width="12.3335"
                    height="12.3335"
                    transform="rotate(45 50.9219 0)"
                    fill="#FF0086"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* <h2 className="text-[36px] md:text-[70px] font-[Integral] md:leading-[85px]  self-center leading-[38px] font-bold tracking-[1px] text-center text-[#fff] uppercase">{PFA.second_heading}</h2> */}
          <div className="flex flex-col gap-0">
            <img
              src="./PFA/Nifra/Hero/hero-title.png"
              className="w-[60%] md:w-full self-center"
              alt="pf_arena_logo"
            />
            <img
              src="./PFA/Nifra/Hero/hero-subtitle.png"
              className=" self-center"
              alt="pf_arena_logo"
            />
          </div>
        </div>
        <div className="min-w-[100%] flex md:flex-row flex-col justify-center md:py-3">
          {/* <div className="flex flex-col items-center align-center">                    
                    <p className="text-[12px] md:text-[18px] font-[Integral] px-1 pb-1 font-[400] text-[#000] text-start  bg-[#FF0086] uppercase ">{PFA.text2}</p>
                    <p className="text-[16px] md:text-[24px] font-[Integral] pb-2 font-[700] text-[#fff] text-start uppercase ">{PFA.text}</p>
                    <p className="text-[12px] md:text-[16px] font-[Integral] pb-2 font-[300] text-[#fff] text-start uppercase ">{PFA.text1}</p>
                </div> */}
          {/* <p className="text-[14px] md:text-[24px] leading-[16px] font-[Integral] pb-2  font-[700] text-[#fff] text-center uppercase md:hidden">{PFA.text_mob1}</p> */}
          {/* <p className="text-[14px] md:text-[24px] leading-[16px] font-[Integral] pb-2 font-[700] text-[#fff] text-center uppercase md:hidden">{PFA.text_mob2}</p> */}
        </div>
        {/* <img src="./PFA/Banner/banner.png" alt="banner" className="hidden md:block py-3" />
            <img src="./PFA/Banner/banner_mob.jpg" alt="banner" className=" md:hidden py-3" /> */}
        <div className="  md:text-center flex justify-center w-[80%] md:w-[100%]  self-center md:gap-6">
          <button
            type="button"
            className="uppercase font-[manrope] text-white text-[13px] md:text-[18px] p-2 md:px-4 md:py-4 font-[800] rounded bg-[#FF0086]"
          >
            {" "}
            <a  href="#Tickets"> {PFA.button_text} </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
