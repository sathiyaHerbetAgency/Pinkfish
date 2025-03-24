/* eslint-disable */

import React from 'react'

const CalendarContainer = ({text}) => {
  return (
    <div>
        
        <div className="bg-[#6A6161] bg-gradient-to-b from-transparent from-0% via-[#00000033] via-60% to-transparent to-90%   rounded-xl">
            <img src="./PFA/breaker_calendar.png" className="relative top-[54px] md:top-[93px] min-w-[111%]  left-[-10px] " alt="breaker" />
            <h2 className="text-[#fff] text-[70px] md:text-[118px] font-[ShareTech-Regular] text-center tracking-[-10px] font-[700]"> {text} </h2>
        </div>
    </div>
  )
}

export default CalendarContainer