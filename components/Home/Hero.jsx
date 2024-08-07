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
    <div className={` flex flex-col md:justify-end justify-around min-h-[80vh] md:h-[95vh] bg-new-hero`}>
        <div className="self-center flex flex-col md:flex-row">
           <img src="./Home/svg/star.svg" className="w-[40px] hidden md:block md:w-[80px] relative top-[180px] right-[-40px]  md:right-[-250px] md:top-[15px]" alt="hero svg star" />
            <img src="./Home/svg/wave.svg" className="w-[120px] hidden md:block relative md:right-[-250px] md:top-[-120px] " alt="hero svg star" />
            <img src="./Home/hero_logo.png" className="self-center hidden md:block relative left-[-50px]" alt="hero logo" />
         <img src="./Home/svg/daimond.svg" className="w-[100px] hidden md:block relative top-[-80px] right-[180px]" alt="hero svg star" />
            <img src="./Home/svg/fish.svg" className="w-[100px] hidden md:block relative top-[150px] right-[300px]  " alt="hero svg star" />
        </div>
        <div>
        <h1 className="text-[18px] md:text-[24px]  font-[Integral] text-center drop-shadow-2xl  text-[#fff]  uppercase">more than just a festival</h1>
       

        <div className="flex justify-center items-center gap-3 py-3 md:py-11 ">
            <h1 className="text-[20px] md:text-[24px] font-[Sofia] drop-shadow-2xl  text-[#fff]">Scroll Down</h1>
            <a href="#brand">
                <img src="./Home/svg/arrow_down.svg" className="w-[25px] md:w-[30px] " alt="hero svg star" />
            </a>
        </div>
        </div>
    </div>
  )
}

export default Hero