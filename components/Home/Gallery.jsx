/* eslint-disable */
'use client'
import '../../styles/contact.css';
import { useState,useEffect } from 'react';
import GalleryGrid from './Componets/GalleryGrid';
import "../../styles/live.css"
import "../../styles/contact.css"
import GalleryPF from './Componets/GalleryPF';


const Gallery = () => {
  const [toogle,setToogle]=useState('1')
 

  return (
    <div className="flex flex-col bg-gallery-home py-11">
    <div className="flex flex-col self-center bg-white  md:max-w-[1100px] min-[80%]  py-11 mt-24 mb-11  rounded-lg">

         <div className= 'flex flex-col gap-3 self-center w-[95%] '>
        <h1 className="text-[40px] font-[700] font-[Integral] text-left drop-shadow-2xl  text-[#000]  uppercase">Gallery</h1>
         <div className= 'flex gap-3  '>
         <button className={toogle==='1'?'pink_btn':"gallery_btn_home" } onClick={()=>{setToogle('1')}}><img src='/gallery_logo_1.png'/> </button>
            <button className={toogle==='2'?'pink_btn':"gallery_btn_home" } onClick={()=>{setToogle('2')}}><img src='/gallery_logo_3.png'/> </button>
            <button className={toogle==='3'?'pink_btn':"gallery_btn_home" } onClick={()=>{setToogle('3')}}><img src='/gallery_logo_2.png'/> </button>
        </div>
       
        <div className="">
        {toogle==="1"&& <GalleryPF select="pff" folder="PF"/> }
        {toogle==="2"&& <GalleryPF select="pc" folder="PC"/> }
        {toogle==="3"&& <GalleryPF select="pl" folder="PL"/> }
        </div> 
        </div>

    </div>
    </div>
  )
}

export default Gallery