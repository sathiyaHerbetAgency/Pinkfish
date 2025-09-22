/* eslint-disable */

import React from "react";
import "../../styles/live.css";

const Banner = ({ select }) => {
  const PFF = {
    first_heading: "what’s next in store?",
    text: "Scope out the other events we have lining up for you this year. Get hyped!",
    button_text: "Check out Pinkfish Countdown",
    link: "/pfc-countdown-nye-2024",
    bg: "banner-container-pff",
    text_color: "text-black",
  };
  const PFC = {
    first_heading: "YOUR FOMO IS ABOUT TO GET REAL",
    text: "Get first access to lineup reveals and festival updates.",
    button_text: "Be Part of PFC2024",
    link: "/countdown2024",
    bg: "banner-container-pfc",
    text_color: "text-black",
  };
  const PFA = {
    first_heading: "what’s next in store?",
    text: "Scope out the other events we have lining up for you this year. Get hyped!",
    button_text: "Check out Pinkfish Countdown",
    link: "/pfc-countdown-nye-2024",
    bg: "banner-container-pfa",
    text_color: "text-white",
  };
  const PFL = {
    first_heading: "what’s next in store?",
    text: "Scope out the other events we have lining up for you this year. Get hyped!",
    button_text: "Check out Pinkfish Countdown",
    link: "/pfc-countdown-nye-2024",
    bg: "banner-container-pfl",
    text_color: "text-white",
    btn_color: "bg-black",
  };
  function checkContents() {
    if (select === "PFF") {
      return PFF;
    } else if (select === "PFC") {
      return PFC;
    } else if (select === "PFA") {
      return PFA;
    } else if (select === "PFL") {
      return PFL;
    }
  }

  return (
    <div
      className={`${
        checkContents().bg
      }  flex flex-col justify-center gap-6 items-center `}
    >
      <div className="md:w-[30vw] w-[85vw] flex flex-col gap-6 pt-11">
        <h2
          className={` ${
            select === "PFC" ? "text-[#000]" : "text-[#fff]"
          } font-bold  font-[Archivo] text-[34px] leading-[40px] text-center uppercase`}
        >
          {checkContents().first_heading}
        </h2>
        <p
          className={` ${
            checkContents().text_color
          }  font-[manrope] text-[18px] leading-[22px]   text-center`}
        >
          {checkContents().text}
        </p>
        {select === "PFF" ? (
          <a
            href={checkContents().link}
            arial-label="Countdown Page"
            className="self-center"
          >
            {" "}
            <button
              type="button"
              className={`${
                select === "PFL" ? "bg-[#000]" : "bg-[#FF0086]"
              } uppercase text-white p-3 px-4 self-center rounded-md font-[manrope] text-[16px] md:text-[18px] w-fit `}
            >
              {checkContents().button_text}
            </button>
          </a>
        ) : (
          <a
            href={checkContents().link}
            arial-label="Form"
            className="self-center"
          >
            {" "}
            <button
              type="button"
              className={`${
                select === "PFL" ? "bg-[#000]" : "bg-[#FF0086]"
              } uppercase text-white p-3 px-4 self-center  rounded-md font-[manrope] text-[16px] md:text-[18px] w-fit `}
            >
              {" "}
              {checkContents().button_text}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Banner;
