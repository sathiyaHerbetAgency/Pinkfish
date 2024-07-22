/* eslint-disable */
'use client'
import React, { useEffect } from 'react';
import "../../styles/live.css"
import "../../styles/contact.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


// import ResponsiveGallery from 'react-responsive-gallery';
// import Masonry,{ResponsiveMasonry} from "react-responsive-masonry"
const Gallery = ({select}) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' +"my-test-gallery",
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
    const imagespff = [
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
    <div className=" flex flex-col  py-24">
      {/* <div className="max-w-[60vw] mx-80 ">
        <div className="">
        {select==="PFF"?
       <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 3, 900: 3}}
            >
                <Masonry>
                    {imagespff.map((image, i) => (
                        <img
                            key={i}
                            src={image.src}
                            style={{maxHeight:'300px',objectFit: 'cover', }}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>:
            <ResponsiveMasonry
            columnsCountBreakPoints={{350: 2, 750: 3, 900: 3}}
        >
            <Masonry>
                {imagespfc.map((image, i) => (
                    <img
                        key={i}
                        src={image.src}
                        style={{maxHeight:'300px',objectFit: 'cover', }}
                        alt=""
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>

}
            </div> */}
            {/* </div> */}
     {/* <div className="md:columns-3 columns-2  md:max-w-[60vw] gap-[6px]  self-center">
      {select==="PFF"?
         imagespff.map((image, index) => (
          <div className=' overflow-x-hidden  w-full '>
        <img
          key={index}
          className="md:m-1 min-w-[20vw] object-cover "
          src={image.src}
          alt={image.alt}
        />
        </div>
      ))
      :
      imagespfc.map((image, index) => (
        <div className=' '>
        <img
          key={index}
          className="md:p-1 min-w-[50vw] pb-1 pt-1 pr-1  md:min-w-[20vw] object-cover "
          src={image.src}
          alt={image.alt}
        />
        </div>
      ))
    }
    </div>  */}
     {/* <div className="gallery-grid">
      {imagespfc.map((image,alt) => 
     
      (
        <div key={alt} className="gallery-item-pfc">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div> */}

    {/* {select==="PFF"?
    <ResponsiveGallery
        useLightBox
        numOfMediaPerRow={count}
        media={imagespff}
        mediaMaxWidth={{xs: 100,s: 100,m: 100,l: 100,xl: 100,xxl:100}}
        // margin={2}
        style={{ margin: '2px auto' }}
        mediaStyle={customMediaStyle}
        />:
        <ResponsiveGallery
        useLightBox
        numOfMediaPerRow={count}
        media={imagespfc}
        mediaMaxWidth={{xs: 100,s: 100,m: 100,l: 100,xl: 100,xxl:100}}
        // margin={2}
        style={{ margin: '2px auto' }}
        mediaStyle={customMediaStyle}
        />
    } */}

{/* <div className="max-w-[80vw] self-center">

<Masonry columnsCount={3} gutter="10px">
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{width: "100%", display: "block"}}
                    />
                ))}
            </Masonry>
        </div> */}
    {/* <div className="max-w-[60vw] gap-[6px]  self-center">
      <div className="flex">
  <img className="width-[300px]" src="/pff/pfc-gallery-1.png" />
  <img src="/pff/pfc-gallery-2.png" />
  <img src="/pff/pfc-gallery-3.png" />
  </div>
    </div> */}




<div className="md:columns-3 columns-2 md:max-w-[60vw] gap-[4px]  gap-[11px]  self-center" id="my-test-gallery">
{select==="PFF"?
  imagespff.map((image, index) => (
    <a
    
      href={image.src}
      data-pswp-width={image.width}
      data-pswp-height={image.height}
      key={"my-test-gallery" + '-' + index}
      target="_blank"
      rel="noreferrer"
      className="gap-1"
    >
      <img className=" min-w-[50vw] md:min-w-[20vw] pt-1 md:pl-1 object-cover" src={image.src} alt="" />
    </a>
  ))
  :
      imagespfc.map((image, index) => (
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
      ))
    }
    </div>



    </div>
  )
}

export default Gallery