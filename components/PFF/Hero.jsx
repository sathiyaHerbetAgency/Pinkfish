/* eslint-disable */

import React from 'react'
import "../../styles/live.css"


const Hero = ({select}) => {

    const PFF={
        first_heading:"thank you lavas!",
        second_heading:"pinkfish music & arts festival",
        span_text:"Pinkfish Music & Arts Festival ",
        text:"is a curated creative music & arts experience that featured live acts, both local & international, as well as art installations from various artists gifted in multiple mediums to celebrate the best in music & art in one big event.",
        button_text:'Follow for more updates'
    }
    const PFC={
        first_heading:"coming soon in 2024",
        second_heading:"pinkfish countdown",
        span_text:"Pinkfish Countdown ",
        text:"is a curated experience of tight-knit celebration that features both international and local live acts upon the ushering into the new year. This event brings together the creative and music-loving community, as we count down to the new year.",
        button_text:'Join the 2024 waitlist'
    }
    function checkContents(){
        if(select==="PFF"){
            return PFF
        }else if(select==="PFC"){
            return PFC
        }
    }



  return (
    <div className={` flex flex-col justify-between  md:pt-24  ${select==="PFF"?"bg-pff":"bg-pfc"}`}>
    <div className="flex flex-col gap-4 pt-24 self-center md:w-[80%]">
        <div className="md:w-[65%] w-[70%] flex flex-col self-center md:self-start gap-4">
            <h1 className="text-[22px] font-[Integral]  text-[#FF0086] text-center md:text-start uppercase">{checkContents().first_heading}</h1>
            <h1 className="text-[36px] md:text-[44px] font-[Integral] md:leading-[50px] md:text-start font-bold tracking-[1px] text-center text-[#fff] uppercase">{checkContents().second_heading}</h1>
            <p className="text-[18px] font-[SofiaLight] text-[#fff] text-center md:text-start"><span className="font-bold">{checkContents().span_text} </span>{checkContents().text}</p>
        </div>
        <div className="flex justify-center md:justify-start gap-6">
            <button type='button' className='uppercase text-white p-3 bg-[#FF0086] rounded-md font-[SofiaMedium] text-[18px]'>{checkContents().button_text}</button>
            <button type='button'className=' uppercase text-white  px-4 outline outline-2 outline-[#fff] rounded-md font-[SofiaMedium] text-[18px]'>FAQ</button>

        </div>
        <div className="flex gap-3 items-center pt-11 hidden md:block">
        <p className="text-white">Be in the loop!</p>
        <div className="flex gap-3">
            <img src="/facebook-pfc.png" />
            <img src="/twitter-pfc.png" />
            <img src="/pff-insta.png" />
        </div>
    </div>

    </div>
 
    <div className="flex justify-center items-center gap-3  md:hidden bg-black bg-opacity-50 py-8">
        <p className="text-white">Be in the loop!</p>
        <div className="flex items-center gap-3">
            <img src="/facebook-pfc.png" />
            <img src="/twitter-pfc.png" />
            <img src="/pff-insta.png" />
        </div>
    </div>     
</div>
  )
}

export default Hero