/* eslint-disable */
'use client'
import React, { useEffect, useRef } from 'react';
import "../../styles/live.css"
import "../../styles/contact.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
const GalleryMob = ({check}) => {


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
    pfc_mob: ["pfc_gallery_mob_1.png", "pfc_gallery_mob_2.png", "pfc_gallery_mob_3.png", "pfc_gallery_mob_4.png", "pfc_gallery_mob_5.png", "pfc_gallery_mob_6.png", "pfc_gallery_mob_7.png", "pfc_gallery_mob_8.png", "pfc_gallery_mob_9.png", "pfc_gallery_mob_10.png", "pfc_gallery_mob_11.png", "pfc_gallery_mob_12.png"],
    pl_mob: ["pl_mob_1.png", "pl_mob_2.png", "pl_mob_3.png", "pl_mob_4.png", "pl_mob_5.png", "pl_mob_6.png"]
  };


      const imagespfc = [
        { src: '/pff/pfc-gallery-1.png', alt: 'Image 1', width:"361", height:"196"  },
        { src: '/pff/pfc-gallery-2.png', alt: 'Image 2' ,width:"281", height:"196" },
        { src: '/pff/pfc-gallery-3.png', alt: 'Image 3', width:"193", height:"369" },
        { src: '/pff/pfc-gallery-4.png', alt: 'Image 4', width:"362", height:"162" },
        { src: '/pff/pfc-gallery-5.png', alt: 'Image 5',width:"277", height:"280" },
        { src: '/pff/pfc-gallery-6.png', alt: 'Image 6', width:"240", height:"207" },
        { src: '/pff/pfc-gallery-7.png', alt: 'Image 7', width:"311", height:"207" },
        { src: '/pff/pfc-gallery-8.png', alt: 'Image 8', width:"310", height:"340" },
        // { src: '/pff/pfc-gallery-9.png', alt: 'Image 9' },
        { src: '/pff/pfc-gallery-11.png', alt: 'Image 11',width:"290", height:"516" },
        { src: '/pff/pfc-gallery-10.png', alt: 'Image 10', width:"231", height:"234" },
        { src: '/pff/pfc-gallery-12.png', alt: 'Image 12', width:"553", height:"271" },
      ];


      function checkContents(){
        if(select==="PFF"){
            return imagespff
        }else if(select==="PFC"){
            return imagespfc
        }
    }

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


  return (
    <div className=" flex flex-col gap-4 py-24" id="my-test-gallery" ref={galleryRef}>
      <div 
        className="md:columns-3 columns-2 md:max-w-[60vw] gap-[2px]  md:gap-[4px]  self-center"
       
      >
         
            
            {imageSets["pfc_mob"].map((file, index) => (
                
              <a
                href={`./PFC/GalleryMob/${file}`}
                key={"my-test-gallery" + '-' + index}
                target="_blank"
                rel="noreferrer"
                className="gap-1"
              >
                <img src={`./PFC/GalleryMob/${file}`} className="w-[100%] h-[100%] pb-2" alt={`${index + 1}`} />
              </a>
             
            ))}
          
      </div>
    
  </div>
  )
}

export default GalleryMob


