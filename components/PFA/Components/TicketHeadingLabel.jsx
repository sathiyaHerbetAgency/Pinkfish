/* eslint-disable */
import React from 'react'

const TicketHeadingLabel = ({text}) => {
  return (
    <div className="flex flex-col">
    <div className="max-w-[60vw] md:max-w-[900px] md:w-[100%] self-center  bg-[#393939] rounded-lg">
        <h1 className="text-[20px] md:text-[32px] font-[700] tracking-[1px] font-[Integral] text-center pb-2  text-[#fff]  uppercase">{text}</h1>
    </div>
    </div>
  )
}

export default TicketHeadingLabel