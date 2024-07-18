/* eslint-disable */
'use client'

import React from 'react'
// import "../../styles/live.css"
// import "../../styles/contact.css"
// import ResponsiveGallery from 'react-responsive-gallery';
const Gallery = ({select}) => {
    const imagespff = [
        { src: '/pff/pff-gallery-1.png', alt: 'Image 1' },
        { src: '/pff/pff-gallery-2.png', alt: 'Image 2' },
        { src: '/pff/pff-gallery-3.png', alt: 'Image 3' },
        { src: '/pff/pff-gallery-4.png', alt: 'Image 4' },
        { src: '/pff/pff-gallery-5.png', alt: 'Image 5' },
        { src: '/pff/pff-gallery-6.png', alt: 'Image 6' },
        { src: '/pff/pff-gallery-7.png', alt: 'Image 7' },
        { src: '/pff/pff-gallery-8.png', alt: 'Image 8' },
        { src: '/pff/pff-gallery-9.png', alt: 'Image 9' },
        { src: '/pff/pff-gallery-10.png', alt: 'Image 10' },
        { src: '/pff/pff-gallery-11.png', alt: 'Image 11' },
        { src: '/pff/pff-gallery-12.png', alt: 'Image 12' },
        { src: '/pff/pff-gallery-13.png', alt: 'Image 13' },
      ];

      const imagespfc = [
        { src: '/pff/pfc-gallery-1.png', alt: 'Image 1' },
        { src: '/pff/pfc-gallery-2.png', alt: 'Image 2' },
        { src: '/pff/pfc-gallery-3.png', alt: 'Image 3' },
        { src: '/pff/pfc-gallery-4.png', alt: 'Image 4' },
        { src: '/pff/pfc-gallery-5.png', alt: 'Image 5' },
        { src: '/pff/pfc-gallery-6.png', alt: 'Image 6' },
        { src: '/pff/pfc-gallery-7.png', alt: 'Image 7' },
        { src: '/pff/pfc-gallery-8.png', alt: 'Image 8' },
        // { src: '/pff/pfc-gallery-9.png', alt: 'Image 9' },
        { src: '/pff/pfc-gallery-11.png', alt: 'Image 11' },
        { src: '/pff/pfc-gallery-10.png', alt: 'Image 10' },
        { src: '/pff/pfc-gallery-12.png', alt: 'Image 12' },
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
  return (
    <div className=" flex flex-col py-24">
    {/* <div className="columns-3 row-span-6 max-w-[60vw] gap-6 self-center">
      {select==="PFF"?
         imagespff.map((image, index) => (
          <div className='image_11'>
        <img
          key={index}
          className=" pt-2 min-w-[20vw] "
          src={image.src}
          alt={image.alt}
        />
        </div>
      ))
      :
      imagespfc.map((image, index) => (
        <div className='image_11_pff'>
        <img
          key={index}
          className="  min-w-[20vw] "
          src={image.src}
          alt={image.alt}
        />
        </div>
      ))
    }
    </div> */}
     {/* <div className="gallery-grid">
      {imagespfc.map((image,alt) => 
     
      (
        <div key={alt} className="gallery-item-pfc">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div> */}
    <div className="max-w-[80vw] self-center">

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
        </div>
    </div>
  )
}

export default Gallery