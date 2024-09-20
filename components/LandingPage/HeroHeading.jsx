/* eslint-disable */
import { artistData } from './LandingPageData';
export const HeroHeading=()=>{
    const HeadingClass="text-white self-center text-center text-[40px] md:text-[48px] leading-[46px] md:leading-[58.51px] font-[Montserrat-Bold] uppercase";
    const DescriptionClass="text-white self-center text-center text-[15px] md:text-[18px] leading-[18.29px] md:leading-[21.94px] font-[Montserrat-Regular] md:w-[530px]";
    return(
        <div className="flex flex-col mt-12 md:mt-3">
            <div className="flex flex-col gap-2 md:gap-0 w-[313px] self-center md:w-auto">
                <h1 className={HeadingClass}>{artistData.heading}<span className="text-[#90FF7E]">{artistData.spanText}</span></h1>
                <p className={DescriptionClass}>{artistData.text}</p>
            </div>
            <img className="hidden md:block" src={artistData.heroImageUrl} alt="lineup" />
            <div className="flex flex-col md:hidden">
            <img className="relative top-[70px]" src={artistData.heroImageUrlMob1} alt="lineup" />
            <img className="z-10" src={artistData.heroImageUrlMob2} alt="lineup" />

            </div>
        </div>
    )
}