/* eslint-disable */
'use client'
import React, { useEffect,useRef} from 'react';
import "../../styles/live.css"
import "../../styles/contact.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
const PinkfishFestival2023Gallery = ({select}) => {
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



    //   function checkContents(){
    //     if(select==="PFF"){
    //         return imagespff
    //     }else if(select==="PFC"){
    //         return imagespfc
    //     }
    // }

    const imageSets = {
      pff_mob: ["gallery_1", "gallery_2", "gallery_3", "gallery_4", "gallery_5", "gallery_6", "gallery_7", "gallery_8", "gallery_9", "gallery_10", "gallery_11", "gallery_12","gallery_13"],
    };

  return (
  
      <div className="md:columns-3 columns-2 md:max-w-[60vw] gap-[4px] md:gap-[8px]  self-center" ref={galleryRef}>
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
  )
}

export default PinkfishFestival2023Gallery;