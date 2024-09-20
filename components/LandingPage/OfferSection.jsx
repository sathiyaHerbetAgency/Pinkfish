/* eslint-disable */
import React from 'react'
import { artistData } from './LandingPageData';
import { StyleLandingPage } from './LandingPageClass';
const HeadingClass="text-[#90FF7E] text-center md:text-left self-center text-[28px] md:text-[36px] leading-[34.13px] md:leading-[43.88px] font-[Montserrat-Bold] uppercase";
const HeadingClass2=`${HeadingClass} text-white`;
const DescriptionClass="text-white self-center text-center md:text-left text-[16px] leading-[19.5px] font-[Montserrat-Regular] md:w-[464px] self-start";
const BuyBtnClass="bg-[#90FF7E] text-[#000] flex justify-center items-center  rounded text-[20px] w-[192px]   md:w-[195px] h-[45px] leading-[24px] font-[Babas] uppercase";

const OfferSection = () => {
  return (
    <div className="flex flex-col my-12">
        <div className="self-center flex flex-col md:flex md:flex-row  md:justify-between items-center md:w-[680px] lg:w-[900px] xl:min-w-[1100px]">
            <div className=" lg-[400px] xl:w-1/2 order-2 md:order-1 flex flex-col items-center md:items-start gap-6 md:gap-3   w-[90%]">
               <div className="">
                  <h1 className={HeadingClass} >{artistData.offerSectionHeading1}</h1>
                  <h1 className={HeadingClass2}>{artistData.offerSectionHeading2 }</h1>
                </div>
                <div className="">
                <p className={DescriptionClass}>{artistData.offerSectionTextPart1}<span className="font-[Montserrat-Bold]">{artistData.offerSectionText1Span}</span>{artistData.offerSectionTextPart2}</p>
                </div>
                <a className={BuyBtnClass} href={artistData.BannerBtn1Link}>
                    <img src={artistData.BlackTicketIconUrl} alt="Ticket" /> {artistData.bannerBtn1Text}
                </a>
            </div>
            <div className="md:w-1/2 flex justify-end order-1 md:order-2">
            <img src={artistData.offerSectionSideImage} alt="side-img" />
            </div>
        </div>
    </div>    
  )
}

export default OfferSection