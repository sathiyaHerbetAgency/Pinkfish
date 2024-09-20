/* eslint-disable */
import React from 'react'
import { artistData } from './LandingPageData';

const BrandsBy = () => {
  return (
    <div className=" md:basis-1/2 flex flex-col logo_container md:mt-0  ">
    <h5 className="home_bottom_header_seen text-center md:mt-6 pt-6  self-center">
      a curated adventure by
    </h5>
    <div className="flex  md:flex-row justify-center items-center gap-6 self-center md:mb-11 mt-6 w-1/2">
      <img
        className="w-[172px] h-[64px] md:w-[200px]"
        alt="Logo Hitmansolutions"
        src={artistData.brandImg1}
      />
      <img
        className="w-[159px] h-[29.11px]"
        alt="Logo Happymoon"
        src={artistData.brandImg2}
      />
    </div>
  </div>
  )
}

export default BrandsBy