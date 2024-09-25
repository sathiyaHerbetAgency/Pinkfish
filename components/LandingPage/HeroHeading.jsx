/* eslint-disable */
import { artistData } from './LandingPageData';
export const HeroHeading=()=>{
    const HeadingClass="text-white self-center text-center text-[40px] md:text-[48px] leading-[46px] md:leading-[58.51px] font-[Montserrat-Bold] uppercase";
    const DescriptionClass="text-white self-center text-center text-[15px] md:text-[18px] leading-[18.29px] md:leading-[21.94px] font-[Montserrat-Regular] md:w-[530px]";
    const BuyBtnClass="bg-[#90FF7E] text-[#000] flex justify-center items-center  rounded text-[20px] w-[192px]   md:w-[195px] h-[45px] leading-[24px] font-[Montserrat-Bold] uppercase";
    const LearnBtnClass=" bg-[rgba(255,255,255,0.2)] bg-clip-border border border-[#fff]/[20%] text-[#fff] flex justify-center  items-center   rounded text-[20px] leading-[24px ]  w-[195px] font-[Montserrat-Bold] h-[45px] uppercase";

    return(
        <div className="flex flex-col mt-12 md:mt-3">
            <div className="flex flex-col gap-2 md:gap-0 w-[313px] self-center md:w-auto">
                <h1 className={HeadingClass}>{artistData.heading}<span className="text-[#90FF7E]">{artistData.spanText}</span></h1>
                <p className={DescriptionClass}>{artistData.text}</p>
            </div>
            {/* <img className="hidden md:block" src={artistData.heroImageUrl} alt="lineup" />
            <div className="flex flex-col md:hidden">
            <img className="relative top-[70px]" src={artistData.heroImageUrlMob1} alt="lineup" />
            <img className="z-10" src={artistData.heroImageUrlMob2} alt="lineup" />

            </div> */}
             <div className="flex flex-col gap-3 md:flex md:flex-row md:gap-2 self-center pt-24" >
                        <a className={BuyBtnClass} href={artistData.BannerBtn1Link}>
                            <img src={artistData.BlackTicketIconUrl} alt="Ticket" /> {artistData.bannerBtn1Text}
                        </a>
                        <a className={LearnBtnClass} href={artistData.BannerBtn2Link}>
                            {artistData.bannerBtn2Text}
                        </a>
                    </div>
        </div>
    )
}