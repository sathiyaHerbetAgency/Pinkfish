/* eslint-disable */
import React from 'react'

const EventLayout = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-0">
        <h4 className="text-[24px] md:text-[32px]  tracking-[1px] font-[Integral] font-[700] text-center self-center text-[#fff]  uppercase">EVENT LAYOUT</h4>
      <div className="self-center">
        <img src="./PFA/Boris/Event/layout.png" className="min-w-[90vw] hidden md:block object-none max-h-[550px]" alt="layout" />
        <img src="/PFA/Boris/Event/layout_mob.png" className=" block md:hidden self-center object-contain max-h-[195px] max-w-[350px] " alt="layout" />
      </div>
      <div className=" self-center w-[80%] md:max-w-[700px]">
        <p className="text-[10px] md:text-[14px] font-[Sofia] items-center self-center text-[#fff] text-center uppercase">DISCLAIMER</p>
        <p className="text-[10px] md:text-[14px] font-[Sofia] items-center self-center text-[#fff] text-center  " >Venue layout is not drawn to scale and is for ticket location purposes only. Colour indicates price category.
        Layout is subject to change without prior notice.</p>
      </div>

    </div>
  )
}

export default EventLayout