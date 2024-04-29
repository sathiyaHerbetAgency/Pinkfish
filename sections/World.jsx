"use client";
import gsap, { Linear } from "gsap";
import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const World = () =>{
  let iRef=useRef(null)
  const sliderRef = useRef(null);
  const sliderRef1 = useRef(null);
  const BannerRef = useRef(null);


  function handlePrev (el) {
    if (!el.current) return;
    el.current.swiper.slidePrev();
  }

  function handleNext(el)  {
    if (!el.current) return;
    el.current.swiper.slideNext();
  }
  // function prevButtonClick() {

  //     gsap.to(".box", 0.1, {
  //       ease: Linear.easeNone,
  //       xPercent: "-=100",
  //       modifiers: {
  //         xPercent: function(x) {
  //            return `${wrap(parseInt(x), -100, 200)}`
  //         }
  //       }
  //     });
  //   }
  function sideScroll(direction,speed,distance,step,id){
        var element =   document.getElementById(id)
       
         var scrollAmount = 0;
          var slideTimer = setInterval(function(){
              if(direction == 'left'){
                // gsap.to('.box',{left:"100%"})
                  element.scrollLeft -= step;
              
              } else {
                  element.scrollLeft += step;
                  // gsap.to('.box',{left:"-100%"})
              }
              scrollAmount += step;
              if(scrollAmount >= distance){
                  window.clearInterval(slideTimer);
              }
          }, speed);
      }
return(
  <div className="flex flex-col max-w-[100vw]  gap-11">
    
    <div className="md:block hidden">
  <section className='hero_banner flex flex-col  text-white'>
<div className="   w-[70%] self-center  ">
  <div className="flex justify-between">

  <div className="w-[50%]  p-11 ">
    <h1 className="world_header  ">Ride on the rhythm of life</h1>
  </div>
  <div className="w-[60%] p-11 items-center self-center  gap-11">
    <p className="world_text mb-5">Live your life loud and vibrant at Pinkfish!
  </p>
<p className="world_text">Get ready to ignite your spirit, join a tight-knit community, and embrace self-expression 
  in an explosion of music, arts, and dance; all blending into one melting pot of creativity.
</p>
  </div>
  </div>
</div>



  </section>
  </div>
  <div className="md:hidden ">
    <div className="hero_banner_mob flex flex-col  gap-4">
      <div className="w-[85%] self-center flex flex-col gap-4">
    <h1 className="world_header mt-11 ">Ride on the rhythm of life</h1>
    <p className="world_text">Live your life loud and vibrant at Pinkfish!
  </p>
<p className="world_text pb-11">Get ready to ignite your spirit, join a tight-knit community, and embrace self-expression 
  in an explosion of music, arts, and dance; all blending into one melting pot of creativity.
</p>
</div>
    </div>
  </div>
  
  <section className="flex flex-col gap-11 w-[100%] md:w-[80%] self-center itmes-center">
    <div className="flex flex-col w-[80%] self-center  mt-11 mb-11">
     
        <div className="flex justify-between">
        <a href='/music&artsfestival'> 
    <img className="md:block hidden " src='/hero_logo_3.png' />
    </a>
    <a   href='/countdown.html'> 
    <img className="md:block hidden" src='/hero_logo_2.png' />
    </a>
    <a href='/Live'> 
    <img className="md:block hidden" src='/hero_logo_1.png' />
  </a>
    </div>
    <div className="flex justify-between">
      <a href="/music&artsfestival">
    <img className="md:hidden" src='/hero_logo_mob_3.png' />
    </a>
    <a   href='/countdown.html'> 
    <img className="md:hidden" src='/hero_logo_mob_2.png' />
    </a>
    <a href="/Live">
    <img className="md:hidden" src='/hero_logo_mob_1.png' />
    </a>
    </div>
    </div>
    {/* <div className="hidden md:block ">
    <div className="flex flex-col     ">
      <div className="w-[90%] self-center">
    <div className="flex gap-4   ">
     
     
     
       <Swiper ref={BannerRef} navigation={false} autoplay={false} modules={[Navigation,Autoplay]}   className="mySwiper">
      
       <SwiperSlide>

        <div className="container flex flex-col  ">
          <div className="self-center w-[90%] ">
          <img className="object-cover self-center " src="/countdown_banner.png" />
          <div className=" text-white flex flex-col justify-center gap-2 md:gap-4 ">
          <a  className="event_tickets2  text-block self-center " href='/countdown.html'>
            <button className=" " alt="button">Get Your Tickets Now
             
              </button>
              </a>
              </div>
          </div>
        </div>
        </SwiperSlide>
       <SwiperSlide>
      <div className="container flex flex-col min-w-[100%]  ">
          <img className="object-cover w-[80%] self-center" src="/countdown_banner_2.png" />
          <div className=" text-white flex flex-col justify-center gap-2 md:gap-4">
          <a  className="event_tickets2 text-block  self-center " target="_blank" href='https://www.ticketmelon.com/fsa/sidharthkl'>
            <button className=" " alt="button">Get Your Tickets Now
             
              </button>
              </a>
          </div>
        </div>
        </SwiperSlide> 
        </Swiper>
  
      </div>
      </div>
    </div>
    </div>
    <div className="md:hidden">
    
      <Swiper  navigation={false} autoplay={true} modules={[Navigation,Autoplay]}   className="mySwiper">
      
       <SwiperSlide>

       <div className="container flex flex-col min-w-[100%]  ">
          <img className="object-none self-center " src="/countdown_banner_mob_1.png" />
          <div className=" text-white flex flex-col justify-center gap-2 md:gap-4 ">
            
          <a  className="event_tickets2 text-block self-center ml-2" href='/countdown.html'> 
            <button  alt="button">Get Your Tickets Now
           
              </button>
              </a>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
       <div className="container flex flex-col min-w-[100%]  ">
          <img className="object-cover w-[100%] self-center" src="/countdown_banner_mob_2.png" />
          <div className=" text-white flex flex-col justify-center gap-2 md:gap-4 ml-2 ">
           <a  className="event_tickets2 text-block self-center "target="_blank" href='https://www.ticketmelon.com/fsa/sidharthkl '> 
            <button  alt="button">Get Your Tickets Now
           
              </button>
              </a>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>
    </div> */}
    <div className="flex flex-col  text-white">
      <div className="flex flex-col md:flex-row self-center  w-[80%]    ">
      <div className="md:w-1/2 flex flex-col gap-3 md:pr-4">
        <div className="flex justify-between ">
          <a href='Gallery' className="home_bottom_header">
          festival oasis
          </a>
         
          <div className="flex gap-2">
          <img className="cursor-pointer" src='/left_arrow_home_bottom.svg' onClick={()=>{handlePrev(sliderRef)}} alt='arrow'/>
          <img className="cursor-pointer" src='/right_arrow_home_bottom.svg' onClick={()=>{handleNext(sliderRef)}} alt='arrow'/>
            
          </div>
        </div>
        {/* <div id='gallery' className="gas flex overflow-x-scroll gap-3 ">
       
    
    
        <img   src='/home_bottom_img_1_1.png' className=" w-[100%] box " alt='gallery'/>
        <img src='/home_bottom_img_1_2.png' className=" w-[100%] box" alt='gallery'/>
        <img  src='/home_bottom_img_1_3.png' className=" w-[100%] block box" alt='gallery'/>
        <img src='/home_bottom_img_1_4.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_5.png' className=" w-[100%]" alt='gallery'/>
        <img  src='/home_bottom_img_1_6.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_7.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_8.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_9.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_10.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_11.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_12.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_13.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_14.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_15.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_16.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_1_17.png' className=" w-[100%]" alt='gallery'/>


        </div> */}
      <Swiper ref={sliderRef} navigation={false} modules={[Navigation]}  className="mySwiper">
        <SwiperSlide><img src="/home_bottom_img_1_1.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_2.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_3.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_4.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_5.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_6.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_7.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_8.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_9.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_10.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_11.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_12.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_13.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_14.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_15.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_16.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_17.png"/></SwiperSlide>
      </Swiper>
     
       
      </div>
      <div className="md:w-1/2 flex flex-col gap-3 md:pl-4">
        <div className="flex justify-between">
          <h1 className="home_bottom_header">
          What’s bubblin’?
          </h1>
          <div className="flex gap-2">
          <img className="cursor-pointer" src='/left_arrow_home_bottom.svg' onClick={()=>{handlePrev(sliderRef1)}} alt='arrow'/>
          <img className="cursor-pointer" src='/right_arrow_home_bottom.svg' onClick={()=>{handleNext(sliderRef1)}} alt='arrow'/>
          </div>
        </div>
        
        {/* <div id='gallery1' className="w-[100%] flex overflow-x-scroll gap-3 ">
        <img src='/home_bottom_img_1.png' className=" w-[100%]" alt='gallery'/>
        <img src='/home_bottom_img_2.png' className="object-none" alt='gallery'/>
        <img src='/home_bottom_img_3.png' className="object-none" alt='gallery'/>
        <img src='/home_bottom_img_4.png' className="object-none" alt='gallery'/>
        <img src='/home_bottom_img_5.png' className="object-none" alt='gallery'/>
        <img src='/home_bottom_img_6.png' className="object-none" alt='gallery'/>


        </div> */}
              <Swiper ref={sliderRef1} navigation={false} modules={[Navigation]} className="mySwiper">
              <SwiperSlide>
          <div className="container flex flex-col min-w-[100%]  ">
              <img src="/home_bottom_img_1.png"/>
          <div className=" text-white flex flex-col  justify-center gap-2 md:gap-4 ">
            <div className="text-block_1 p-2   w-full">
            <h1 className="image_title opacity-1">TYGA Gives Malaysian Fans A Taste On August 9</h1>
            {/* <p className="image_description">description</p> */}
            </div>
         
          </div>
        </div>
        </SwiperSlide>
              <SwiperSlide>
              <div className="container flex flex-col min-w-[100%]  ">
              <img src="/home_bottom_img_2.png"/>
          <div className=" text-white flex flex-col  justify-center gap-2 md:gap-4 ">
            <div className="text-block_1 p-2  w-full">
            <h1 className="image_title opacity-1">“What the Fish?!” Here’s How Pinkfish is Serving M’sia’s HOTTEST Music & Arts Festival in 2023!</h1>
            {/* <p className="image_description">description</p> */}
            </div>
         
          </div>
        </div>
         </SwiperSlide>
        
        <SwiperSlide>
          <div className="container flex flex-col min-w-[100%]  ">
              <img src="/home_bottom_img_3.png"/>
          <div className=" text-white flex flex-col  justify-center gap-2 md:gap-4 ">
            <div className="text-block_1 p-2  w-full">
            <h1 className="image_title opacity-1">Scream “Merdeka” & check out these events happening in KL in August 2023</h1>
            {/* <p className="image_description">description</p> */}
            </div>
         
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex flex-col min-w-[100%]  ">
              <img src="/home_bottom_img_4.png"/>
          <div className=" text-white flex flex-col  justify-center gap-2 md:gap-4 ">
            <div className="text-block_1 p-2  w-full">
            <h1 className="image_title opacity-1">US Rapper Tyga Is Coming To Malaysia For The First Time In August</h1>
            {/* <p className="image_description">description</p> */}
            </div>
         
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex flex-col min-w-[100%]  ">
              <img src="/home_bottom_img_5.png"/>
          <div className=" text-white flex flex-col  justify-center gap-2 md:gap-4 ">
            <div className="text-block_1 p-2  w-full">
            <h1 className="image_title opacity-1">Rapping Sensation Tyga Live in KL This August! Here’s Why You Can’t Miss It</h1>
            {/* <p className="image_description">description</p> */}
            </div>
         
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex flex-col min-w-[100%]  ">
              <img src="/home_bottom_img_6.png"/>
          <div className=" text-white flex flex-col  justify-center gap-2 md:gap-4 ">
            <div className="text-block_1 p-2   w-full">
            <h1 className="image_title opacity-1">Tyga is set to perform in Kuala Lumpur for the first time this August 2023.</h1>
            {/* <p className="image_description">description</p> */}
            </div>
         
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex flex-col min-w-[100%]  ">
              <img src="/home_bottom_img_7.png"/>
          <div className=" text-white flex flex-col  justify-center gap-2 md:gap-4 ">
            <div className="text-block_1 p-2  w-full">
            <h1 className="image_title opacity-1">PINKFISH FESTIVAL: ALL-NEW MUSIC & ARTS FESTIVAL IN M’SIA (30 APR 23)</h1>
            {/* <p className="image_description">description</p> */}
            </div>
         
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex flex-col min-w-[100%]  ">
              <img src="/home_bottom_img_8.png"/>
          <div className=" text-white flex flex-col  justify-center gap-2 md:gap-4 ">
            <div className="text-block_1  p-2 w-full">
            <h1 className="image_title opacity-1">Get Hooked On The Beat: Pinkfish Festival Makes A Splash With DJ Snake And More!</h1>
            {/* <p className="image_description">description</p> */}
            </div>
         
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container flex flex-col min-w-[100%]  ">
              <img src="/home_bottom_img_9.png"/>
          <div className=" text-white flex flex-col  justify-center gap-2 md:gap-4 ">
            <div className="text-block_1  p-2 w-full">
            <h1 className="image_title opacity-1">Pinkfish Festival, Malaysia, April 2023</h1>
            {/* <p className="image_description">description</p> */}
            </div>
         
          </div>
        </div>
        </SwiperSlide>
        </Swiper>
       
      </div>
      
    </div>
    <div className="flex flex-col logo_container md:mt-0 mt-11  ">
    <h1 className="home_bottom_header_seen text-center mt-11 pt-6  self-center">a curated adventure by</h1>
        <div className="flex flex-col md:flex-row justify-center gap-6 self-center mb-11 mt-6 w-1/3">
          <img className="md:w-1/2 " src='/home_bottom_logo_1.svg'/>
          <img className="md:w-1/2" src='/home_bottom_logo_2.svg'/>
         
          </div>

        </div>
    </div>
    {/* <div className="flex flex-col   ">
      <div className="flex justify-center ">
        <div className="w-1/2">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="/home_bottom_img_1_1.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_1.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_1.png"/></SwiperSlide>
      </Swiper>
      </div>
      <div className="w-1/2">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="/home_bottom_img_1_1.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_1.png"/></SwiperSlide>
        <SwiperSlide><img src="/home_bottom_img_1_1.png"/></SwiperSlide>
      </Swiper>
      </div>
      </div>
      

      </div> */}
  </section>
  </div>
);
}
export default World;
