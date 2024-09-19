/* eslint-disable */
import { artistData } from './LandingPageData';
export const HeroHeading=()=>{
    const HeadingClass="text-white self-center text-center text-[48px] leading-[58.51px] font-[Montserrat-Bold] uppercase";
    const DescriptionClass="text-white self-center text-center text-[18px] leading-[21.94px] font-[Montserrat-Regular] w-[530px]";
    return(
        <div className="flex flex-col mt-3">
            <div className="flex flex-col">
                <h1 className={HeadingClass}>{artistData.heading}<span className="text-[#90FF7E]">{artistData.spanText}</span></h1>
                <p className={DescriptionClass}>{artistData.text}</p>
            </div>
            <img src={artistData.imageUrl} alt="lineup" />
        </div>
    )
}