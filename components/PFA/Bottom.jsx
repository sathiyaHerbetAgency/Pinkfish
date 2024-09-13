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
            <p className="text-[14px] md:text-[18px]  font-[Sofia] text-center  text-[#fff]">{text}</p>
          </div>
        </div>
    </div>
  )
}

export default Bottom