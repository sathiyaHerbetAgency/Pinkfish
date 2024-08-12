/* eslint-disable */

import React from 'react'

const BookingLabel = () => {
  return (
    <div className="min-w-[70vw] flex flex-col gap-6">
      <div className="self-center flex justify-center">
        <img src="./PFA/Layout/Sofa.png" className="hidden md:block  object-contain w-[60%] max-w-[1500px]" alt="lounge" />
        <img src="./PFA/Layout/Sofa_mob.png" className="md:hidden object-contain px-8" alt="lounge" />
      </div>
        <div className="self-center flex flex-col md:flex-row justify-center md:items-center md:gap-11 gap-6 min-w-[80%]">
            <div className="flex flex-col gap-0">
              <h1 className="text-[30px] md:text-[48px] leading-[32px] md:leading-[50px] font-[Babas] font-[300] text-center md:text-left  text-[#fff]">Book VVIP Sofa:</h1>
              <h1 className="text-[30px] md:text-[48px] leading-[32px] md:leading-[50px]  font-[Babas] font-[300] text-center md:text-left  text-[#fff]">The VVIP Experience Now</h1>
            </div>
            <div className="flex flex-col md:justify-start gap-3">
              <h1 className="text-[16px]  md:text-[20px] leading-[16px] md:leading-[20px] font-[Babas] font-[300]   text-center md:text-left  text-[#fff]">email: info@pinkfishfestival.com</h1>
              <h1 className="text-[16px] md:text-[20px]  leading-[16px] md:leading-[20px] font-[Babas] font-[300]   text-center md:text-left text-[#fff]">contact: +6012-2655783</h1>
              <a href="./PFA/PDF/PFA_PDF.pdf" download className="text-[16px] md:text-[20px] font-[Babas] font-[300] bg-[#FF0086] self-center md:self-start text-[#fff] w-fit rounded px-6 py-1" type='button'>More Info</a>
            </div>
        </div>

    </div>
  )
}

export default BookingLabel