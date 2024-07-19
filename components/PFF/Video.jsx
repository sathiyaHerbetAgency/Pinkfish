/* eslint-disable */
"use client6"
import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import YoutubeEmbed from './../js/Youtube';
const Video = ({id}) => {
  console.log(id)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="flex justify-center ">
    
        {/* <YouTube videoId="rlJu8PURolU" opts={opts} /> */}
        <YoutubeEmbed 
        embedId={id}
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
    </div>
  ) 
}

export default Video