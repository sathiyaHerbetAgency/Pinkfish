/* eslint-disable */

import React from 'react'
const PFC={
    first_heading:"Catch the news before it drops",
    text:"Hop on the waitlist to get first dibs on news, tickets, and exclusive updates for the upcoming event.",
    button_text:'Join the waitlist',
     link:"https://forms.gle/UHnTfnZcNNfkXtk37"
}
const News = () => {
  return (
    <div className="banner-container-pfc md:min-h-screen min-h-[50vh] flex flex-col justify-start gap-6 items-center">
        <div className="md:w-[30vw] w-[85vw] flex flex-col gap-6 pt-24 md:pt-11">
            <h3 className="text-[#fff] font-bold  font-[Integral] text-[24px] md:text-[34px] leading-[30px] text-center uppercase'">{PFC.first_heading}</h3>
            <p className="text-[#fff] world_text  text-center">{PFC.text}</p>
          <button type='button' className='uppercase text-white p-3 px-4 self-center bg-[#FF0086] rounded-md font-[SofiaMedium] text-[16px] md:text-[18px] w-fit'> <a href={PFC.link}  >{PFC.button_text}</a></button>
        </div>
    </div>
  )
}

export default News