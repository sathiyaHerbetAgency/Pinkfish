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

const Slider = () => {
  const BannerRef = useRef(null);

  return (
    <div className="min-w-[100vw]">
      <Swiper
        ref={BannerRef}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideImage url="./PFF_1/pff_slider_1.jpg" urlMob="./PFF_1/pff_slider_mob_1.png" />
        </SwiperSlide>
        <SwiperSlide>
            <SlideImage url="./PFF_1/pff_slider_21.jpg" urlMob="./PFF_1/pff_slider_mob_2.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider