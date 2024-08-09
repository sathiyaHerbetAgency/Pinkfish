/* eslint-disable */
"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import YoutubeEmbed from './../js/Youtube';
const Video = ({id}) => {
  const [toogle,setToogle]=useState('1')
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

const button1=`transition-all text-[16px] md:text-[20px] font-[Sofia] ${toogle==='1'?"bg-[#FF0086] text-[#fff]":'bg-[#DADADA] text-[#111111]' }  w-fit  px-4  rounded-lg`
const button2=`transition-all text-[16px] md:text-[20px] font-[Sofia] ${toogle==='2'?"bg-[#FF0086] text-[#fff]":'bg-[#DADADA] text-[#111111]' }  w-fit  px-4  rounded-lg`

  return (
    <div className="flex  flex-col gap-4">
      <div className="flex self-center gap-3 justiyfy-center">
      <button className={button1} onClick={()=>{setToogle('1')}} type='button'>2024</button>
      <button className={button2} onClick={()=>{setToogle('2')}} type='button'>2023</button>
      </div>
    <div className='self-center'>
        {/* <YouTube videoId="rlJu8PURolU" opts={opts} /> */}
        {toogle==="1"?
        <YoutubeEmbed 
        embedId={id}
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />:
    <YoutubeEmbed 
        embedId={id}
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
  }
        
    </div>
    </div>
  ) 
}

export default Video