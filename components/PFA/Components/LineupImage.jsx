/* eslint-disable */
import React from "react";

const LineupImage = () => {
  const imageDetails = [
    { img: "./PFA/Lineup/lineup_1.png", name: "Billy Gillies" },
    { img: "./PFA/Lineup/lineup_2.png", name: "Andrew Rayel" },
    { img: "./PFA/Lineup/lineup_3.png", name: "giuseppe ottaviani" },
    { img: "./PFA/Lineup/lineup_4.png", name: "chukiess & Whackboi" },
  ];
  return (
    <>
      {imageDetails.map((each) => (
        <div className="flex flex-col gap-4 items-center">
          <img
            src={each.img}
            classsName="object-contain self-center"
            alt="img_1"
          />
          <h2 className="text-[16px] md:text-[24px] font-[manrope] text-white uppercase text-center self-center font-[700]">
            {each.name}
          </h2>
        </div>
      ))}
    </>
  );
};

export default LineupImage;
