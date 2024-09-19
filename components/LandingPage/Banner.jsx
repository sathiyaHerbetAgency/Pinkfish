/* eslint-disable */
"use client"
import { artistData } from './LandingPageData';
export const Banner=()=>{
    const HeadingClass="text-white self-center text-left text-[40px] leading-[48px]  font-[Montserrat-Bold] uppercase";
    const DescriptionClass="text-white self-center text-center text-[13px] leading-[15px]  font-[Montserrat-Regular] w-[70%]";
    const BuyBtnClass="bg-white text-[#710CF6] flex justify-center items-center  rounded text-[20px] w-[195px] leading-[20px] font-[Babas] uppercase";
    const LearnBtnClass="bg-[#8d3df8] text-[#fff] flex justify-center  items-center   rounded text-[20px]  w-[195px] font-[Babas] uppercase";

    return(
        <div className="flex flex-col bg-[#710CF6] max-w-[100vw] py-12">
            <div className="flex w-[1300px] flex-col self-center">
                <div className="self-center flex flex-col gap-1 items-center w-[70%] ">
                    <h2 className={HeadingClass}>{artistData.bannerHeading}<span className="text-[#90FF7E]">{artistData.bannerHeadingSpan}</span> </h2>
                    <p className={DescriptionClass}>{artistData.bannerText} </p>
                    <div className="flex gap-2 self-center pt-6" >
                        <a className={BuyBtnClass} href={artistData.BannerBtn1Link}>
                            <img src={artistData.PurpleTicketIconUrl} alt="Ticket" /> {artistData.bannerBtn1Text}
                        </a>
                        <a className={LearnBtnClass} href={artistData.BannerBtn2Link}>
                            {artistData.bannerBtn2Text}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}