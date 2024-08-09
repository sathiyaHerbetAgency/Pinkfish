/* eslint-disable */
import React from 'react'

const SlideImage = ({url,urlMob}) => {
  return (
    <div className="container flex flex-col  ">
    <div className="self-center ">
      <div className="hidden md:block w-[100%]">
        <img
          src={url}
          className="min-h-[100vh] min-w-[100vw] max-w-[100vw] "
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