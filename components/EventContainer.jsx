/* eslint-disable */
import React from 'react'

const EventContainer = ({link,title,description}) => {
    function checkContents(){
        if(title==="#PFF"){
            return "bg-pff-event"
        }else if(title==="#PFC"){
            return "bg-pfc-event"
        }
        else if(title==="#PFL"){
            return "bg-pfl-event"
        }else if(title==="#PFA"){
            return "bg-pfa-event"
        }
        else if(title==="#PC"){
            return "bg-pc-event"
        }
    }

  return (
    <a href={link} arial-label={link} className={` md:min-w-[300px] h-[80px] md:h-[120px] ${checkContents()} rounded-2xl flex flex-col  justify-center border md:border-none text-white`}>
        <div className="flex flex-col justify-center ">
            <div className="self-center w-[90%] flex justify-between">
                <div className="flex flex-col ">
                    <div className="flex items-center gap-2">
                        <h2 className="text-[24px] md:text-[40px] font-[Integral] font-[700]  text-left  text-[#F20D86]">{title}</h2>
                    </div>
                    <h2 className="text-[10px] md:text-[14px] font-[Integral] font-[300]  text-left  text-[#fff]">{description}</h2>
                </div>
                <button className="cursor-pointer">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9328 7.40717L7.2335 1.54526L8.73588 0L17 8.5L8.73588 17L7.2335 15.4547L12.9328 9.59283H0V7.40717H12.9328Z" fill="white"/>
                    </svg>
                </button>
            </div>
        </div>   
    </a>
  )
}

export default EventContainer