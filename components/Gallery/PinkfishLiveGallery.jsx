/* eslint-disable */
'use client'
import React, { useEffect, useRef } from 'react';
import "../../styles/live.css"
import "../../styles/contact.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
const PinkfishLiveGallery = ({check}) => {


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
    }, [check]);

  const imageSets = {
    pfl_mob: ["pfl_gallery_1", "pfl_gallery_2", "pfl_gallery_3", "pfl_gallery_4", "pfl_gallery_5", "pfl_gallery_6", "pfl_gallery_7", "pfl_gallery_8", "pfl_gallery_9", "pfl_gallery_10", "pfl_gallery_11", "pfl_gallery_12"],
  };





    const count={xs: 1,s: 2,m: 3,l: 3,xl: 3, xxl:3}
    const customMediaStyle = {
      objectFit: 'cover',
      maxWidth: '300px',
      maxHeight:'300px'
      
    };


  return (
    <div className=" md:columns-3 columns-2 md:max-w-[60vw] gap-[4px] md:gap-[8px]  self-center" id="my-test-gallery" ref={galleryRef}>
     
         
            
            {imageSets["pfl_mob"].map((file, index) => (
                
              <a
                href={`./TygaGallery/FullImage/${file}.webp`}
                key={"my-test-gallery" + '-' + index}
                target="_blank"
                rel="noreferrer"
                className="gap-1"
              >
                <img src={`./TygaGallery/${file}.webp`} className="w-auto h-auto pb-2 -z-10" alt={`${index + 1}`} />
              </a>
             
            ))}
          
      
    
  </div>
  )
}

export default PinkfishLiveGallery;


