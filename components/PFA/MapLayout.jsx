/* eslint-disable */
import React from "react";

const MapLayout = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <h4 className="text-[32px] md:text-[66px]  tracking-[1px] md:leading-[70px] font-[Archivo] font-[700] text-center self-center text-[#fff] max-w-[40%] md:max-w-[20%] uppercase">
        EVENT LAYOUT
      </h4>
      <div className="self-center flex flex-col items-center">
        <div class="flex flex-col justify-center">
          <img
            src="./PFA/Nifra/Event/layout-1.png"
            className=" self-center hidden md:block "
            alt="layout"
          />

          <img
            src="/PFA/Nifra/Event/layout-1.png"
            className=" block md:hidden self-center object-contain  "
            alt="layout"
          />
        </div>
      </div>
    </div>
  );
};

export default MapLayout;
