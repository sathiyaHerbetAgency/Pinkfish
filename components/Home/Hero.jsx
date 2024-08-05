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
    <div className={` flex flex-col  justify-center min-h-[100vh] bg-[#000]`}>
        <div className="self-center flex ">
            <img src="./Home/svg/star.svg" className="w-[80px] relative right-[-290px] top-[15px]" alt="hero svg star" />
            <img src="./Home/svg/wave.svg" className="w-[120px]  relative right-[-250px] top-[-90px] " alt="hero svg star" />
            <img src="./Home/hero_logo.png" className="self-center" alt="hero logo" />
            <img src="./Home/svg/daimond.svg" className="w-[100px]  relative top-[-100px] right-[110px]" alt="hero svg star" />
            <img src="./Home/svg/fish.svg" className="w-[100px] relative top-[150px] right-[300px]  " alt="hero svg star" />
        </div>
        <h1 className="text-[24px] font-[Integral] text-center drop-shadow-2xl  text-[#fff]  uppercase">more than just a festival</h1>

        <div className="flex justify-center gap-3">
            <h1 className="text-[24px] font-[Sofia] drop-shadow-2xl  text-[#fff]">Scroll Down</h1>
            <img src="./Home/svg/arrow_down.svg" className="w-[30px]" alt="hero svg star" />
            
        </div>
    </div>
  )
}

export default Hero