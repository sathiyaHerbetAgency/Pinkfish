/* eslint-disable */
import React from 'react'
import { artistData } from './LandingPageData';
import { StyleLandingPage } from './LandingPageClass';
const HeadingClass="text-[#90FF7E] text-left self-center text-[36px] leading-[43.88px] font-[Montserrat-Bold] uppercase";
const HeadingClass2=`${HeadingClass} text-white`;
const DescriptionClass="text-white self-center text-left text-[16px] leading-[19.5px] font-[Montserrat-Regular] w-[464px]";
const BuyBtnClass="bg-[#90FF7E] text-[#000] flex justify-center items-center  rounded text-[20px] w-[195px] leading-[20px] font-[Babas] uppercase mt-3";

const OfferSection = () => {
  return (
    <div className="flex flex-col my-12">
        <div className="self-center flex justify-between items-center min-w-[1100px]">
            <div className="w-1/2">
                <h1 className={HeadingClass} >{artistData.offerSectionHeading1}</h1>
                <h1 className={HeadingClass2}>{artistData.offerSectionHeading2 }</h1>
                <p className={DescriptionClass}>{artistData.offerSectionTextPart1}<span className="font-[Montserrat-Bold]">{artistData.offerSectionText1Span}</span>{artistData.offerSectionTextPart2}</p>
                <a className={BuyBtnClass} href={artistData.BannerBtn1Link}>
                    <img src={artistData.BlackTicketIconUrl} alt="Ticket" /> {artistData.bannerBtn1Text}
                </a>
            </div>
            <div className="w-1/2 flex justify-end">
            <img src={artistData.offerSectionSideImage} alt="side-img" />
            </div>
        </div>
    </div>    
  )
}

export default OfferSection