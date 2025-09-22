/* eslint-disable */

import React from "react";

const Heading = ({ type }) => {
  return (
    <div className="flex md:gap-8 justify-center items-center md:py-11 py-11 px-11 gap-3 ">
      {type === "1" ? (
        <h1 className="text-white font-bold font-[Archivo] uppercase md:text-[36px] text-[23px] leading-[28px] uppercase text-center">
          counting down to <span className="text-[#69DC67]">#pfc2024 </span>
        </h1>
      ) : (
        <h1 className="text-white font-bold font-[Archivo] uppercase md:text-[36px] text-[23px] leading-[28px] uppercase text-center">
          <span className="text-[#69DC67]">#pfc2023 </span> official aftermovie{" "}
        </h1>
      )}
    </div>
  );
};

export default Heading;
