/* eslint-disable */
'use client'
import React from 'react'
import { scrollTop } from './../jsfile';

const Bottom = () => {
  const textBold='Pinkfish Arena is '
  const text="ready to set a new standard for arena shows with an electrifying focus on electronic dance music at iconic local venues, turning them into epicentres of DJ brilliance. Get hyped for a live experience like never before — where bass comes to life."
  const heading="Seize the moment."
  const description=""
  return (
    <div className="bg-bottom-pfa h-[90vh]  py-12   flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-6 w-[70%] self-center">
        <img src="./PFA/pf_arena_logo.png" alt="logo" className="self-center w-[150px]"/>
          <div className="flex flex-col items-center gap-6">
            {/* <h3 className="text-[24px] md:text-[34px]  font-[Integral] text-center  text-[#FF0086]">{heading}</h3> */}
            <p className="text-[14px] md:text-[18px]  font-[Sofia] text-center  text-[#fff]"><span className="font-bold">{textBold}</span> {text}</p>
            <img src="./PFA/Boris/sponcer.png"  className="w-[150px] md:w-[300px] self-center" alt="" />
            <button onClick={()=>{scrollTop()}} className='top_btn font-[400] flex border border-[#fff] p-3 px-6 rounded-lg  self-center mb-11 '>
                back to top 
              <img className='mt-0 md:mt-1 ml-2' src='/uparrow.png' alt="up-arrow icon" />

            </button>
          </div>
        </div>
    </div>
  )
}

export default Bottom