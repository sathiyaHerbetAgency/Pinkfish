/* eslint-disable */
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  Link  from 'next/link';

// Import Swiper styles
import 'swiper/css';
import FestivalContainer from './Componets/FestivalContainer';
const Festivals = () => {
     const slideData=[
        {
            date:"31 December 2024",
            imgUrl:"",
            location:"Surf Beach Sunway Lagoon",
            link:"#",
            sale:true,
            title:'Pinkfish Countdown 2024'
        },
        {
            date:"1 November 2024",
            imgUrl:"",
            location:"Megastar Arena, Kuala Lumpur     ",
            link:"#",
            sale:true,
            title:'Pinkfish Arena: Find Your Harmony 2024'
        }, {
            date:"8 June 2024",
            imgUrl:"",
            location:"Surf Beach Sunway Lagoon",
            link:"#",
            sale:false,
            title:'Pinkfish Music & Arts Festival 2024'
        }, {
            date:"31 December 2023",
            imgUrl:"",
            location:"Surf Beach Sunway Lagoon",
            link:"#",
            sale:false,
            title:'Pinkfish Countdown 20234'
        }, {
            date:"9 August 2023",
            imgUrl:"",
            location:"ZEPP Kuala Lumpur",
            link:"#",
            sale:false,
            title:'Pinkfish LIVE: TYGA '
        },
     ]
      const heading="self-center text-[16px] md:text-[24px] leading-[19.2px] md:leading-[28.8px] font-[Integral] font-[700] uppercase text-white" 
  return (
    <div className="py-11">
        <div className="hidden md:block">
            <div className="flex flex-col min-w-[100vw] overflow-hidden py-11">
                <div className="max-w-[1230px]  self-center">

                    <h3 className={heading}>Our Festivals</h3>
                    <div className="hidden md:block pt-4">
                    <div className="flex  bg-white ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={-10}
                        className="mySwiper pt-3 bg-black"
                        >
                        {slideData.map((each)=>(
                        <SwiperSlide className="text-white max-w-[370px] h-[394px]">
                            <FestivalContainer data={each}  />
                        </SwiperSlide>
                        ))}
                    </Swiper>

                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:hidden flex flex-col">
            <div className="flex flex-col gap-3 self-center">
                <h3 className={heading}>Our Festivals</h3>
                {slideData.map((each)=>(
                        <div className="flex flex-col text-white max-w-[370px] h-[394px] self-center">
                            <FestivalContainer data={each}  />
                        </div>
                        ))}
            </div>
        </div>

    </div>
  )
}

export default Festivals