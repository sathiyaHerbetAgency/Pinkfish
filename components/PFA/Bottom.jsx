/* eslint-disable */
'use client'
import React from 'react'
import { scrollTop } from './../jsfile';

const Bottom = () => {
  const text="Reserve your spot for an unforgettable night of trance and harmony."
  const heading="Seize the moment."
  const description=""
  return (
    <div className="bg-bottom-p_f_a  py-12   flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-6 w-[70%] self-center">
        <img src="./PFA/pf_arena_logo.png" alt="logo" className="self-center w-[150px]"/>
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] md:text-[34px]  font-[Integral] text-center  text-[#FF0086]">{heading}</h3>
            <h3 className="text-[14px] md:text-[18px]  font-[Sofia] text-center  text-[#fff]">{text}</h3>
          </div>
         
        </div>
        {/* <div className="  flex flex-col  md:mt-0  ">
            <h3 className="home_bottom_header_seen text-center mt-11 pt-6  self-center">a curated adventure by</h3>
                <div className="flex flex-col md:flex-row justify-center gap-6 self-center mb-11 mt-6 w-1/2">
                  <img className="w-[250px] " src='/home_bottom_logo_1.svg'/>
                  <img className="" src='/home_bottom_logo_2.svg'/>
                
                  </div>
                  <div className='flex justify-center'>
        <button onClick={()=>{scrollTop()}} className='top_btn flex  self-center mt-11 mb-11 '>
      back to top 
     <img className='mt-0 md:mt-1 ml-2' src='/uparrow.png'/>

      </button>
      </div> 
      </div> */}

    </div>
  )
}

export default Bottom