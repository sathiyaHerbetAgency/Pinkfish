/* eslint-disable */
import React from 'react'

const SlideImage = ({url,urlMob}) => {
  return (
    <div className=" flex flex-col min-w-[100vw] ">
    <div className="self-center ">
      <div className="hidden md:block w-[100%]">
        <img
          src={url}
          className="min-h-[100vh] min-w-[100vw] object-cover"
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