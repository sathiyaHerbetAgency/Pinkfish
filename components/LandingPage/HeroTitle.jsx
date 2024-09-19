/* eslint-disable */
import { artistData } from './LandingPageData';

export const HeroTitle=()=>{
    const titleStyle="text-white self-center text-center text-[13px] leading-[15.85px] font-[Montserrat-Bold] uppercase";
    return(
        <div className="flex flex-col gap-6">
        <img className="w-[175px] h-[68px]" src="./Landing-Page/pinkfish_logo.png" className="self-center" alt="logo" />
        <div className="flex flex-col">
            <p className={titleStyle}>{artistData.date}</p>
            <p className={titleStyle}>{artistData.place}</p>
        </div>
    </div>
    );
};

  
