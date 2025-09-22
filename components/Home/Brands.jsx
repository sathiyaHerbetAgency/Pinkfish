/* eslint-disable */
import React from "react";

const Brands = () => {
  const containerClass = "flex flex-col items-center ";
  return (
    <div className="flex flex-col bg-gallery-home md:mb-5 mb-1 ">
      <div className="flex flex-col self-center w-[347px] md:w-[700px] lg:w-[900px] xl:w-[1235px] pt-8 md:pt-16 pb-3 md:pb-1 gap-6">
        <h2 className="text-[16px] md:text-[24px] leading-[19.2px] md:leading-[28.8px] font-[700] font-[Archivo] uppercase text-center  text-[#fff]  uppercase">
          Our brands
        </h2>
        <div className="grid md:grid-cols-4 gap-4 grid-cols-2 self-center ">
          <a href="music&artsfestival" className={containerClass}>
            <img
              src="./Home/Brands/pf_logo.webp"
              clasName="self-center"
              alt="Pinkfish Music & Arts Festival Logo"
            />
          </a>
          <a href="pfc-countdown-nye-2024" className={containerClass}>
            <img
              src="./Home/Brands/pc_logo.webp"
              className=" p-6 md:p-8 "
              alt="Pinkfish Countdown Logo"
            />
          </a>
          <a href="Live" className={containerClass}>
            <img src="./Home/Brands/pl_logo.webp" alt="Pinkfish Live Logo" />
          </a>
          <a href="arena" className={containerClass}>
            <img
              src="./Home/Brands/pf_arena_logo.webp"
              alt="Pinkfish Arena Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brands;
