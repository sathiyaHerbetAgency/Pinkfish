/* eslint-disable */

'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SliderLineup = () => {
  return (
    <Swiper
      centeredSlides={true}
      loop={false}
      spaceBetween={50}
      slidesPerView={1.5} // Fractional value to allow slide to span more than one space
      breakpoints={{
        320: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 100,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 50,
        },
      }}
    >
      {/* Regular single image slides */}
      <SwiperSlide>
        <div className="flex flex-col gap-4 items-center">
          <img src="./PFA/Lineup/lineup_4.png" className="object-contain self-center" alt="img_1" />
          <h3 className="text-[16px] md:text-[24px] font-[Trim] text-white uppercase text-center self-center font-[700]">chukiess & Whackboi</h3>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col gap-4 items-center">
          <img src="./PFA/Lineup/lineup_4.png" className="object-contain self-center" alt="img_1" />
          <h3 className="text-[16px] md:text-[24px] font-[Trim] text-white uppercase text-center self-center font-[700]">chukiess & Whackboi</h3>
        </div>
      </SwiperSlide>

      {/* Slide that spans two slides */}
      <SwiperSlide className="swiper-slide-double">
        <div className="flex gap-4 items-center justify-center">
          <div className="flex flex-col gap-4 items-center">
            <img src="./PFA/Lineup/lineup_4.png" className="object-contain self-center" alt="img_1" />
            <h3 className="text-[16px] md:text-[24px] font-[Trim] text-white uppercase text-center self-center font-[700]">chukiess & Whackboi</h3>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <img src="./PFA/Lineup/lineup_4.png" className="object-contain self-center" alt="img_1" />
            <h3 className="text-[16px] md:text-[24px] font-[Trim] text-white uppercase text-center self-center font-[700]">chukiess & Whackboi</h3>
          </div>
        </div>
      </SwiperSlide>

      {/* More single image slides */}
      <SwiperSlide>
        <div className="flex flex-col gap-4 items-center">
          <img src="./PFA/Lineup/lineup_4.png" className="object-contain self-center" alt="img_1" />
          <h3 className="text-[16px] md:text-[24px] font-[Trim] text-white uppercase text-center self-center font-[700]">chukiess & Whackboi</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderLineup;
