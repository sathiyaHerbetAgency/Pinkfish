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
    <div className="flex flex-col">
     <div className="self-center">
        <img src="./PFA/Boris/VipBanner/VIP.png" className="max-w-[80vw] hidden md:block  max-h-[300px] object-contain" alt="layout" />
        <img src="./PFA/Boris/VipBanner/VIP.png" className=" block md:hidden self-center object-contain max-w-[343px] max-h-[232px]" alt="layout" />
      </div>
    </div>
  )
}

export default VipBanner