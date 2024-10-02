/* eslint-disable */
'use client'
import React from 'react'
import Image from 'next/image'
import  Link  from 'next/link';
const GalleryContainer = () => {
    const textGallery="md:text-[28px] lg:text-[36px] leading-[46.87px] font-[Integral] font-[800] text-white md:p-4 lg:p-6 text-center"
    const textGallery1= "text-[16px] md:text-[24px] leading-[19.2px] md:leading-[32px] font-[Integral] font-[800] text-white p-5 md:p-3 lg:p-6 text-center w-[247px] self-center md:w-auto";
    const textGallery2= "text-[16px] md:text-[24px] leading-[19.2px] md:leading-[32px] font-[Integral] font-[800] text-white p-5 md:p-3 lg:p-6 text-center  w-[244px] self-center"
    const textGallery1Bottom= "text-[16px] md:text-[24px] leading-[19.2px] md:leading-[32px] font-[Integral] font-[800] text-white p-5 md:p-3 lg:p-6 text-center self-center w-[90%] md:w-auto";
    const overlayContainer=" absolute z-1 w-[100vw] h-[217px] md:w-[220px] lg:w-[291px] md:h-[185px] lg:h-[337px] flex flex-col justify-center self-center"
    const overlayContainerbottom=" absolute z-1 w-[48%] h-[177px] md:w-[200px] lg:w-[340px] md:h-[185px] lg:h-[276px] flex flex-col justify-center "
    const overlayContainerbottomLast=" absolute z-1 w-[52%] h-[177px] md:w-[200px] lg:w-[354px] md:h-[185px] lg:h-[276px] flex flex-col justify-center "

    const imageSmall="w-[100vw] h-[217px] md:w-[200px] lg:w-[340px] md:h-[185px] lg:h-[276px]"
    const imageSmallLast="w-full h-[177px] md:w-[200px] lg:w-[354px] md:h-[185px] lg:h-[276px]"
    const imageSmallTop="w-full h-[177px] md:w-[400px] lg:w-[694px] md:h-[220px] lg:h-[337px]"

    const mobData=[
        {
            imgUrl:'./Home/GalleryContainer/Mob/gal-1.webp',
            text:'Pinkfish Music & Arts Festival 2024',
            link:'/pff2024-gallery',
        },
        {
            imgUrl:'./Home/GalleryContainer/Mob/gal-2.webp',
            text:'Pinkfish Countdown 2023',
            link:'/pfc2023-gallery',
        },
       
    ]

    const mobData1=[
        {
            imgUrl:'./Home/GalleryContainer/Mob/gal-3.webp',
            text:' Pinkfish Music & Arts Festival 2023',
            link:'/pfl-tyga-gallery',
        },
        {
            imgUrl:'./Home/GalleryContainer/Mob/gal-4.webp',
            text:'Pinkfish Live: Tyga',
            link:'/pff2023-gallery',
        },
    ]

  return (
    <div className="">
    <div className="hidden md:block ">
        <div className=" flex justify-center">
           <div className="flex flex-col max-w-1176px"> 
                <h2 className="text-[28px] md:text-[32px] leading-[32px] md:leading-[36px] self-start font-[700] font-[Integral] text-left drop-shadow-2xl text- text-[#fff] py-4 pb-6 uppercase">Gallery</h2>
            </div>
        </div>
        <div className="flex justify-center max-w-1176px ">
        {/* <h2 className="text-[40px] font-[700] font-[Integral] text-left drop-shadow-2xl  text-[#000] self-center uppercase">Gallery</h2> */}

            <div className="self-center ">
                <Link href="/pfc2023-gallery" className="absolute z-1 w-[482px] h-[613px] flex flex-col justify-center">
                    <p className={textGallery}>Pinkfish Countdown 2023</p>
                </Link>
                <img src="./Home/GalleryContainer/gal-1.webp" className="w-[482px] h-[613px]" alt="pff 2024" /> 
            </div>
            <div className="flex flex-col self-center">
                <div className="flex flex-col">
                    <Link href="/pff2024-gallery" className={overlayContainer}>
                            <p className={textGallery1}>Pinkfish Music & Arts Festival 2024</p>
                    </Link>
                    <img className={imageSmallTop} src="./Home/GalleryContainer/gal-2.webp" alt="pfc gallery" /> 
                </div>

                <div className="flex">
                    <div className="flex flex-col">
                        <Link href="/pff2023-gallery" className={overlayContainerbottom}>
                                <p className={textGallery2}>Pinkfish Music & Arts Festival 2023</p>
                        </Link>
                        <img className={imageSmall} src="./Home/GalleryContainer/gal-3.webp" alt="pfl gallery" />
                    </div> 
                    <div className='flex flex-col'>
                    <Link href="/pfl-tyga-gallery"className={overlayContainerbottom}>
                            <p className={textGallery2}>Pinkfish Live: Tyga </p>
                    </Link> 
                    <img className={imageSmallLast} src="./Home/GalleryContainer/gal-4.webp" alt="pff 2023" />

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="md:hidden flex flex-col">
    <div className="flex flex-col  max-w-1176px"> 
                <h2 className="text-[24px] md:text-[32px] leading-[28px] md:leading-[36px] self-center font-[700] font-[Integral] text-left drop-shadow-2xl text- text-[#fff] py-4 pb-6 uppercase">Gallery</h2>
            </div>
        <div className="flex flex-col self-center ">
            {mobData.map((each)=>(
                <div className="">
                    <Link href={each.link} className={overlayContainer}>
                        <p className={textGallery1}>{each.text}</p>
                    </Link>
                    <img className={imageSmall} src={each.imgUrl} alt="pfc gallery" /> 
                </div>
            
            ))}
        </div>
        <div className="flex  self-center ">
           
                 <div className="">
                 <Link href={mobData1[0].link} className={overlayContainerbottom}>
                     <p className={textGallery1Bottom}>{mobData1[0].text}</p>
                 </Link>
                 <img className={imageSmallLast} src={mobData1[0].imgUrl} alt="pfl gallery" /> 
             </div>
             <div className="">
                 <Link href={mobData1[1].link} className={overlayContainerbottomLast}>
                     <p className={textGallery1Bottom}>{mobData1[1].text}</p>
                 </Link>
                 <img className={imageSmallTop} src={mobData1[1].imgUrl} alt="pfc gallery" /> 
             </div>
            
            
        </div>
    </div>
    </div>
  )
}

export default GalleryContainer