/* eslint-disable */
'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules'; 
import 'swiper/css';

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
//   }
  
//   // Import all images from the 'public/images' directory
//   const images = importAll(require.context('../../public/PFA/Lineup', false, /\.(png|jpe?g|svg)$/));



const LineUp = () => {
  return (
    // <div className="lineup-container ">
    // <div className="lineup-header">
    //   <h1 className="lineup-title">The Lineup</h1>
    // </div>
    // <div className="swiper-container">
    //     <Swiper
    //      centeredSlides={true} // Center the active slide
    //      loop={false} // Enable looping
    //      loopedSlides={5}
    //      initialSlide={1}
    //     //  initialSlide={1} // Start with the center slide active
    //      spaceBetween={50}
    //      slidesPerView={3}
    //     //  mousewheel={true } // Enable mouse wheel control
    //     //  modules={[Mousewheel]} // Include the Mousewheel module
    //      breakpoints={{
    //       // When window width is >= 320px (mobile)
    //       320: {
    //         slidesPerView: 2, // Show 3 slides on mobile
    //         spaceBetween: 30, // Less space between slides on mobile
    //       },
    //       // When window width is >= 768px (tablet)
    //       768: {
    //         slidesPerView: 3, // Show 4 slides on tablets
    //         spaceBetween: 100,
    //       },
    //       // When window width is >= 1024px (desktop)
    //       1024: {
    //         slidesPerView: 4.5, // Show 5 slides on larger screens
    //         spaceBetween: 50,
    //       },
    //     }}
    //     //  slideToClickedSlide={true} // Allow clicking on a slide to make it active
    // >
        
    //           <SwiperSlide key="1" className="swiper-slider  ">
    //           <div className="slide-content pt-12 pb-12  ">
    //       <img src='./PFA/Lineup/img_1.png' alt="slide_1" className="slide-image"/>
    //       <h1 className="text-[20px] font-[700] tracking-[2px] font-[Integral] text-center  text-[#fff]  uppercase">Billings</h1>
    //     </div>
    //    </SwiperSlide>
    //    <SwiperSlide key="2" className="swiper-slider slide-group  ">
    //    <div className="flex gap-6   slide-image1">
    //    <SwiperSlide key="2" className=" max-w-[220px]">
    //         <div className="slide-conten  max-w-[220px] pt-12 pb-12 ">
    //           <img src='./PFA/Lineup/img_2.png' alt="slide_2" className="max-w-[220px]" />
    //           <h1 className="text-[20px] font-[700] tracking-[2px] font-[Integral] text-center text-[#fff] uppercase">Billings</h1>
    //         </div>
    //       </SwiperSlide>

    //       <SwiperSlide key="3" className="max-w-[220px]">
    //         <div className="slide-conten max-w-[220px] pt-12 pb-12">
    //           <img src='./PFA/Lineup/img_2.png' alt="slide_3" className="max-w-[220px]"/>
    //           <h1 className="text-[20px] font-[700] tracking-[2px] font-[Integral] text-center text-[#fff] uppercase">Billings</h1>
    //         </div>
    //       </SwiperSlide>
    //       </div>
    //       </SwiperSlide>
    //      <div className="max-w-[180px] "></div>
    //       <SwiperSlide key="1" className="swiper-slider  ">
    //           <div className="slide-content pt-12 pb-12  ">
    //       <img src='./PFA/Lineup/img_4.png' alt="slide_1" className="slide-image"/>
    //       <h1 className="text-[20px] font-[700] tracking-[2px] font-[Integral] text-center  text-[#fff]  uppercase">Billings</h1>
    //     </div>
    //    </SwiperSlide> 
    //     {/*<SwiperSlide key="1" className="swiper-slider ">
    //           <div className="slide-content pt-12 pb-12  ">
    //       <img src='./PFA/Lineup/img_5.png' alt="slide_1" className="slide-image"/>
    //       <h1 className="text-[20px] font-[700] tracking-[2px] font-[Integral] text-center  text-[#fff]  uppercase">Billings</h1>
    //     </div>
    //    </SwiperSlide>
    //    <SwiperSlide key="1" className="swiper-slider ">
    //           <div className="slide-content pt-12 pb-12  ">
    //       <img src='./PFA/Lineup/img_5.png' alt="slide_1" className="slide-image"/>
    //       <h1 className="text-[20px] font-[700] tracking-[2px] font-[Integral] text-center  text-[#fff]  uppercase">Billings</h1>
    //     </div>
    //    </SwiperSlide> */}
    
    // </Swiper>

    //     </div>
    // </div>
<>
<div className="self-center w-[80%] max-w-[1100px] hidden md:block">
    <div className="flex  gap-4 self-center">
      <div className=""> 
      <img src="./PFA/Lineup/img_111.png" classsName="object-contain " alt="img_1"/>
      </div>
      {/* <div className="p-6"> 
      <img src="./PFA/Lineup/tba_lineup.png" classsName="object-contain pt-6 pb-6 pr-6" alt="img_1"/>
      </div> */}
      <div className="flex flex-col ml-3 gap-3"> 
      <img src="./PFA/Lineup/group_lineup.png" alt="img_1"/>
      <img src="./PFA/Lineup/bottom_label.png" alt="img_1"/>
      </div>
      <div className="p-6"> 
      <img src="./PFA/Lineup/tba_lineup.png" classsName="object-contain pt-6 pb-6 pr-6" alt="img_1"/>
      </div>

      </div>
    </div>
    <div className="self-center  md:hidden">
    <div className="flex flex-col  gap-3 self-center">
      
      <div className="flex flex-col gap-3"> 
        <div className=" max-w-[90%] self-center">
          <img src="./PFA/Lineup/group_lineup.png" className="" alt="img_1"/>
        </div>
      
      </div>
      {/* <img src="./PFA/Lineup/bottom_label.png" className="min-w-[100vw]" alt="img_1"/> */}
      <div className="self-center flex  items-center gap-10  pt-3">
      <div className="w-[45%] ml-5"> 
      <img src="./PFA/Lineup/img_11_mob_2.png" classsName="object-  " alt="img_1"/>
      </div>
      <div className=" w-1/2"> 
      <img src="./PFA/Lineup/tba_lineup_mob.png" classsName="object-contain " alt="img_1"/>
      </div>
      </div>
      <img src="./PFA/Lineup/bottom_label.png" className="min-w-[100vw]" alt="img_1"/>
      </div>
    </div>
    </>

  )
}

export default LineUp