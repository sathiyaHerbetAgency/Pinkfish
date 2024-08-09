/* eslint-disable */
import React from 'react'

const SlideImage = ({url,urlMob}) => {
  return (
    <div className=" flex flex-col  ">
    <div className="self-center ">
      <div className="hidden md:block">
        <img
          src={url}
          className=""
          alt="slider"
        />
      </div>
      <div className="md:hidden">
      <img
        src={urlMob}
        className=" object-contain"
        alt="slider"
      />
    </div>
    </div>
  </div>
  )
}

export default SlideImage