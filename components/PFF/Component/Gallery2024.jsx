/* eslint-disable */
'use client'
import React, { useEffect,useState,useRef} from 'react';
import "../../../styles/live.css"
import "../../../styles/contact.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


// import ResponsiveGallery from 'react-responsive-gallery';
// import Masonry,{ResponsiveMasonry} from "react-responsive-masonry"
const Gallery2024 = ({select}) => {
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
    const imagespff_1 = [
      { src: '/pff/pff-gallery-1.png', alt: 'Image 1', width:"361", height:"196"  },
      { src: '/pff/pff-gallery-2.png', alt: 'Image 2' ,width:"281", height:"196" },
      { src: '/pff/pff-gallery-3.png', alt: 'Image 3', width:"193", height:"340`1" },
      { src: '/pff/pff-gallery-4.png', alt: 'Image 4', width:"362", height:"162" },
      { src: '/pff/pff-gallery-5.png', alt: 'Image 5',width:"412", height:"164" },
      { src: '/pff/pff-gallery-6.png', alt: 'Image 6', width:"449", height:"210" },
      { src: '/pff/pff-gallery-7.png', alt: 'Image 7', width:"389", height:"210" },
      { src: '/pff/pff-gallery-8.png', alt: 'Image 8', width:"310", height:"340" },
      { src: '/pff/pff-gallery-9.png', alt: 'Image 9', width:"536", height:"272" },
      { src: '/pff/pff-gallery-11.png', alt: 'Image 11',width:"231", height:"234" },
      { src: '/pff/pff-gallery-10.png', alt: 'Image 10', width:"310", height:"166" },
      { src: '/pff/pff-gallery-12.png', alt: 'Image 12', width:"291", height:"516" },
      // { src: '/pff/pff-gallery-13.png', alt: 'Image 13', width:"553", height:"271" },

      ];
      const imagespff_2 = [
        { src: '/pff/pff-gallery-1.png', alt: 'Image 1', width:"361", height:"196"  },
        { src: '/pff/pff-gallery-2.png', alt: 'Image 2' ,width:"281", height:"196" },
        { src: '/pff/pff-gallery-3.png', alt: 'Image 3', width:"193", height:"340`1" },
        { src: '/pff/pff-gallery-4.png', alt: 'Image 4', width:"362", height:"162" },
        { src: '/pff/pff-gallery-5.png', alt: 'Image 5',width:"412", height:"164" },
        { src: '/pff/pff-gallery-6.png', alt: 'Image 6', width:"449", height:"210" },
        { src: '/pff/pff-gallery-7.png', alt: 'Image 7', width:"389", height:"210" },
        { src: '/pff/pff-gallery-8.png', alt: 'Image 8', width:"310", height:"340" },
        { src: '/pff/pff-gallery-9.png', alt: 'Image 9', width:"536", height:"272" },
        { src: '/pff/pff-gallery-11.png', alt: 'Image 11',width:"231", height:"234" },
        { src: '/pff/pff-gallery-10.png', alt: 'Image 10', width:"310", height:"166" },
        { src: '/pff/pff-gallery-12.png', alt: 'Image 12', width:"291", height:"516" },
        // { src: '/pff/pff-gallery-13.png', alt: 'Image 13', width:"553", height:"271" },
  
        ];



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
  
      <div className="md:columns-3 columns-2 md:max-w-[60vw] gap-[4px] md:gap-[8px]  self-center" ref={galleryRef}>
     {imageSets["pff_mob"].map((file, index) => (   
              <a
                href={`./PFF_1/2024Gallery/FullImage/${file}.webp`}
                key={"my-test-gallery" + '-' + index}
                target="_blank"
                rel="noreferrer"
                className="object-contain"
              >
                <img src={`./PFF_1/2024Gallery/${file}.png`} className="w-[100%] h-[100%] pb-1 md:pb-2" alt={`${index + 1}`} />
              </a>
             
            ))}
    </div>
  )
}

export default Gallery2024;