/* eslint-disable */
'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules'; 
// Import Swiper styles
import 'swiper/css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  // Import all images from the 'public/images' directory
  const images = importAll(require.context('../../public/PFA/Lineup', false, /\.(png|jpe?g|svg)$/));



const LineUp = () => {
  return (
    <div className="lineup-container ">
    <div className="lineup-header">
      <h1 className="lineup-title">The Lineup</h1>
    </div>
    <div className="swiper-container">
        <Swiper
         centeredSlides={true} // Center the active slide
         loop={false} // Enable looping
         loopedSlides={images.length}
         initialSlide={1}
        //  initialSlide={1} // Start with the center slide active
         spaceBetween={100}
         slidesPerView={3}
        //  mousewheel={true } // Enable mouse wheel control
        //  modules={[Mousewheel]} // Include the Mousewheel module
         breakpoints={{
          // When window width is >= 320px (mobile)
          320: {
            slidesPerView: 2, // Show 3 slides on mobile
            spaceBetween: 30, // Less space between slides on mobile
          },
          // When window width is >= 768px (tablet)
          768: {
            slidesPerView: 3, // Show 4 slides on tablets
            spaceBetween: 100,
          },
          // When window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 4.5, // Show 5 slides on larger screens
            spaceBetween: 50,
          },
        }}
        //  slideToClickedSlide={true} // Allow clicking on a slide to make it active
    >
         {Object.keys(images).map((image, index) => (
              <SwiperSlide key={index} className="swiper-slider ">
              <div className="slide-content mt-12 md:pb-12  ">
          <img src={`./PFA/Lineup/${image}`} alt={image} className="slide-image"/>
          {/*<h1 className="text-[20px] font-[700] tracking-[2px] font-[Integral] text-center  text-[#fff]  uppercase">Billings</h1> */}
        </div>
       </SwiperSlide>
      ))}
    </Swiper>

        </div>
    </div>
  )
}

export default LineUp