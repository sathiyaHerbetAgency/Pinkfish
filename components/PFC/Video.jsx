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

  return (
    <div className="flex  flex-col gap-4">
      <div className='self-center'>
          <YoutubeEmbed 
          embedId={id}
          title="Video Treaser"
          type="PFC"
          />
      </div>
    </div>
  ) 
}

export default Video