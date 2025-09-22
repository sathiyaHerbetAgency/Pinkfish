/* eslint-disable */
"use client";
import { artistData } from "./LandingPageData";
export const Banner = () => {
  const HeadingClass =
    "text-white self-center text-center lg:text-left xl:text-center text-[28px] md:text-[32px] leading-[34.13px] md:leading-[40px]  font-[Manrope-Bold] uppercase";
  const DescriptionClass =
    "text-white self-center text-center text-[16px] leading-[19.5px]  font-[manrope] md:w-[70%]";
  const BuyBtnClass =
    "bg-white text-[#710CF6] flex justify-center items-center  rounded text-[20px] w-[192px]   md:w-[195px] h-[45px] leading-[24px] font-[marope] uppercase";
  const LearnBtnClass =
    "bg-[#8d3df8] text-[#fff] flex justify-center  items-center   rounded text-[20px] leading-[24px ]  w-[195px] font-[marope] h-[45px] uppercase";

  return (
    <div className="flex flex-col bg-[#710CF6] max-w-[100vw] py-12">
      <div className="flex md:w-[700px] lg:w-[900px] xl:w-[1300px] flex-col self-center">
        <div className="self-center flex flex-col gap-1 items-center w-[380px]  md:w-[700px] lg:w-[900px] xl:w-[1086px] ">
          <h2 className={HeadingClass}>
            {artistData.bannerHeading}
            <span className="text-[#90FF7E]">
              {artistData.bannerHeadingSpan}
            </span>{" "}
          </h2>
          <p className={DescriptionClass}>{artistData.bannerText} </p>
          <div className="flex flex-col gap-3 md:flex md:flex-row md:gap-2 self-center pt-6">
            <a className={BuyBtnClass} href={artistData.BannerBtn1Link}>
              <img src={artistData.PurpleTicketIconUrl} alt="Ticket" />{" "}
              {artistData.bannerBtn1Text}
            </a>
            <a className={LearnBtnClass} href={artistData.BannerBtn2Link}>
              {artistData.bannerBtn2Text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
