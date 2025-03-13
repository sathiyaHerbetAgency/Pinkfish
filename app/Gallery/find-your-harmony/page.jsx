/* eslint-disable */
'use client'
import React, { useEffect,useState,useRef} from 'react';
import "../../../styles/live.css"
import "../../../styles/contact.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import NewNavbar from './../../../components/NewNavbar';
import Footer from './../../../components/Footer';
import Head from './../../../components/head';
import Gallery2024 from './../../../components/Gallery/Gallery2024';
import GalleryComponent from './../../../components/Gallery/GalleryComponent';
import  Link  from 'next/link';
 const page = () => {
  const description="Celebrate Countdown NYE 2024 with Pinkfish! Enjoy an exciting night filled with entertainment, drinks, and unforgettable memories as we welcome the new year together. "
  const title="Celebrate Countdown NYE 2024 with Pinkfish | Unforgettable Events "
  const heading="text-[16px] md:text-[24px] leading-[19.2px] md:leading-[28.8px] font-[Integral] font-[700] uppercase text-white text-center" 
  const text1="self-center md:self-start text-white text-[16px] leading-[22.66px] font-[Sofia] font-[400]";
  const button="text-white text-[12px] md:text-[16px] leading-[22.66px] md:leading-[22.66px] font-[Sofia] font-[400] p-2 px-4  bg-[#FF0086] rounded"

  const galleryRef = useRef();
const data=
  {
    title:'Pinkfish Arena: Find Your Harmony 2024',
    link:'https://www.facebook.com/media/set/?set=a.535651029458874&type=3',
    section:'',
    folderName:'FindYourHarmony',
    imageCount:13,
  };
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
    <div className="flex flex-col">
      <Head title={title} description={description} />
      <NewNavbar /> 
      <div className="self-center flex flex-col gap-3 pb-3 ">
            <a href="/gallery" className={text1}> &lt; Back to Gallery</a>
            <div className="flex flex-col md:flex-row gap-3  w-full md:w-[60vw] md:max-w-[1600px] mb-3 md:justify-between self-center md:self-start">
              <h1 className={heading}>{data.title}</h1>
          </div>
        </div>
      <div className="flex flex-col self-center pb-6" >
        <div className="flex flex-col self-center" id="my-test-gallery" ref={galleryRef}>
          <GalleryComponent data={data} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page;