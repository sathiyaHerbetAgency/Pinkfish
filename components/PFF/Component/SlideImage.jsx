/* eslint-disable */
import React from 'react'
import "../../../styles/live.css"

const SlideImage = ({url,urlMob,year,link}) => {
  return (
    <div className=" flex flex-col ">
    <div className="self-center ">

      <div className="hidden md:block">
        <img
          src={url}
          className="w-[900px]"
          alt="slider"
        />
        <div className="text-block_live  text-white flex flex-col gap-2 md:gap-4 ">
            {/* <h1 className="event_text_date2_live md:hidden">9 august 2023</h1>
            <h1 className="event_text2_live md:hidden">Tyga live in kl</h1> */}
           <a href={link}> 
            <button className="banner_tag" alt="button">{year}</button>
              </a>
          </div>
      </div>
      <div className="md:hidden">
      <img
        src={urlMob}
        className=" "
        alt="slider"
      />
      <div className="text-block_live  text-white flex flex-col gap-2 md:gap-4">
            
           <a href={link}> 
            <button className="banner_tag" alt="button">{year}</button>
              </a>
          </div>
    </div>
    </div>
  </div>
  )
}

export default SlideImage