/* eslint-disable */
'use client'
import React, { useEffect, useRef } from 'react';
import "../../styles/live.css"
import "../../styles/contact.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
const Gallery = ({check}) => {


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
    pf: ["pf_1.png", "pf_2.png", "pf_3.png", "pf_4.png", "pf_5.png", "pf_6.png"],
    pc: ["pc_1.png", "pc_2.png", "pc_3.png", "pc_4.png", "pc_5.png", "pc_6.png"],
    pl: ["pl_1.png", "pl_2.png", "pl_3.png", "pl_4.png", "pl_5.png", "pl_6.png"],
    pfc_mob: ["pfc_gallery_1.png", "pfc_gallery_2.png", "pfc_gallery_3.png", "pfc_gallery_4.png", "pfc_gallery_5.png", "pfc_gallery_6.png", "pfc_gallery_7.png", "pfc_gallery_8.png", "pfc_gallery_9.png", "pfc_gallery_10.png", "pfc_gallery_11.png", "pfc_gallery_12.png"],
    pl_mob: ["pl_mob_1.png", "pl_mob_2.png", "pl_mob_3.png", "pl_mob_4.png", "pl_mob_5.png", "pl_mob_6.png"]
  };





    const count={xs: 1,s: 2,m: 3,l: 3,xl: 3, xxl:3}
    const customMediaStyle = {
      objectFit: 'cover',
      width: '300px',
      maxHeight:'300px'
      
    };


  return (
    <div className=" flex flex-col gap-4" id="my-test-gallery" ref={galleryRef}>
      <div className="md:columns-6 columns-2  gap-[4px]  md:gap-[11px] overflow-hidden self-center">
         
            
            {imageSets["pfc_mob"].map((file, index) => (
                
              <a
                href={`./PFC/Gallery/${file}`}
                key={"my-test-gallery" + '-' + index}
                target="_blank"
                rel="noreferrer"
                className="gap-1"
              >
                <img src={`./PFC/Gallery/${file}`} className="w-[100%] h-[100%] pb-2" alt={`${index + 1}`} />
              </a>
             
            ))}
          
      </div>
    
  </div>
  )
}

export default Gallery;


