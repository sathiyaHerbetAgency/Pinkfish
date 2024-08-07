/* eslint-disable */

import React from 'react'
import "../../styles/live.css"
import "../../styles/contact.css"



const Hero = () => {

    const PFA={
        first_heading:"pinkfish arena presents",
        second_heading:"Find Your Harmony ",
        second_heading_year:"2024",
        span_text:"Pinkfish Music & Arts Festival ",
        text:"1 November 2024    |   Mega Star Arena Kuala Lumpur",
        button_text:'BUY TICKETS',
        link:"https://www.instagram.com/pinkfishfestival/"
    }
   




  return (
    <div className={` flex flex-col justify-between  pt-16 bg-black }`}>
    <div className="flex flex-col gap-4  self-center">
        <div className=" flex flex-col self-center  gap-4">
            <img src="./PFA/pf_arena_logo.png"  className="w-48 self-center" alt="pf_arena_logo" />
        <h1 className="text-[22px] font-[Integral] text-center  text-[#fff]  uppercase">{PFA.first_heading}</h1>
        <div className="flex justify-center">
            <svg width="60" height="18" className="text-center" viewBox="0 0 60 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9.07715" width="12.3335" height="12.3335" transform="rotate(45 9.07715 0)" fill="#FF0086"/>
                <rect x="30" width="12.3335" height="12.3335" transform="rotate(45 30 0)" fill="#FF0086"/>
                <rect x="50.9219" width="12.3335" height="12.3335" transform="rotate(45 50.9219 0)" fill="#FF0086"/>
            </svg>
            </div>
            <h1 className="text-[36px] md:text-[70px] font-[Integral] md:leading-[85px]  self-center leading-[38px] font-bold tracking-[1px] text-center text-[#fff] uppercase">{PFA.second_heading}</h1>
            <h1 className="text-[36px] md:text-[70px] font-[Integral] md:leading-[85px]  self-center leading-[38px] font-bold tracking-[1px] text-center text-[#fff] uppercase">{PFA.second_heading_year}</h1>

        </div>
        <div className="min-w-[100vw] flex justify-center bg-[#FF0086]">
            <h1 className="text-[24px] font-[Integral] pb-2  font-[700] text-[#fff] text-start uppercase">{PFA.text}</h1>

        </div>
        <div className="  md:text-center flex justify-center w-[80%] md:w-[100%]  self-center gap-6">
            <button type='button' className='uppercase contact_submit text-[18px] px-4 py-4 font-[500] bg-[#FF0086]'> <a href={PFA.link} target="_blank" > {PFA.button_text} </a></button>
            

        </div>
       

    </div>
 

         
</div>
  )
}

export default Hero