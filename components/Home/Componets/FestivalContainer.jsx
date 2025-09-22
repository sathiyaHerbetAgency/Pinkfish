/* eslint-disable */
"use client";
import React, { useState } from "react";
import "../../../styles/live.css";

import Link from "next/link";

const textGallery1 =
  "text-[16px] md:text-[24px] leading-[20.19px] md:leading-[32.06px] font-[manrope] font-[800] text-white text-left w-[90%] ";
const overlayContainer =
  "  opacity-0 hover:opacity-100 absolute z-1 w-[90%] md:max-w-[370px] h-[355px] md:h-[394px] pl-4 pb-4 flex flex-col justify-end bg-gradinet-gray";

const text1 =
  "text-white text-[12px] leading-[16px] md:text-[16px] md:leading-[22.66px] font-[manrope] font-[400] text-left";
const button =
  "bg-[#FF0086] w-[100px] md:w-[150px] self-center text-white text-[8px] md:text-[12.31px] leading-[10px] md:leading-[24.63px] font-[manrope] font-[800] p-2 px-3 mt-3 mr-3 md:mr-0 rounded-md uppercase";
const FestivalContainer = ({ setShowPopup, data, index, active }) => {
  const [activeCard, setActiveCard] = useState(null);
  const overlayContainerMob =
    " hidden   w-[90vw] h-[394px] flex flex-col justify-between bg-gradinet-gray pb-5";
  const overlayContainerMobOpacity =
    "  absolute z-1 w-[60vw] min-h-[324px] flex flex-col justify-end pb-5 bg-gradinet-gray";
  function checkFunction(a) {
    setActiveCard(activeCard === a ? null : a);
    console.log(activeCard === index);
  }
  const handleClick = (e) => {
    if (data?.popup) {
      e.preventDefault(); // stop navigation
      setShowPopup(true);
    }
    // else: allow normal link navigation
  };
  return (
    <>
      <div className="hidden md:block">
        <div
          className={`${
            index === 0 && ""
          } w-[90%] md:max-w-[370px] h-[324px] gap-0 md:h-[394px]    self-center`}
        >
          <Link
            onClick={handleClick}
            href={data.link}
            className={overlayContainer}
          >
            {/* <div className="flex justify-end w-[90%]  md:w-[95%] ">
                {data.sale&&<button className={button} type="button"> Tickets on sale </button>}
            </div> */}
            <div className="flex flex-col  gap-3  md:gap-5">
              <h3 className={textGallery1}>{data.title}</h3>
              <div className="flex flex-col gap-2 md:gap-2">
                {data.date && (
                  <div className="flex items-center gap-2">
                    <img
                      src="./Home/Festival/Icons/date.png"
                      className="max-w-[15px] max-h-[15px]"
                      alt="date"
                    />
                    <p className={text1}>{data.date}</p>
                  </div>
                )}
                {data.location && (
                  <div className="flex items-center gap-2">
                    <img
                      src="./Home/Festival/Icons/location.png"
                      className="max-w-[15px] max-h-[15px]"
                      alt="date"
                    />
                    <p className={text1}>{data.location}</p>
                  </div>
                )}
                {data.sale && (
                  <button className={button} type="button">
                    {" "}
                    Buy Now{" "}
                  </button>
                )}
              </div>
            </div>
          </Link>
          <img src={data.imgUrl} alt="slider-1" />
        </div>
      </div>
      <div className="md:hidden flex flex-col self-cente max-w-[60vw] bg-white">
        <div className="max-w-[60vw] h-[300px]    self-center">
          {active === index && (
            <Link
              onClick={handleClick}
              href={data.link}
              className={overlayContainerMobOpacity}
            >
              {/* <div className="flex justify-end w-[100%] mr-3 md:w-[95%] ">
                        {data.sale&&<button className={button} type="button"> Tickets on sale  </button>}
                    </div> */}
              <div className="flex flex-col pb-3 gap-3 pl-3  mt-5">
                <h3 className={textGallery1}>{data.title}</h3>
                <div className="flex flex-col gap-1">
                  <div className="flex  items-center gap-2">
                    <img
                      src="./Home/Festival/Icons/date.png"
                      className="max-w-[10px] max-h-[10px]"
                      alt="date"
                    />
                    <p className={text1}>{data.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="./Home/Festival/Icons/location.png"
                      className="max-w-[10px] max-h-[10px]"
                      alt="date"
                    />
                    <p className={text1}>{data.location}</p>
                  </div>
                  {data.sale && (
                    <button className={button} type="button">
                      {" "}
                      Buy Now{" "}
                    </button>
                  )}
                </div>
              </div>
            </Link>
          )}
          <img
            src={data.imgUrl}
            className="min-w-[60vw] h-[300px] object-cover"
            alt="slider-1"
          />
        </div>
      </div>
    </>
  );
};

export default FestivalContainer;
