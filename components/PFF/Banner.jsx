/* eslint-disable */

import React from 'react'
import "../../styles/live.css"

const Banner = ({select}) => {


    const PFF={
        first_heading:"what’s next in store?",
        text:"Scope out the other events we have lining up for you this year. Get hyped!",
        button_text:'Check out Pinkfish Countdown',
         link:"/PFC"
    }
    const PFC={
        first_heading:"Catch the news before it drops",
        text:"Hop on the waitlist to get first dibs on news, tickets, and exclusive updates for the upcoming event.",
        button_text:'Join the waitlist',
         link:"https://forms.gle/UHnTfnZcNNfkXtk37"
    }
    function checkContents(){
        if(select==="PFF"){
            return PFF
        }else if(select==="PFC"){
            return PFC
        }
    }

  return (
    <div className={`${select==="PFF"?"banner-container-pff": "banner-container-pfc"} md:min-h-screen min-h-[50vh] flex flex-col justify-start gap-6 items-center`}>
        <div className="md:w-[30vw] w-[85vw] flex flex-col gap-6 pt-11">
            <h1 className={` ${select==="PFC"?"text-[#fff]":"text-[#000]"} font-bold  font-[Integral] text-[34px] leading-[40px] text-center uppercase`}>{checkContents().first_heading}</h1>
            <p className={` ${select==="PFC"?"text-[#fff]":"text-[#000]"} world_text  text-center`}>{checkContents().text}</p>
           {select==="PFF"? <button type='button' className='uppercase text-white p-3 px-4 self-center bg-[#FF0086] rounded-md font-[SofiaMedium] text-[16px] md:text-[18px] w-fit'> <a href={checkContents().link}  >{checkContents().button_text}</a></button>
           : <button type='button' className='uppercase text-white p-3 px-4 self-center bg-[#FF0086] rounded-md font-[SofiaMedium] text-[16px] md:text-[18px] w-fit'> <a href={checkContents().link}  >{checkContents().button_text}</a></button>
  }
        </div>
    </div>
  )
}

export default Banner