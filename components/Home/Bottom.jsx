/* eslint-disable */
import React from "react";
import "../../styles/home.css";

const Bottom = () => {
  return (
    <div className="flex flex-col bg-gallery-home md:py-12 md:pt-16  py-12 pt-14">
      <div className="bg-black flex flex-col gap-6 self-center md:max-w-[1100px] max-w-[90%] pt-12 md:py-6 rounded-2xl">
        <div className="w-[80%] md:w-[90%] flex flex-col  md:flex-row md:gap-6 self-center">
          <div className="w-[202px] md:w-auto md:basis-1/2 self-center  ">
            <div className="flex flex-col gap-6 ">
              <div className="  ">
                <h1 className="text-[20.91px]  leading-[27.42px] md:text-[40px] text-left md:leading-[53px]  font-[700] font-[Archivo] uppercase  text-[#fff]  uppercase m">
                  Ride on the rhythm of life
                </h1>
              </div>
              <div className=" items-center self-center gap-6 text-left md:gap-11">
                <p className="text-white text-[6.97px]  md:text-[16px] leading-[8.97px] md:leading-[20px] font-[manrope] mb-3 md:mb-5">
                  Live your life loud and vibrant at Pinkfish!
                </p>
                <p className="text-white text-[6.97px]  md:text-[16px] leading-[8.97px] md:leading-[20px] font-[manrope] mb-3 md:mb-5">
                  Get ready to ignite your spirit, join a tight-knit community,
                  and embrace self-expression in an explosion of music, arts,
                  and dance; all blending into one melting pot of creativity.
                </p>
              </div>
            </div>
          </div>
          <div className=" md:basis-1/2 flex flex-col md:mt-0  ">
            <div className="w-[390.06px] flex flex-col self-center md:self-end">
              <h5 className="home_bottom_header_seen text-center md:mt-11 md:pt-6  self-center">
                a curated adventure by
              </h5>
              <div className="flex  md:flex-row justify-center items-center gap-6 self-center mb-11 mt-3 w-1/2">
                <img
                  className="w-[88px] md:w-[172px] h-[32px] md:h-[64.39px]"
                  alt="Logo Hitmansolutions"
                  src="/home_bottom_logo_1.svg"
                />
                <img
                  className="w-[81px] md:w-[159px] h-[14.87px] md:h-[29.11px]"
                  alt="Logo Happymoon"
                  src="/home_bottom_logo_2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
