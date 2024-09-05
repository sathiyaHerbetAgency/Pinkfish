
'use client'
/* eslint-disable */
import Link from 'next/link';
import '../styles/home.css'

import gsap from 'gsap';
import { Footer, Navbar } from '../components';
import { useEffect, useRef, useState } from 'react';
import PartyBanner from './PartyBanner';
import VideoPlayer from "react-background-video-player";
const Hero = () => {
  let firstRef=useRef(null)
  let secondRef=useRef(null)
  let thirdRef=useRef(null)
  let fourRef=useRef(null)
  let fiveRef=useRef(null)
  let sixRef=useRef(null)
  let sevenRef=useRef(null)
  const [moveDistance, setMoveDistance]=useState(0)
useEffect(()=>{
firstRef.play()
},[])


  const throttled = (delay, fn) => {
    let lastCall = 0;
    return function (...args) {
      const now = (new Date).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  };
  
  
  


  
  const mouseMoveHandler2 = (e) => {
    const movableElements =   document.querySelectorAll('.movable');
  
    movableElements.forEach(
      (movableElement) => {
        const  shiftValue = movableElement.getAttribute('data-value');
        const moveX = (e.clientX * (shiftValue)) / 250;
        const moveY = (e.clientY * (shiftValue)) / 250;
        
        
        gsap.to(movableElement, {x: moveX, y: moveY, duration: 1})
  
      }
    );
  };
  
  const tHandler = throttled(200, mouseMoveHandler2);









  function backTo(a){
    // gsap.to(a, {
    //   x: 0,
    //   y: 0,
    //   duration:2,
    // });
    // gsap.utils.toArray(".movable element").forEach(layer => {
     
    //   gsap.to(layer, {
    //     x: 0,
    //     y: 0,
    //   }, 0);
    // });
  };
  function mouseMoveFunc(){

  }
  function mouseMoveFuncs(e,a,c) {
  //   console.log(e.pageX)
  //   let oldx=0

  //    {
  //     const depth = 10;
  //     const moveX = (e.pageX  / 2) / depth;
  //     const moveY = (e.pageY  / 2) / depth;
      
  //     if (e.pageX < c) {
  //       console.log("left")
      
  //  } else if (e.pageX > oldx) {
  //     console.log("right")
  //  }
  //     gsap.to(a, {
  //       x: 30,
  //       y: -50,
  //       direction:"right",
  //       // onComplete:backTo
  //       type:'elastic',
      
  //     });
  //   };
  // console.log(e)
  // const tl = gsap.timeline({ease: "slow", duration: 1})
  // gsap.utils.toArray(".movable element").forEach(layer => {
  //   const depth = layer.dataset.depth;
  //   const moveX = ((e.pageX)-(window.innerWidth/2));
  //   const moveY = ((e.pageY)-(window.innerHeight/2));
  //   tl.to(layer, {
  //     x: moveX/depth,
  //     y: moveY/depth
  //   }, 0);
  // });
  }
  return(
<div className=''>
  <div className='hidden md:block'>
  <section className="hero_container flex flex-col justify-center min-h-screen overflow-hidden "  >
    {/* <Navbar selectItem='home' /> */}
    
    {/* <div class="bg-video-wrap">
    <video src="/bg_video.mp4" loop muted autoplay>
    </video>
    <div class="overlay">
    </div>
    <h1>Fullscreen video background
    </h1>
  </div> */}
      {/* <div className='flex flex-col md:flex-row items-center md:justify-center md: p-4 md:w-[90%] ' onMouseMove={(e)=>tHandler(e)}> */}
    
      <video src="/bg_video_1.mp4" ref={(el)=>firstRef=el} className='max-h-[100vh]  object-cover' id='videos' autoPlay loop playsInline muted ></video>
    
          <div className='flex flex-col justify-center h-full absolute self-center gap-6 mb-24'>
        <img className=' w-2/3  self-center '  data-value="-30"    src='/main_logo.png'/>
        
       <h2 className='hero_text_heading self-center'>more than just a festival</h2>
       {/* <button className='hero_button border border-white w-fit self-center p-1 rounded text-white pl-2 pr-2'>Learn More</button> */}
        {/* <div className=''>
        <div className='movable element svg_hero svg_1' data-value="-10"  >
        <img   className='' src="/triangle_home.svg" />
        </div>
        <div className='movable  element svg_hero svg_2' data-value="-10">

        <img  className='' src="/star_right_home.svg" />
        </div>
        <div className='movable element svg_hero svg_3' data-value="-40" >
        <img className='' src="/sparkle_right_home.svg" />
        </div>
        <div className='movable element svg_hero svg_4' data-value="-40" >
        <img  className='' src="/sparkle_left_home.svg" />
        </div>
        <div className='movable element svg_hero svg_5' data-value="23" >
        <img  className=' ' src="/wave_home.svg" />
        </div>
        <div className='movable element svg_hero svg_6' data-value="40">
        <img  className='' src="/star_left_home.svg" />
        </div>
        <div className='movable element svg_hero svg_7' data-value="-10" >
        <img  className='' src="/hi_home.svg" />
        </div>
        </div> */}
      

       
      
   
  
    </div>
    {/* <div className='bg-[#FF0086] flex flex-col  '>
                <PartyBanner  />
                <div className='mt-11 mb-0  flex self-center gap-6'  href="/Events-Individual">
                  <img src='/fb_icon.svg'/>
                  <img src='/yt_icon.svg'/>
                  <img src='/ig_icon.svg'/>
                  <img src='/tt_icon.svg'/>
                </div>
                <Footer />
              </div>     */}

                {/* <div className='flex items-center text-white '>
<Link href='/' className='w-1/2 bg-[#F33288] text_change text-center p-3 cursor-pointer'>
Pinkfish Music & Art Festival 
</Link>
 
<a href='https://main--idyllic-llama-7efc38.netlify.app/' target='_blank' className='w-1/2  text-center text_change bg-white bg-opacity-25 p-3 cursor-pointer' >
Pinkfish Live 
</a>

    </div> */}

  </section>
  </div>
  <div className=' md:hidden mb-11'>
  <section className="hero_continer flex flex-col justify-center  overflow-hidden "  >

      <video src="/bg_video_1.mp4" ref={(el)=>firstRef=el} className='  h-[100%]' id='videos' autoPlay loop playsInline muted ></video>
    
          <div className='flex flex-col justify-center h-full absolute self-center gap-3 md:mb-3 mb-24  mt-24 '>
        <img className=' w-3/5  self-center '  data-value="-30"    src='/main_logo.png'/>
        
       <h2 className='hero_text_heading self-center'>more than just a festival</h2>
       {/* <button className='hero_button border border-white w-fit self-center p-1 rounded text-white pl-2 pr-2'>Learn More</button> */}
</div>
  </section>
  </div>
  </div>
);
  }
export default Hero;
