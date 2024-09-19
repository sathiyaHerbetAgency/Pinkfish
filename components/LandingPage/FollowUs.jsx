/* eslint-disable */
import React from 'react'
import { artistData } from './LandingPageData';

const FollowUs = () => {
     const titleClass="text-[#90FF7E] self-center text-center text-[36px] leading-[42px]  font-[Montserrat-Bold] uppercase"
     const descriptionClass="text-white self-center text-center text-[16px] leading-[19.5px]  font-[Montserrat-Regular]"

  return (
    <div className="flex flex-col my-12">
        <div className="bg-[#2c2c2c] min-w-[1093px] min-h-[392px] self-center flex flex-col items-center justify-center rounded-[43px]">
            <div className="flex flex-col gap-6 items-center self-center ">
                <div className="flex flex-col gap-0 w-[802px]">
                    <h3 className={titleClass}>{artistData.followPageHeading}</h3>
                    <p className={descriptionClass}>{artistData.followPageText1Part1} <span className="font-[Montserrat-Bold] ">{artistData.followPageText1SpanText} </span> {artistData.followPageText1Part2}  </p>
                    <p className={descriptionClass}>{artistData.followPageText2}</p>
                </div>
                <div className="flex gap-3">
                    {artistData.imgList.map((each,index)=>(
                        <a href={artistData.links[index]} target="_blank">
                            <img src={each} className="w-[78px] h-[77px]" alt={"img"+index} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FollowUs