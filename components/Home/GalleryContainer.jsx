/* eslint-disable */
'use client'
import React from 'react'
import Image from 'next/image'
import  Link  from 'next/link';
const GalleryContainer = () => {
    const textGallery="md:text-[28px] lg:text-[36px] leading-[46.87px] font-[Sofia] font-[800] text-white md:p-4 lg:p-6"
    const textGallery1= "text-[24px] leading-[32px] font-[Sofia] font-[800] text-white p-5 md:p-3 lg:p-6"
    const overlayContainer="absolute z-1 w-[353.64px] h-[280px] md:w-[220px] lg:w-[291px] md:h-[185px] lg:h-[280px] flex flex-col justify-end"
    const imageSmall="w-[100vw] h-[217px] md:w-[200px] lg:w-[340px] md:h-[185px] lg:h-[276px]"
    const imageSmallLast="w-[353.6px] h-[280px] md:w-[200px] lg:w-[354px] md:h-[185px] lg:h-[276px]"
    const imageSmallTop="w-[353.6px] h-[280px] md:w-[400px] lg:w-[694px] md:h-[220px] lg:h-[337px]"

    const mobData=[
        {
            imgUrl:'./Home/GalleryContainer/Mob/gal-1.png',
            text:'Pinkfish Music & Arts Festival 2024',
            link:'/pff2024-gallery',
        },
        {
            imgUrl:'./Home/GalleryContainer/Mob/gal-2.png',
            text:'Pinkfish Countdown 2023',
            link:'/pfc2023-gallery',
        },
       
    ]

    const mobData1=[
        {
            imgUrl:'./Home/GalleryContainer/Mob/gal-3.png',
            text:'Pinkfish Live: Tyga',
            link:'/pfl-tyga-gallery',
        },
        {
            imgUrl:'./Home/GalleryContainer/Mob/gal-4.png',
            text:'Pinkfish Music & Arts Festival 2023',
            link:'/pff2023-gallery',
        },
    ]

  return (
    <div className="">
    <div className="hidden md:block mt-11">
        <div className="flex justify-center max-w-1176px ">
            <div className="self-center ">
                <Link href="/pfc2023-gallery" className="absolute z-1 w-[482px] h-[613px] flex flex-col justify-end">
                    {/* <p className={textGallery}>Pinkfish Music & Arts Festival 2024</p> */}
                </Link>
                <img src="./Home/GalleryContainer/gal-1.png" className="w-[482px] h-[613px]" alt="pff 2024" /> 
            </div>
            <div className="flex flex-col self-center">
                <Link href="/pff2024-gallery" className="">
                    {/* <div className={overlayContainer}>
                        <p className={textGallery1}>Pinkfish Countdown 2023</p>
                    </div> */}
                    <img className={imageSmallTop} src="./Home/GalleryContainer/gal-2.png" alt="pfc gallery" /> 
                </Link>
                <div className="flex">
                    <Link href="/pff2023-gallery" className="">
                        {/* <div className={overlayContainer}>
                            <p className={textGallery1}>Pinkfish Live: Tyga</p>
                        </div> */}
                        <img className={imageSmall} src="./Home/GalleryContainer/gal-3.png" alt="pfl gallery" />
                    </Link>
                    <Link href="/pfl-tyga-gallery" className="">
                        {/* <div className={overlayContainer}>
                            <p className={textGallery1}>Pinkfish Music & Arts Festival 2023</p>
                        </div> */}
                        <img className={imageSmallLast} src="./Home/GalleryContainer/gal-4.png" alt="pff 2023" />
                    </Link> 
                </div>
            </div>
        </div>
    </div>
    <div className="md:hidden flex flex-col">
        <div className="flex flex-col self-center ">
            {mobData.map((each)=>(
                <Link href={each.link} className="">
                {/* <div className={overlayContainer}>
                    <p className={textGallery1}>{each.text}</p>
                </div> */}
                <img className={imageSmall} src={each.imgUrl} alt="pfc gallery" /> 
                </Link>
            
            ))}
        </div>
        <div className="flex  self-center ">
            {mobData1.map((each)=>(
                <Link href={each.link} className="">
                {/* <div className={overlayContainer}>
                    <p className={textGallery1}>{each.text}</p>
                </div> */}
                <img className={imageSmall} src={each.imgUrl} alt="pfc gallery" /> 
                </Link>
            
            ))}
        </div>
    </div>
    </div>
  )
}

export default GalleryContainer