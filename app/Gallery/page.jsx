/* eslint-disable */
'use client'
import '../../styles/contact.css';
import {  motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "../../utils/motion";
import { useState } from 'react';
import { scrollTop } from '../../components/jsfile';
import { Footer, NewNavbar } from '../../components';
import Head from './../../components/head';
import GalleryContainer from './../../components/Gallery/GalleryContainer';
const Gallery = () => {
  const [toogle,setToogle]=useState('1')
  const description="Discover the vibrant Pinkfish Music & Arts Festival, featuring live acts and art installations from local and international artists. Join us for a unique creative experience! "
  const title="Experience the Best Music Festival in Malaysia - Pinkfish "

  return (
    <>
    <Head title={title} description={description} />
    <NewNavbar />
    <div className="bg-black min-h-screen flex flex-col gap-11  text-white   ">
    
    <div className='flex flex-col gap-6 pt-11 '>
      <h1 className='contact_text_header  self-center'>Gallery</h1>
      <p className='contact_sub_text text-center w-[60%] self-center'>Catch a glimpse of yourself and other LAVAs in stills at Pinkfish events!</p>
    </div>
<GalleryContainer />
   </div>
<Footer />
<img className=' md:block hidden right-[0] top-[70%]  fixed  ' src='/fish.png' />
</>
  )
}

export default Gallery