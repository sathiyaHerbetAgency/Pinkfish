/* eslint-disable */
import { artistData } from "./LandingPageData";

export const HeroTitle = () => {
  const titleStyle =
    "text-white self-center text-center text-[10px] md:text-[13px] leading-[12.19px] md:leading-[15.85px] font-[Manrope-Bold] uppercase";
  return (
    <div className="flex flex-col gap-6">
      <img
        className="w-[125px] md:w-[175px] h-[25px] md:h-[68px]"
        src="./Landing-Page/pinkfish_logo.png"
        className="self-center"
        alt="logo"
      />
      <div className="flex flex-col">
        <p className={titleStyle}>{artistData.date}</p>
        <p className={titleStyle}>{artistData.place}</p>
      </div>
    </div>
  );
};
