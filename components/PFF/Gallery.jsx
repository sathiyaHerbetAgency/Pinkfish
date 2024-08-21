/* eslint-disable */
'use client'
import React, { useEffect,useState,useRef} from 'react';
import "../../styles/live.css"
import "../../styles/contact.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


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
    
      pff_mob: ["gallery_1.png", "gallery_2.png", "gallery_3.png", "gallery_4.png", "gallery_5.png", "gallery_6.png", "gallery_7.png", "gallery_8.png", "gallery_9.png", "gallery_10.png", "gallery_11.png", "gallery_12.png","gallery_13.png"],
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
        className="md:columns-3 columns-2 md:max-w-[60vw] gap-[8px]  self-center"
       
      >
       {imageSets["pff_mob"].map((file, index) => (
                
                <a
                  href={`./PFF_1/2023Gallery/${file}`}
                  key={"my-test-gallery" + '-' + index}
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img src={`./PFF_1/2023Gallery/${file}`} className="w-[100%] h-[100%] pb-1 md:pb-2" alt={`${index + 1}`} />
                </a>
               
              ))}
      </div>
    ) : (
      <div
        className="md:columns-3 columns-2 md:max-w-[60vw] gap-[4px]    self-center"
        id="my-test-gallery"
      >
        {imageSets["pff_mob"].map((file, index) => (
                
                <a
                  href={`./PFF_1/2024Gallery/${file}`}
                  key={"my-test-gallery" + '-' + index}
                  target="_blank"
                  rel="noreferrer"
                  className="gap-1"
                >
                  <img src={`./PFF_1/2024Gallery/${file}`} className="w-[100%] h-[100%] pb-1" alt={`${index + 1}`} />
                </a>
               
              ))}
      </div>
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