/* eslint-disable */
import React from 'react'

const Contact = () => {
  return (
    <div className="self-center flex flex-col md:flex-row w-[80%] max-w-[1100px] md:gap-16 gap-6">
        <div className="basis-2/5 flex md:justify-end">
            <div className="text-[14px] md:text-[18px] w-[70%] font-[Integral] text-left  text-[#fff] ">
              <h1 className="text-[#FF0086]">Don’t miss out—</h1> 
              <h1>Subscribe now for the latest Pinkfish updates. </h1></div>
        </div>
        <div className="basis3/5 flex flex-col gap-3 md:gap-2 ">
            <h1 className="text-[14px] md:text-[14px]  font-[Sofia] text-left  text-[#fff]">Receive exclusive offers and updates to stay in the festival loop.</h1>
            <div className="flex flex-col md:flex-row gap-3 md:gap-2 ">
                <input type="text" className="text-[#FF0086] placeholder-[#FF0086] text-[Sofia] bg-transparent rounded-2xl text-[16px] min-w-[300px]" placeholder="Enter your email"/>
                <button className="text-[16px] font-[Sofia]  bg-[#FF0086] text-[#fff] w-fit  px-4  rounded-lg" type='button'>SIGN UP</button>
            </div>    
        </div>
    </div>
  )
}

export default Contact