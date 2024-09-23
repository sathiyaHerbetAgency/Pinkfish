/* eslint-disable */
import React from 'react'
import { artistData } from './LandingPageData';

const FollowUs = () => {
     const titleClass="text-[#90FF7E] self-center text-center text-[28px] md:text-[32px] leading-[34.13px] md:leading-[40px]  font-[Montserrat-Bold] uppercase"
     const descriptionClass="text-white self-center text-center text-[16px] leading-[19.5px] md:w-[80%]  font-[Montserrat-Regular]"

  return (
    <div className="flex flex-col my-12 md:mt-24 lg:mt24 xl:mt-24">
        <div className="bg-[#2c2c2c] rounded-[43px] w-[90%]  h-[609px] md:h-[392px] md:w-[700px] lg:w-[900px] xl:min-w-[1093px]  self-center flex flex-col items-center justify-center ">
            <div className="flex flex-col gap-6 items-center self-center ">
                <div className="flex flex-col gap-3 md:gap-2 xl:gap-0 w-[308px] md:w-[700px] lg:w-[900px] ">
                    <h3 className={titleClass}>{artistData.followPageHeading}</h3>
                    <p className={descriptionClass}>{artistData.followPageText1Part1} <span className="font-[Montserrat-Bold] ">{artistData.followPageText1SpanText} </span> {artistData.followPageText1Part2}  </p>
                    <p className={descriptionClass}>{artistData.followPageText2}</p>
                </div>
                <div className="flex gap-3 w-[285px] md:w-[390px] justify-center flex-wrap md:no-wrap">
                    {artistData.imgList.map((each,index)=>(
                        <a href={artistData.links[index]} target="_blank">
                            <img src={each} className="w-[60px] h-[59px] md:w-[78px] md:h-[77px]" alt={"img"+index} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FollowUs