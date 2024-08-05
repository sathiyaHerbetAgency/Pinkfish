/* eslint-disable */

import React from 'react'

const CalendarContainer = ({text}) => {
  return (
    <div>
        
        <div className="bg-[#FF0086]   rounded-xl">
            <img src="./PFA/breaker_calendar.png" className="relative  top-[100px] min-w-[111%]  left-[-10px] " alt="breaker" />
<h1 className="text-[#fff] text-[128px] font-[ShareTech-Regular] text-center tracking-[-10px] font-[700]"> {text} </h1>
        </div>
    </div>
  )
}

export default CalendarContainer