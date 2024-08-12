/* eslint-disable */

import React from 'react'

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
    <>
    <div className=" hidden md:block self-center">
      <div className="flex justify-center">
        <div className="vip-banner flex flex-col justify-center min-h-[245px] rounded-b-xl self-center">
            <div className="flex  gap-4 self-center w-[90%]">
              <div className="flex flex-col justify-around items-center basis-1/3  gap-6 h-full  border-r-2 border-[#fff]">
                <h1 className="text-[20px] md:text-[32px] leading-[32px]  font-[Integral] font-[900] vip_banner_heading text-center">{bannerContent.title}</h1>
                <h1 className={text}>x1 Complimentary  <span className=" text-[#4B4B4B] text-[20px] font-[900]"> Drink Coupon </span></h1>

              </div>
              <div className="flex flex-col justify-around items-center max-w-fit gap-4  basis-1/3 border-r-2 border-[#fff]">
                <h1 className={text}>'Exclusive  <span className="text-[#4B4B4B] text-[20px] font-[900]">Elevated Viewing VIP Deck  </span></h1>
                <h1 className={text}>Exclusive Access To <span className="text-[#4B4B4B] text-[20px] font-[900]">   VIP & General Admissions Areas</span></h1>

              </div>
               <div className="flex flex-col  justify-around items-center gap-4 w-fit h-full  basis-1/3 ">
                <h1 className={text}>VIP Designated Express <span className="text-[#4B4B4B] text-[20px] font-[900]">Lanes</span></h1>
                <h1 className={text}>Exclusive <span className="text-[#4B4B4B] text-[20px] font-[900]"> VIP Space </span> (Private Bar & Lounge)</h1>

              </div>
            </div>

        </div>
      </div>
    </div>
    <div className="flex flex-col md:hidden">
      <div className="vip-banner flex flex-col justify-center min-h-[230px] max-w-[85vw] self-center">
          <div className="flex gap-4 self-center w-[90%]">
            <div className="flex flex-col justify-around   h-full basis-1/2  border-r-2 border-[#fff]">
              <h1 className="text-[20px] md:text-[32px] leading-[32px]  font-[Integral] font-[900] vip_banner_heading text-center">{bannerContent.title}</h1>
              <h1 className={text}>x1 Complimentary  <span className=" text-[#4B4B4B] text-[14px] md:text-[20px] md:font-[900]"> Drink Coupon </span></h1>
              <h1 className={text}>'Exclusive  <span className="text-[#4B4B4B] text-[14px] md:text-[20px] md:font-[900]">Elevated Viewing VIP Deck  </span></h1>

            </div>
            <div className="flex flex-col justify-around h-full basis-1/2  ">
            <h1 className={text}>Exclusive Access To <span className="text-[#4B4B4B] text-[14px] md:text-[20px] md:font-[900]">   VIP & General Admissions Areas</span></h1>
              <h1 className={text}>VIP Designated Express <span className="text-[#4B4B4B] text-[14px] md:text-[20px] md:font-[900]">Lanes</span></h1>
                <h1 className={text}>Exclusive <span className="text-[#4B4B4B] text-[14px] md:text-[20px] md:font-[900]"> VIP Space </span> (Private Bar & Lounge)</h1>


            </div>
          </div>

      </div>
    </div>
    </>
  )
}

export default VipBanner