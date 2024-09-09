/* eslint-disable */

import { useEffect, useRef, useState } from 'react';
import "../../styles/live.css"
import "../../styles/contact.css"
import '../../styles/home.css'



const Hero = () => {
    let firstRef=useRef(null)
    useEffect(()=>{
        firstRef.play()
        },[])

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
    <div className="">
      <video src="/bg_video_1.mp4" ref={(el)=>firstRef=el} className='min-h-[75vh] md:h-[85vh] min-w-[100vw]  object-cover absolute hero_container_new' id='videos' autoPlay loop playsInline muted ></video>
        <div className={` flex flex-col md:justify-center gap-11 justify-around min-h-[80vh] md:h-[85vh] bg-new-hero z-[50] relative`}>
            <div className=" mt-48   md:mt-0 flex flex-col">
                <div className="self-center">  
                    <img src="./Home/pf_main_logo.png" className="hidden md:block w-[90%] " alt="Pinkfish Main Logo" />
                </div>
            <h1 className="text-[18px] md:text-[24px]  font-[Integral] text-center drop-shadow-2xl  text-[#fff]  uppercase">more than just a festival</h1>
            <div className="flex justify-center items-center gap-3 py-3  md:py-6  ">
                <h3 className="text-[20px] md:text-[24px] font-[Sofia] drop-shadow-2xl  text-[#fff]">Scroll Down</h3>
                <a href="#brand">
                    <img src="./Home/svg/arrow_down.svg" className="w-[25px] md:w-[30px] " alt="hero svg star" />
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero