/* eslint-disable */
import React from 'react'

const LeftBanner = () => {
  const header= "text-[28px] md:text-[36px] leading-[32.19px] md:leading-[46.87px] font-[Sofia] font-[800] text-white text-center md:text-left w-[90%] ";
  const text="text-white text-[12px] leading-[16px] md:text-[16px] md:leading-[22.66px] font-[Sofia] font-[400] text-center md:text-left";

  return (
    <div className="w-[100%] h-[300px] md:h-[620px] bg-[#FF0086] flex flex-col justify-center ">
        <div className="md:w-[352px] flex flex-col  gap-6 self-center md:pl-3">
            <h2 className={header}>Lorem ipsum dolor sit amet.</h2>
            <p className={text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit metus, mollis ut lectus non, hendrerit posuere risus. Curabitur et mattis sem, sed tempus nulla. </p>
        </div>    
    </div>
  )
}

export default LeftBanner