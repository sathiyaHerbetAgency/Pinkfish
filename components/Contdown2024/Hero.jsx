/* eslint-disable */
import React from "react";
import BuyButton from "./BuyButton";

const Hero = () => {
  return (
    <div className="bg-countdown-new ">
      <div
        className={` flex flex-col md:justify-center gap-11 justify-around min-h-[80vh] md:h-[85vh]`}
      >
        <div className=" mt-48   md:mt-0 flex flex-col gap-3">
          <div className="self-center">
            <img
              src="./Home/pf_main_logo.png"
              className="hidden md:block w-[90%] "
              alt="Pinkfish Main Logo"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-[18px] md:text-[32px] leading-[18px] md:leading-[32px] font-[marope] text-center drop-shadow-2xl self-center w-[350px]  text-[#494949]  uppercase">
              8th june 2024
            </h2>
            <h2 className="text-[18px] md:text-[32px] leading-[18px] md:leading-[32px] font-[marope] text-center drop-shadow-2xl self-center w-[350px]  text-[#494949]  uppercase">
              surf beach at sunway lagoon
            </h2>
          </div>
          <div className="flex gap-3 self-center">
            <BuyButton text="Buy Tickets" link="#" check="now" />
            <BuyButton text="Pay Later" link="#" check="later" />
          </div>

          <div className="flex justify-center items-center gap-3 py-3  md:py-6 ">
            <a href="#brand">
              <h2 className="text-[20px] md:text-[24px] font-[manrope] drop-shadow-2xl  text-[#494949]">
                Scroll Down
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
