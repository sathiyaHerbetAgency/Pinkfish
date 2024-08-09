/* eslint-disable */
import React from 'react'

const SlideImage = ({url}) => {
  return (
    <div className="container flex flex-col  ">
    <div className="self-center ">
      <img
        src={url}
        className="min-h-[100vh] min-w-[100vw]"
        alt="slider"
      />
    </div>
  </div>
  )
}

export default SlideImage