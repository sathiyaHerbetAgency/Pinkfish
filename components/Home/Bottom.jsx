/* eslint-disable */
import React from 'react'
import "../../styles/home.css";

const Bottom = () => {
  return (
    <div className="flex flex-col bg-gallery-home py-24 pt-32">
      <div className="bg-black flex flex-col gap-6 self-center md:max-w-[1100px] max-w-[90%]  md:py-24 py-11 rounded-2xl">
        <div className="w-[80%] flex flex-col  md:flex-row md:gap-6 self-center">
          <div className=" md:basis-1/2 self-center  ">
            <div className="flex flex-col gap-6 justify-between">
              <div className="  ">
                <h1 className="world_header_home md:text-[40px] leading-[50px] ">
                  Ride on the rhythm of life
                </h1>
              </div>
              <div className=" items-center self-center gap-6 md:gap-11">
                <p className="world_text mb-5">
                  Live your life loud and vibrant at Pinkfish!
                </p>
                <p className="world_text">
                  Get ready to ignite your spirit, join a tight-knit community,
                  and embrace self-expression in an explosion of music, arts,
                  and dance; all blending into one melting pot of creativity.
                </p>
              </div>
            </div>
          </div>
          <div className=" md:basis-1/2 flex flex-col logo_container md:mt-0  ">
            <h1 className="home_bottom_header_seen text-center mt-11 pt-6  self-center">a curated adventure by</h1>
                <div className="flex  md:flex-row justify-center gap-6 self-center mb-11 mt-6 w-1/2">
                  <img className=" " src='/home_bottom_logo_1.svg'/>
                  <img className="" src='/home_bottom_logo_2.svg'/>
                
                  </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottom