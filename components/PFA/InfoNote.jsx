/* eslint-disable */
import React from "react";

const InfoNote = ({ image, text }) => {
  return (
    <div className=" self-center max-w-[80vw] md:max-w-[45vw] pt-11">
      <div className="flex  border-[1px] border-[#6B6B6B] rounded-2xl py-4">
        <div className="flex flex-row  w-fit border-[#6B6B6B] border-r pr-3">
          {/* <div className="flex">
                    <img src="./PFA/svg/stand.svg" className="relative " alt="stand" />
                    <img src="./PFA/svg/stand.svg" className="relative left-[-30px]" alt="stand" />
                </div>  */}
          <img
            src={`./PFA/${image}.png`}
            className="pl-3 object-contain"
            alt="stage"
          />
        </div>
        <div className="self-center flex flex-col items-center">
          <div className="self-center  w-[90%]">
            <p className="text-[10px] md:text-[14px] font-[manrope] items-center self-center text-[#fff]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoNote;
