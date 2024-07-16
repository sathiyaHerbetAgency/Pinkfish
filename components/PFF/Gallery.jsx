import React from 'react'
import "../../styles/live.css"

const Gallery = (select) => {
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
        { src: '/pff/pfc-gallery-9.png', alt: 'Image 9' },
        { src: '/pff/pfc-gallery-10.png', alt: 'Image 10' },
        { src: '/pff/pfc-gallery-11.png', alt: 'Image 11' },
        { src: '/pff/pfc-gallery-12.png', alt: 'Image 12' },
      ];



      function checkContents(){
        if(select==="PFF"){
            return imagespff
        }else if(select==="PFC"){
            return imagespfc
        }
    }

  return (
    <div className=" flex flex-col py-24">
    <div className="columns-3 row-span-6 max-w-[60vw] gap-6 self-center">
      {select==="PFF"?
         imagespff.map((image, index) => (
        <img
          key={index}
          className="gallery__item pt-2 min-w-[20vw] "
          src={image.src}
          alt={image.alt}
        />
      ))
      :
      imagespfc.map((image, index) => (
        <img
          key={index}
          className="gallery__item pt-2 min-w-[20vw] "
          src={image.src}
          alt={image.alt}
        />
      ))
    }
    </div>
    </div>
  )
}

export default Gallery