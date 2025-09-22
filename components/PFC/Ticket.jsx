/* eslint-disable */

import React from "react";

const Ticket = () => {
  return (
    <div className="flex flex-col md:py-12">
      <div className="flex flex-col bg_ticket">
        <div className=" self-center flex gap-2 items-center md:min-h-[60vh] min-h-[40vh] ">
          <img
            src="./PFC/Ticket/svg/thunder.png"
            className="relative top-[10px]"
            alt="thunder-green"
          />
          <h2 className="text-[20px] md:text-[28px] w-[70%] font-[Archivo] text-left  text-[#fff]">
            COMING SOON
          </h2>
          <img
            src="./PFC/Ticket/svg/thunder.png"
            className="relative top-[10px] pl-3"
            alt="thunder-green"
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
