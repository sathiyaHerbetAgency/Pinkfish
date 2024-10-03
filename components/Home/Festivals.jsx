/* eslint-disable */
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  Link  from 'next/link';

// Import Swiper styles
import 'swiper/css';
import FestivalContainer from './Componets/FestivalContainer';
const Festivals = () => {3
    const [activeCard, setActiveCard] = useState(null);  

     const slideData=[
        {
            date:"31 December 2024",
            imgUrl:"./Home/Festival/festival-img-1.webp",
            location:"Surf Beach Sunway Lagoon",
            link:"/countdown2024",
            sale:true,
            title:'Pinkfish Countdown 2024'
        },
        {
            date:"1 November 2024",
            imgUrl:"./Home/Festival/festival-img-2.webp",
            location:"Megastar Arena, Kuala Lumpur     ",
            link:"/arena",
            sale:true,
            title:'Pinkfish Arena: Find Your Harmony 2024'
        }, {
            date:"8 June 2024",
            imgUrl:"./Home/Festival/festival-img-3.webp",
            location:"Surf Beach Sunway Lagoon",
            link:"/pff2024-gallery",
            sale:false,
            title:'Pinkfish Music & Arts Festival 2024'
        }, {
            date:"31 December 2023",
            imgUrl:"./Home/Festival/festival-img-4.webp",
            location:"Surf Beach Sunway Lagoon",
            link:"/pfc2023-gallery",
            sale:false,
            title:'Pinkfish Countdown 2023'
        }, {
            date:"9 August 2023",
            imgUrl:"./Home/Festival/festival-img-5.webp",
            location:"ZEPP Kuala Lumpur",
            link:"/pfl-tyga-gallery",
            sale:false,
            title:'Pinkfish LIVE: TYGA '
        },
        , {
            date:"30 April 2023",
            imgUrl:"./Home/Festival/festival-img-6.webp",
            location:"Surf Beach Sunway Lagoon",
            link:"/pff2023-gallery",
            sale:false,
            title:'Pinkfish Music & Arts Festival 2023'
        },
     ]
      const heading="self-center text-[16px] md:text-[24px] leading-[19.2px] md:leading-[28.8px] font-[Integral] font-[700] uppercase text-white" 
  return (
    <div className="pb-11">
        <div className="hidden md:block">
            <div className="flex flex-col min-w-[100vw] overflow-hidden py-11 ">
                <div className="min-w-[1300px]   md:self-start self-center z-10  md:pl-24">

                    <h3 className={heading}>Our Festivals</h3>
                    <div className="hidden md:block pt-4">
                    <div className="flex  z-10 ">
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
              
                {slideData.map((each,index)=>(
                        <div onClick={()=>{setActiveCard(index)}} className="flex flex-col text-white max-w-[370px] h-[464px] self-center mb-3">
                            <FestivalContainer data={each} index={index} active={activeCard} />
                        </div>
                        ))}
            </div>
        </div>

    </div>
  )
}

export default Festivals