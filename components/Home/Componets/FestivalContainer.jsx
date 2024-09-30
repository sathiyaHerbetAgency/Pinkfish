/* eslint-disable */
import React from 'react'
import  Link  from 'next/link';
const textGallery1= "text-[24px] leading-[32.06px] font-[Sofia] font-[800] text-white text-left w-[90%] ";
const overlayContainer="absolute z-1 w-[90%] md:max-w-[370px] h-[324px] md:h-[394px] pl-4 pb-4 flex flex-col justify-between";
const text1="text-white text-[16px] leading-[22.66px] font-[Sofia] font-[400]";
const button="bg-[#2A2A2A] text-[12.31px] leading-[24.63px] font-[Sofia] font-[800] p-2 px-3 mt-3 rounded-md uppercase"
const FestivalContainer = ({data}) => {
  return (
    <div className="w-[90%] md:max-w-[370px] h-[324px] gap-0 md:h-[394px]   self-center">
    <Link href={data.link} className={overlayContainer}>
    <div className="flex justify-end w-[90%] md:w-[95%] ">
        {data.sale&&<button className={button} type="button"> Tickets on sale </button>}
    </div>
    <div className="flex flex-col items-start gap-3 md:gap-5">
        <h3 className={textGallery1}>{data.title}</h3>
        <div className="flex flex-col md:gap-2">
            <div className="flex items-center gap-2">
            <img src="./Home/Festival/Icons/date.png" className="max-w-[15px] max-h-[15px]" alt="date" />
                <p className={text1}>{data.date}</p>
            </div>
            <div className="flex items-center gap-2">
            <img src="./Home/Festival/Icons/location.png" className="max-w-[15px] max-h-[15px]" alt="date" />
                <p className={text1}>{data.location}</p>
            </div>      
        </div>
    </div>
    </Link>
    <img src={data.imgUrl} alt="slider-1" />
</div>
  )
}

export default FestivalContainer