/* eslint-disable */

import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';

const VipBanner = () => {
    const bannerContent={
        title:'VIP PERKS',
        text1:'x1 Complimentary Drink Coupon',
        text2:'Exclusive Elevated Viewing VIP Deck',
        text3:'Exclusive Access To VIP & General Admissions Areas ',
        text4:'VIP Designated Express Lanes',
        text5:'Exclusive VIP Space (Private Bar & Lounge)',

    }

    const text="text-[14px] md:text-[20px] font-[Sofia] text-[#000] md:w-[70%] text-center "
  return (
    <div className="flex flex-col">
     <div className="self-center flex flex-col ">
       <TicketHeadingLabel text="VVIP" />
        {/* <img src="./PFA/Nifra/VipBanner/VIP.png" className="max-w-[80vw] hidden md:block  max-h-[300px] object-contain" alt="layout" /> */}
         {/* <img src="./PFA/Nifra/VipBanner/VIP.png" className=" block md:hidden self-center object-contain max-w-[343px] max-h-[232px]" alt="layout" /> */}
        <div className="bg-banner-boris w-[90vw] md:w-[600px] h-[140px] md:h-[250px] flex flex-grow mt-12" >
          <div className=" relative max-w-[40px] md:max-w-[70px] grow h-[140px] md:h-[250px] flex justify-center items-center ">
          <p
        className="
          text-white text-[8px]  md:text-[14px] font-[Integral] font-light md:font-[400]  uppercase min-w-[140px] text-center md:min-w-[250px]  transform -rotate-90"
      >
        PREMIUM ADMISSION
      </p>
          </div>
          <div className=" p-3 md:p-6 md:pl-8 rounded-md max-w-xs my-auto text-left">
      {/* Large VVIP text */}
      <h2 className=" text-[24px] md:text-[64px]   uppercase font-[Integral] font-[900] text-white">VVIP</h2>
      
      {/* Subheading */}
      <p className="text-[#FFC4E4] text-[12px] md:text-[20px] mt-2 font-[Integral] font-[400] uppercase">
      call for reservation
      </p>
      
      {/* Button linking to phone number */}
      <a
        href="https://wa.me/60122655783" target="_blank" rel="noopener noreferrer"
        className="inline-block bg-pink-500 text-white font-[Integral] font-[300] text-[12px] md:text-[16.82px] w-[150px] md:w-[250px] text-center py-2 md:py-4 mt-2 md:mt-4  rounded-md uppercase"
      >
        +6012 265 5783
      </a>
    </div>
        </div>
      </div>
    </div>
  )
}

export default VipBanner