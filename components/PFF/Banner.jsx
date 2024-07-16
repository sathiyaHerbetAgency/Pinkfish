/* eslint-disable */

import React from 'react'
import "../../styles/live.css"

const Banner = ({select}) => {


    const PFF={
        first_heading:"what’s nextin store?",
        text:"Scope out the other events we have lining up for you this year. Get hyped!",
        button_text:'Check out Pinkfish Countdown'
    }
    const PFC={
        first_heading:"Catch the news before it drops",
        text:"Hop on the waitlist to get first dibs on news, tickets, and exclusive updates for the upcoming event.",
        button_text:'Join the waitlist'
    }
    function checkContents(){
        if(select==="PFF"){
            return PFF
        }else if(select==="PFC"){
            return PFC
        }
    }

  return (
    <div className={`${select==="PFF"?"banner-container-pff": "banner-container-pfc"} min-h-screen flex flex-col justify-start gap-6 items-center`}>
        <div className="w-[30vw] flex flex-col gap-6 pt-24">
            <h1 className="text-[#FF0086] font-bold  font-[Integral] text-[38px] leading-[42px] text-center uppercase">{checkContents().first_heading}</h1>
            <p className="font-[SofiaLight] text-[24px] leading-[28px] text-center">{checkContents().text}</p>
            <button type='button' className='uppercase text-white p-3 bg-[#FF0086] rounded-md font-[SofiaMedium] text-[20px]'>{checkContents().button_text}</button>

        </div>
    </div>
  )
}

export default Banner