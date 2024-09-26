/* eslint-disable */
'use client'
import React, { useEffect,useState,useRef} from 'react';
import "../../styles/live.css"
import "../../styles/contact.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import NewNavbar from './../../components/NewNavbar';
import Footer from './../../components/Footer';
import Head from './../../components/head';
import Gallery2024 from './../../components/Gallery/Gallery2024';
import PinkfishFestival2023Gallery from './../../components/Gallery/PinkfishFestival2023Gallery';
 const page = () => {
  const description="Celebrate Countdown NYE 2024 with Pinkfish! Enjoy an exciting night filled with entertainment, drinks, and unforgettable memories as we welcome the new year together. "
  const title="Celebrate Countdown NYE 2024 with Pinkfish | Unforgettable Events "
  const heading="text-[16px] md:text-[24px] leading-[19.2px] md:leading-[28.8px] font-[Integral] font-[700] uppercase text-white text-center" 
  const text1="self-center md:self-start text-white text-[16px] leading-[22.66px] font-[Sofia] font-[400]";
  const button="text-white text-[12px] md:text-[16px] leading-[22.66px] md:leading-[22.66px] font-[Sofia] font-[400] p-2 px-4  bg-[#FF0086] rounded"


  const galleryRef = useRef();
const data=[
  {
    title:'Pinkfish Music & Arts Festival 2024',
    link:'',
    section:'',
  },
  {
    title:'Pinkfish Countdown 2023',
    link:'',
    section:'',
  },
  {
    title:'Pinkfish Live: Tyga',
    link:'',
    section:'',
  },
  {
    title:'Pinkfish Music & Arts Festival 2023',
    link:'',
    section:'',
  },
]
useEffect(()=>{
  const galleryElements = galleryRef.current.querySelectorAll('a');
  galleryElements.forEach((element) => {
    const img = new Image();
    img.src = element.href;
    img.onload = () => {
      element.setAttribute('data-pswp-width', img.width);
      element.setAttribute('data-pswp-height', img.height);
    };
  });

  let lightbox = new PhotoSwipeLightbox({
    gallery: '#my-test-gallery',
    children: 'a',
    pswpModule: () => import('photoswipe'),
  });


  lightbox.init();

  return () => {
    lightbox.destroy();
    lightbox = null;
  }; 
},[])



  return (
    <div>
       <Head title={title} description={description} />
        <NewNavbar />
        <div className="flex flex-col" id="my-test-gallery" ref={galleryRef}>
          <div className="self-center flex flex-col gap-3 ">
            <a href="/gallery" className={text1}> &lt; Back to Gallery</a>
            <div className="flex flex-col md:flex-row gap-3 w-full md:justify-between self-center md:self-start">
            <h1 className={heading}>{data[3].title}</h1>
            <a href='#' className="cursour-pointer "> 
                <button className={button} alt="button">View Full Album</button>
              </a>
            </div>
            <PinkfishFestival2023Gallery />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default page;