/* eslint-disable */

import React from 'react'

const BookingLabel = () => {
  return (
    <div className="min-w-[70vw] flex flex-col gap-6">
      <div className="self-center">
        <img src="./PFA/Layout/Sofa.png" className="hidden md:block  object-none" alt="lounge" />
        <img src="./PFA/Layout/Sofa_mob.png" className="md:hidden object-none" alt="lounge" />
      </div>
        <div className="self-center flex flex-col md:flex-row justify-center md:items-center md:gap-11  min-w-[80%]">
            <div className="flex flex-col">
              <h1 className="text-[30px] md:text-[48px] font-[Babas] font-[300] text-center md:text-left  text-[#fff]">Book Lava Lounge:</h1>
              <h1 className="text-[30px] md:text-[48px] font-[Babas] font-[300] text-center md:text-left  text-[#fff]">The VVIP Experience Now</h1>
            </div>
            <div className="flex flex-col md:justify-center">
              <h1 className="text-[16px] md:text-[20px] font-[Babas] font-[300]   text-center md:text-left  text-[#fff]">email: info@pinkfishfestival.com</h1>
              <h1 className="text-[16px] md:text-[20px] font-[Babas] font-[300]   text-center md:text-left text-[#fff]">contact: +6012-2655783</h1>
              <button className="text-[16px] md:text-[20px] font-[Babas] font-[300] bg-[#FF0086] self-center text-[#fff] w-fit rounded px-6 py-1" type='button'>contact us</button>
            </div>
        </div>

    </div>
  )
}

export default BookingLabel