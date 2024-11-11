/* eslint-disable */
'use client'
import React, { useEffect,useState,useRef} from 'react';
import "../../styles/live.css"
import "../../styles/contact.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import Gallery2024 from './Component/Gallery2024';
// import ResponsiveGallery from 'react-responsive-gallery';
// import Masonry,{ResponsiveMasonry} from "react-responsive-masonry"
const Gallery = ({select}) => {
  const [toogle,setToogle]=useState('1')
  const galleryRef = useRef();
  useEffect(() => {
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
  }, [select]);
    const imageSets = {
    
      pff_mob: ["gallery_1", "gallery_2", "gallery_3", "gallery_4", "gallery_5", "gallery_6", "gallery_7", "gallery_8", "gallery_9", "gallery_10", "gallery_11", "gallery_12","gallery_13"],
    };

    const count={xs: 1,s: 2,m: 3,l: 3,xl: 3, xxl:3}
    const customMediaStyle = {
      objectFit: 'cover',
      width: '300px',
      maxHeight:'300px'
      
    };
    const images = [
      "https://picsum.photos/200/300?image=1050",
      //...
      "https://picsum.photos/300/300?image=206",
  ]

  const button1=`transition-all text-[16px] md:text-[20px] font-[Sofia] ${toogle==='1'?"bg-[#FF0086] text-[#fff]":'bg-[#DADADA] text-[#111111]' }  w-fit  px-4  rounded-lg`
  const button2=`transition-all text-[16px] md:text-[20px] font-[Sofia] ${toogle==='2'?"bg-[#FF0086] text-[#fff]":'bg-[#DADADA] text-[#111111]' }  w-fit  px-4  rounded-lg`
  
  return (
    <div className=" flex flex-col gap-4" id="my-test-gallery" ref={galleryRef}>
    <div className="flex self-center gap-3 justiyfy-center">
      <button className={button1}onClick={() => {setToogle("1");}}type="button">2023</button>
      <button className={button2}onClick={() => {setToogle("2");}}type="button">2024</button>

    </div>
    {toogle === "1" ? (
      <div
        className="md:columns-3 columns-2 md:max-w-[60vw] gap-[4px] md:gap-[8px]  self-center"
       
      >
       {imageSets["pff_mob"].map((file, index) => (
                
                <a
                  href={`./PFF_1/2023Gallery/FullImage/${file}.webp`}
                  key={"my-test-gallery" + '-' + index}
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img src={`./PFF_1/2023Gallery/${file}.webp`} className="w-[100%] h-[100%] pb-1 md:pb-2" alt={`Arts festival ${index + 1} `} />
                </a>
               
              ))}
      </div>
    ) : (
      <Gallery2024 />
    )}
  </div>
  )
}

export default Gallery


 {/* imagespfc.map((image, index) => (
        <a
        
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={"my-test-gallery" + '-' + index}
          target="_blank"
          rel="noreferrer"
          className="gap-1"
        >
          <img className=" min-w-[50vw] md:min-w-[20vw] pt-1 md:pl-  object-cover" src={image.src} alt="" />
        </a>
      )) */}