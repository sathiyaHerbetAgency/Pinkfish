/* eslint-disable */
import React from 'react'

const TicketHeadingLabel = ({text}) => {
  return (
    <div id="Tickets" className="flex flex-col">
    <div className="max-w-[60vw] md:max-w-[900px] md:w-[80%] self-center py-6 md:py-3 px-4 bg-transparent border border-[#FF0086] rounded-[17px]">
        <h2 className="text-[20px] md:text-[32px] font-[700] tracking-[1px] font-[Integral] text-center  text-[#fff]  uppercase">{text}</h2>
    </div>
    </div>
  )
}

export default TicketHeadingLabel