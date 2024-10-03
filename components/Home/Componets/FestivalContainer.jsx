/* eslint-disable */
"use client"
import React,{useState} from 'react'
import "../../../styles/live.css"

import  Link  from 'next/link';

const textGallery1= "text-[16px] md:text-[24px] keading-[20.19px] md:leading-[32.06px] font-[Sofia] font-[800] text-white text-left w-[90%] ";
const overlayContainer="  opacity-0 hover:opacity-100 absolute z-1 w-[90%] md:max-w-[370px] h-[355px] md:h-[394px] pl-4 pb-4 flex flex-col justify-between bg-gradinet-gray";

const text1="text-white text-[12px] leading-[16px] md:text-[16px] md:leading-[22.66px] font-[Sofia] font-[400] text-left";
const button="bg-[#2A2A2A] text-[8px] md:text-[12.31px] leading-[10px] md:leading-[24.63px] font-[Sofia] font-[800] p-2 px-3 mt-3 mr-3 md:mr-0 rounded-md uppercase"
const FestivalContainer = ({data,index,active}) => {
    const [activeCard, setActiveCard] = useState(null);  
      const overlayContainerMob=' hidden   w-[90vw] h-[394px] flex flex-col justify-between bg-gradinet-gray pb-5';
    const overlayContainerMobOpacity='  absolute z-1 w-[48vw] min-h-[324px] flex flex-col justify-between pb-5 bg-gradinet-gray';
    function checkFunction(a){

        setActiveCard(activeCard === a ? null : a);
        console.log(activeCard===index)
    }
  return (
    <>
    <div className="hidden md:block">
        <div className="w-[90%] md:max-w-[370px] h-[324px] gap-0 md:h-[394px]    self-center">
            <Link href={data.link} className={overlayContainer}>
            <div className="flex justify-end w-[90%]  md:w-[95%] ">
                {data.sale&&<button className={button} type="button"> Tickets on sale </button>}
            </div>
            <div className="flex flex-col items-start gap-3  md:gap-5">
                <h3 className={textGallery1}>{data.title}</h3>
                <div className="flex flex-col gap-2 md:gap-2">
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
    </div>
    <div className="md:hidden flex flex-col self-cente max-w-[48vw] bg-white">
        <div  className="max-w-[48vw] h-[324px]    self-center">
            {active===index&&(
                <Link href={data.link} className={overlayContainerMobOpacity}>
                    <div className="flex justify-end w-[100%] mr-3 md:w-[95%] ">
                        {data.sale&&<button className={button} type="button"> Tickets on sale  </button>}
                    </div>
                    <div className="flex flex-col items-start gap-3 pl-3  mt-5">
                        <h3 className={textGallery1}>{data.title}</h3>
                        <div className="flex flex-col gap-1">
                            <div className="flex  items-center gap-2">
                            <img src="./Home/Festival/Icons/date.png" className="max-w-[10px] max-h-[10px]" alt="date" />
                                <p className={text1}>{data.date}</p>
                            </div>
                            <div className="flex items-center gap-2">
                            <img src="./Home/Festival/Icons/location.png" className="max-w-[10px] max-h-[10px]" alt="date" />
                                <p className={text1}>{data.location}</p>
                            </div>      
                        </div>
                    </div>
                </Link>
            )}
                <img src={data.imgUrl} className="max-w-[48vw] h-[324px] object-cover" alt="slider-1" />
            </div>
            </div>
    </>
  )
}

export default FestivalContainer