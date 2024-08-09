/* eslint-disable */

import React from 'react'
import "../../styles/live.css"

const Banner1 = () => {
  return (
    <div className="flex flex-col pt-16 py-6">
       
        <div className="self-center">
        
          <div className="hidden md:block">
          <div className="text-block_liv relative top-[50px] pr-4 text-white flex flex-col gap-2 md:gap-4">
              <a className="self-end" > 
                <button className="banner_tag" alt="button">2023</button>
              </a>
          </div>
            <img src="./PFC/Banner/pfc_banner.png" alt="banner" className="" />
            
            </div>
            <div className="md:hidden">
              <img src="./PFC/Banner/pfc_banner_mob_1.png" alt="banner" className="max-w-[90vw] " />
              <div className="text-block_live  text-white flex flex-col gap-2 md:gap-4">
              <a > 
                <button className="banner_tag" alt="button">2023</button>
              </a>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Banner1;
