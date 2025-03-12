/* eslint-disable */
'use client'
import React, { useEffect,useRef} from 'react';
import "../../styles/live.css"
import "../../styles/contact.css"
import { getImageFiles } from './../../lib/utils/getImageFiles';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import  Link  from 'next/link';

const page = ({data}) => {
  
  const heading="text-[16px] md:text-[24px] leading-[19.2px] md:leading-[28.8px] font-[Integral] font-[700] uppercase text-white text-center" 
  const text1="self-center md:self-start text-white text-[16px] leading-[22.66px] font-[Sofia] font-[400]";
  const button="text-white text-[12px] md:text-[16px] leading-[22.66px] md:leading-[22.66px] font-[Sofia] font-[400] p-2 px-4  bg-[#FF0086] rounded"

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
  }, [data]);


    const imageSets = {
      pff_mob: ["gallery_1", "gallery_2", "gallery_3", "gallery_4", "gallery_5", "gallery_6", "gallery_7", "gallery_8", "gallery_9", "gallery_10", "gallery_11", "gallery_12","gallery_13"],
    };

    return (
      <div>
        <div className=" flex flex-col self-center ">
         
        </div>
        <div className="md:columns-3 columns-2 md:max-w-[60vw] gap-[4px] md:gap-[8px]  self-center" ref={galleryRef}>
          {[...Array(data.imageCount + 1)].map((_,index) => (   
              <a
              href={`.././GalleryComponent/${data.folderName}/gallery-${index+1}.webp`}
              key={"my-test-gallery" + '-' + index+1}
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <img src={`.././GalleryComponent/${data.folderName}/gallery-${index+1}.webp`} className="w-[100%] h-[100%] pb-1 md:pb-2" alt={`Arts festival ${index + 1} `} />
            </a>
            
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-3  w-full md:w-[60vw] md:max-w-[1600px] md:justify-center self-center ">
              <Link href={data.link}  target='_blank' className="cursour-pointer self-center"> 
                  <button className={button} alt="button">View Full Album</button>
                </Link>
        </div>
      </div>
    )
}

export default page;