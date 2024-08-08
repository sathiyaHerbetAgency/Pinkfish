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
    }

  return (
    <div className={` md:min-w-[300px] h-[80px] md:h-[120px] ${checkContents()} rounded-2xl flex flex-col  justify-center text-white`}>
        <div className="flex flex-col justify-center ">
            <div className="self-center w-[90%] flex justify-between">
                <div className="flex flex-col ">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[32px] md:text-[40px] font-[Integral] font-[700]  text-left  text-[#F20D86]">{title}</h1>
                        {title==="#PFA"&&  
                            <button type='button' className='uppercase text-[8px] md:text-[10px] font-[Sofia] font-[100]  h-fit text-center w-fit px-1 py-1 rounded-2xl  text-[#fff]  bg-[#FF0086]'> Coming Soon</button>
                        }
                    </div>
                    <h1 className="text-[12px] md:text-[14px] font-[Integral] font-[300]  text-left  text-[#fff]">{description}</h1>
                </div>
                <a className="cursor-pointer">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9328 7.40717L7.2335 1.54526L8.73588 0L17 8.5L8.73588 17L7.2335 15.4547L12.9328 9.59283H0V7.40717H12.9328Z" fill="white"/>
                    </svg>
                </a>
            </div>
        </div>   
    </div>
  )
}

export default EventContainer