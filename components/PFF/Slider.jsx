/* eslint-disable */

'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCallback, useRef } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SlideImage from './Component/SlideImage';

const Slider = ({select}) => {
  const BannerRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (BannerRef.current && BannerRef.current.swiper) {
      BannerRef.current.swiper.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (BannerRef.current && BannerRef.current.swiper) {
      BannerRef.current.swiper.slideNext();
    }
  }, []);

const PFFImages1=["./PFF_1/pff_slider_21.webp","./PFF_1/pff_slider_21.webp", "EventsIndividual"];
const PFFImages2=["../PFF_1/pff_slider_1.webp","./PFF_1/pff_slider_1.webp","EventsIndividual"]
const PFCImages1=["./PFC/Banner/pfc_banner_new.webp","./PFC/Banner/pfc_banner_new_mob.webp","countdown2024"];
const PFCImages2=["./PFC/Banner/pfc_banner_old.png","./PFC/Banner/pfc_banner_mob_1_old.png","#"]
const PFAImages1=["./pfa_new/Slider/pfa_slider_1.webp","./pfa_new/Slider/pfa_slider_1.webp","#"]
const PFPImages1=["./pfp/Slider/pfp_slider_1.webp","./pfp/Slider/pfp_slider_1.webp","#"]
const PFLImages1=["./pfl_new/Slider/pfl_slider_1.webp","./pfl_new/Slider/pfl_slider_1.webp","#"]

function checkContents1(){
  if(select==="PFF"){
      return PFFImages1
  }else if(select==="PFC"){
      return PFCImages1
  }
  else if(select==="PFA"){
    return PFAImages1
}
else if(select==="PFP"){
  return PFPImages1
}
else if(select==="PFL"){
  return [false,false]
}
}

function checkContents2(){
  if(select==="PFF"){
      return PFFImages2
  }else if(select==="PFC"){
      return PFCImages2
  }else if(select==="PFA"){
    return [false,false]
}
else if(select==="PFL"){
  return PFLImages1
 
}
else if(select==="PFP"){
  return [false,false]
 
}
}
  return (
    <div className="flex flex-col ">
        <div className="md:max-w-[900px] max-w-[400px] px-6 md:px-0   self-center flex  py-2 pt-10">
        {checkContents1()[0]&&checkContents2()[0]&&
          <button
            onClick={handlePrev}
            className=" hidden md:block "
          >
            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1325_1317)">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.75 2.875C18.4125 2.875 13.2936 4.99531 9.51947 8.76948C5.7453 12.5436 3.625 17.6625 3.625 23C3.625 28.3375 5.7453 33.4564 9.51947 37.2305C13.2936 41.0047 18.4125 43.125 23.75 43.125C29.0875 43.125 34.2064 41.0047 37.9805 37.2305C41.7547 33.4564 43.875 28.3375 43.875 23C43.875 17.6625 41.7547 12.5436 37.9805 8.76948C34.2064 4.99531 29.0875 2.875 23.75 2.875ZM23.75 46C17.65 46 11.7999 43.5768 7.48654 39.2635C3.1732 34.9501 0.749996 29.1 0.749996 23C0.749996 16.9 3.1732 11.0499 7.48654 6.73654C11.7999 2.42321 17.65 0 23.75 0C29.85 0 35.7001 2.42321 40.0135 6.73654C44.3268 11.0499 46.75 16.9 46.75 23C46.75 29.1 44.3268 34.9501 40.0135 39.2635C35.7001 43.5768 29.85 46 23.75 46ZM33.8125 24.4375C34.1937 24.4375 34.5594 24.2861 34.829 24.0165C35.0985 23.7469 35.25 23.3813 35.25 23C35.25 22.6188 35.0985 22.2531 34.829 21.9835C34.5594 21.714 34.1937 21.5625 33.8125 21.5625L17.1576 21.5625L23.3302 15.3928C23.6002 15.1228 23.7518 14.7567 23.7518 14.375C23.7518 13.9933 23.6002 13.6272 23.3302 13.3573C23.0603 13.0873 22.6942 12.9357 22.3125 12.9357C21.9308 12.9357 21.5647 13.0873 21.2947 13.3573L12.6697 21.9823C12.5359 22.1158 12.4297 22.2744 12.3572 22.4491C12.2847 22.6237 12.2474 22.8109 12.2474 23C12.2474 23.1891 12.2847 23.3763 12.3572 23.5509C12.4297 23.7256 12.5359 23.8842 12.6697 24.0178L21.2947 32.6428C21.5647 32.9127 21.9308 33.0643 22.3125 33.0643C22.6942 33.0643 23.0603 32.9127 23.3302 32.6428C23.6002 32.3728 23.7518 32.0067 23.7518 31.625C23.7518 31.2433 23.6002 30.8772 23.3302 30.6073L17.1576 24.4375L33.8125 24.4375Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_1325_1317">
              <rect width="46" height="46" fill="white" transform="matrix(0 1 -1 0 46.75 0)"/>
              </clipPath>
              </defs>
            </svg>

          </button>
}
          <Swiper
            ref={BannerRef}
            // navigation={true}
            pagination={{ clickable: true }}
            autoplay={true}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
          >
              {checkContents1()[0]&&
            <SwiperSlide>
              <SlideImage url={checkContents1()[0]} urlMob={checkContents1()[1]} year="2024" link={checkContents1()[2]}  />
            </SwiperSlide>
}
            {checkContents2()[0]&&
            <SwiperSlide>
                <SlideImage  url={checkContents2()[0]} urlMob={checkContents2()[1]} year="2023" link={checkContents2()[2]} />
            </SwiperSlide>
          }
              
          </Swiper>
          {checkContents1()[0]&&checkContents2()[0]&&
          <button
            onClick={handleNext}
            className=" hidden md:block"
          >
            <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1325_1320)">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.2495 2.875C28.587 2.875 33.7059 4.99531 37.48 8.76948C41.2542 12.5436 43.3745 17.6625 43.3745 23C43.3745 28.3375 41.2542 33.4564 37.48 37.2305C33.7059 41.0047 28.587 43.125 23.2495 43.125C17.912 43.125 12.7932 41.0047 9.01899 37.2305C5.24482 33.4564 3.12451 28.3375 3.12451 23C3.12451 17.6625 5.24482 12.5436 9.01899 8.76948C12.7932 4.99531 17.912 2.875 23.2495 2.875ZM23.2495 46C29.3495 46 35.1996 43.5768 39.513 39.2635C43.8263 34.9501 46.2495 29.1 46.2495 23C46.2495 16.9 43.8263 11.0499 39.513 6.73655C35.1996 2.42321 29.3495 0 23.2495 0C17.1495 0 11.2994 2.42321 6.98606 6.73655C2.67272 11.0499 0.249512 16.9 0.249512 23C0.249512 29.1 2.67272 34.9501 6.98606 39.2635C11.2994 43.5768 17.1495 46 23.2495 46ZM13.187 24.4375C12.8058 24.4375 12.4401 24.2861 12.1705 24.0165C11.901 23.7469 11.7495 23.3813 11.7495 23C11.7495 22.6188 11.901 22.2531 12.1705 21.9835C12.4401 21.714 12.8058 21.5625 13.187 21.5625L29.8419 21.5625L23.6693 15.3928C23.3993 15.1228 23.2477 14.7567 23.2477 14.375C23.2477 13.9933 23.3993 13.6272 23.6693 13.3573C23.9392 13.0873 24.3053 12.9357 24.687 12.9357C25.0687 12.9357 25.4348 13.0873 25.7048 13.3573L34.3298 21.9823C34.4636 22.1158 34.5698 22.2744 34.6423 22.4491C34.7148 22.6237 34.7521 22.8109 34.7521 23C34.7521 23.1891 34.7148 23.3763 34.6423 23.5509C34.5698 23.7256 34.4636 23.8842 34.3298 24.0178L25.7048 32.6428C25.4348 32.9127 25.0687 33.0643 24.687 33.0643C24.3053 33.0643 23.9392 32.9127 23.6693 32.6428C23.3993 32.3728 23.2477 32.0067 23.2477 31.625C23.2477 31.2433 23.3993 30.8772 23.6693 30.6073L29.8419 24.4375L13.187 24.4375Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_1325_1320">
              <rect width="46" height="46" fill="white" transform="matrix(0 1 1 0 0.249512 0)"/>
              </clipPath>
              </defs>
            </svg>

          </button>
}
        </div>
      </div>
  );
}

export default Slider