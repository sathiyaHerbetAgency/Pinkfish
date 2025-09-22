/* eslint-disable */
import React from "react";

const EventLayout = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-0">
      {/* <h4 className="text-[24px] md:text-[32px]  tracking-[1px] font-[Archivo] uppercase font-[700] text-center self-center text-[#fff]  uppercase">EVENT LAYOUT</h4> */}
      <img
        src="./PFA/Nifra/Event/payment-1.png"
        className="w-[100%] md:w-[60%] self-center  "
        alt="layout"
      />
      <div className="self-center flex flex-col items-center">
        <div class="flex flex-col justify-center w-[60%] md:py-0 md:w-[343px] md:h-[82px] rounded-[48px] border-2 border-[#676767] bg-gradient-to-b from-[rgba(217,217,217,0.2)] to-[rgba(217,217,217,0)] self-center">
          <img
            src="./PFA/Nifra/Event/payment-2.png"
            className=" self-center hidden md:block  "
            alt="layout"
          />

          <img
            src="/PFA/Nifra/Event/payment-2.png"
            className=" block md:hidden self-center  "
            alt="layout"
          />
        </div>
      </div>
      <div className=" self-center w-[80%] md:max-w-[700px]pt-6 md:pt-11">
        <p className="text-[10px] md:text-[12px] font-[manrope] font-bold items-center self-center text-[#fff] text-center uppercase">
          DISCLAIMER:
        </p>
        <p className="text-[10px] md:text-[12px] font-[manrope] font-bold items-center self-center text-[#fff] text-center uppercase ">
          Ticket Price Exlcudes Ticket Fee & Booking Charges{" "}
        </p>
      </div>
    </div>
  );
};

export default EventLayout;
