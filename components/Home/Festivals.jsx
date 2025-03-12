/* eslint-disable */
import { useEffect, useRef, useState ,useCallback} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  Link  from 'next/link';
import React from "react";
import { register } from "swiper/element/bundle";
register();
// Import Swiper styles
import 'swiper/css';
import FestivalContainer from './Componets/FestivalContainer';
import { Navigation} from 'swiper/modules';

const Festivals = () => {
    const BannerRef = useRef(null);
    const BannerRef1 = useRef(null);

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


    const handlePrev1 = useCallback(() => {
        if (BannerRef1.current && BannerRef1.current.swiper) {
          BannerRef1.current.swiper.slidePrev();
        }
      }, []);
    
      const handleNext1 = useCallback(() => {
        if (BannerRef1.current && BannerRef1.current.swiper) {
          BannerRef1.current.swiper.slideNext();
        }
        
      }, []);

    const [activeCard, setActiveCard] = useState(null);  

     const slideData=[
        {
            date:"31 December 2024",
            imgUrl:"./Home/Festival/festival-img-1.webp",
            location:"Surf Beach Sunway Lagoon",
            link:"/pfc-countdown-nye-2024",
            sale:false,
            title:'Pinkfish Countdown 2024'
        },
        {
            date:"21 December 2024",
            imgUrl:"./Home/Festival/festival-img-7.webp",
            location:"Over & Above KL",
            link:"/pinkclub",
            sale:false,
            title:'Pinkclub: Hannah Laing'
        },
        {
            date:"1 November 2024",
            imgUrl:"./Home/Festival/festival-img-2.webp",
            location:"Megastar Arena, Kuala Lumpur     ",
            link:"/arena",
            sale:false,
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
      const heading="self-center text-[16px] md:text-[24px] leading-[19.2px] md:leading-[28.8px] tracking-[1px] font-[Integral] font-[700] uppercase text-white" 
  return (
    <div className="pb-11">
        <div className="hidden md:block">
            <div className="flex flex-col min-w-[100%] overflow-hidden py-11 ">
                <div className="  w-[100%] self-center z-10 pl-24">
                    <div className="">
                        <h3 className={heading}>Making Memories</h3>
                    </div>
                      <div className="  flex flex-col justify-end md:justify-center items-center justify-items-center h-[420px]   absolute  ">
                            <div className="flex justify-between w-[88vw]">
                                    <button onClick={handlePrev} className=" bg-[#000000A0] rounded-[100%] w-[80px] h-[80px] flex justify-center items-center  z-[2] ml-10 md:-ml-8">
                                        <img src="./Home/Festival/Icons/left-arrow.png" className="w-[64px]" alt="arrow" />
                                    </button>
                                    <button onClick={handleNext} className=" bg-[#000000A0] rounded-[100%] w-[80px] h-[80px] flex justify-center items-center  z-[2] ">
                                        <img src="./Home/Festival/Icons/right-arrow.png" className="w-[64px]" alt="arrow" />
                                    </button>
                                </div> 
                        </div>
                    <div className="hidden md:block pt-4">
                    <div className="">
                    {/* <Slider {...settings} className="z-20">
                        {slideData.map((each)=>(
                        
                            <FestivalContainer data={each}  />
                       
                        ))}
                      
                      


                    </Slider> */}
                     <Swiper
                     ref={BannerRef}
                        slidesPerView={3.5}
                        spaceBetween={-10}
                        // centeredSlides={true}
                        initialSlide={0}
                        // watchOverflow={true}
                        className="mySwiper pt-3 bg-black w-[100%]"
                        >
                        {slideData.map((each,index)=>(
                        <SwiperSlide className={`${index===0&&"ml-20"}text-white max-w-[370px] h-[394px]`}>
                            <FestivalContainer data={each} index={index} />
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
                <h3 className={heading}>Making Memories</h3>
                <div className="  flex flex-col justify-center items-center justify-items-center h-[350px] min-w-[100%]   absolute  ">
                            <div className="flex justify-between self-center w-[90vw]">
                                    <button onClick={handlePrev1} className=" bg-[#000000A0] rounded-[100%] w-[40px] h-[40px] flex justify-center items-center  z-[2] ">
                                        <img src="./Home/Festival/Icons/left-arrow.png" className="w-[34px]" alt="arrow" />
                                    </button>
                                    <button onClick={handleNext1} className=" bg-[#000000A0] rounded-[100%] w-[40px] h-[40px] flex justify-center items-center  z-[2] ">
                                        <img src="./Home/Festival/Icons/right-arrow.png" className="w-[34px]" alt="arrow" />
                                    </button>
                                </div> 
                        </div>
                <Swiper
                     ref={BannerRef1}
                        slidesPerView={1.64}
                        centeredSlides={true}
                        spaceBetween={10}
                        className="mySwiper pt-3 bg-black max-w-[100%] "
                        >
                {slideData.map((each,index)=>(
                        <SwiperSlide onClick={()=>{setActiveCard(index)}} className="flex flex-col  text-white max-w-[60vw] h-[300px] justify-items-center self-center mb-3">
                            <FestivalContainer data={each} index={index} active={activeCard} />
                        </SwiperSlide>
                        
                        ))}
                        </Swiper>
            </div>
            
        </div>
    </div>
  )
}

export default Festivals