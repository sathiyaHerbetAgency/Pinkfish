/* eslint-disable */
'use client'
import '../../styles/contact.css';
import {  motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "../../utils/motion";
import { Footer, NewNavbar } from '../../components';

const page = () => {
  return (
    <>
    <NewNavbar />
    <div className=" min-h-screen  text-white   ">
    <div className="contact_main_container_what flex flex-col justify-center pd:mb-0 pb-6 md:min-h-[80vh]     ">
   
         <div className='flex flex-col gap-6    '>
            <div className='w-[80%] md:w[50%] flex flex-col justify-center gap-6 self-center  '>
              <div className='md:block hidden '>
            <div className='flex justify-center gap-3  items-center contact_text_header '>
           <h1 className='contact_text_header  text-center '>What The </h1>
           <img src='/fish.svg' className='mt-2' alt='fish'/> !
           </div>
           </div>
           <div className='flex flex-col justify-center w-1/2 self-center gap-3 mt-11 items-center contact_text_header md:hidden'>
           <h1 className='contact_text_header  text-center pl-6'>What </h1>
           <div className='flex gap-2'>
           The 
           <img src='/fish.svg' className='' alt='fish'/> !
           </div>
           </div>
           <div className='flex flex-col gap-6 md:w-[50%] self-center'>
                    <h1 className='contact_sub_text text-center'>Pinkfish celebrates the best of dance, urban pop, and live music acts, 
                    all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable
                    experience for music and art lovers alike.</h1>
                    <h1 className='contact_sub_text text-center'>Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has
                    something for everyone. It's more than just a festival - it's a celebration of creativity,
                    expression, and community. Come and experience music, dance and art in new and exciting
                    ways.</h1>
                    <h1 className='contact_sub_text text-center'>  Let Pinkfish be your way of life!</h1>
                    </div>
         </div>
         </div>
        
       
         </div>
         <div className=' flex flex-col md:mt-0 mt-11'>
            <div className='flex flex-col  gap-6 md:w-[50%] w-[80%] self-center'>
              
                {/* <motion.h1 
                 variants={textVariant2}
                 initial="hidden"
                 whileInView="show"
               viewport={{ once: true }}
                className='about_us_sub_header'>THE CURATORS</motion.h1> */}
                <h1 className='about_us_sub_header'>THE CURATORS</h1>
           
            <div className='flex flex-column   gap-6   mb-11  '>
           <div className='self-center flex md:flex-row gap-11 flex-col justify-center md:justify-between  '>
            <div className=' flex flex-col md:w-1/2 gap-3'>
              {/* <motion.img
                variants={fadeIn("up", "tween",.1,1)}
                initial="hidden"
                whileInView="show" 
               viewport={{ once: true }}
              src='/aboutus_logo_1.svg' className=' ' alt="logo" /> */}
              <div className='w-[70%] self-center'>
              <img src='/aboutus_logo_1.svg' className='object-cover ' alt="logo" />
              </div>
              <div className='flex flex-col'>
                
                <p className='fish_bottom_text'>Established 13 years ago, Hitman Solutions is a subsidiary of Hitman Group</p>
              </div>
              <p className='fish_bottom_text'>Hitman Solutions is our specialist that focuses on organising and promoting one of our 
              proudest endeavours, concerts. We constantly strive to reach out to various artists of diverse backgrounds and genres in 
              hopes of creating truly remarkable musical experiences.
            </p>
            <p className='fish_bottom_text'>With our dedicated, talented team and professional, high-grade equipment, we have the right 
            ingredients to turn any occasion into an unforgettable experience.</p>
              
              </div>
              <div className=' flex flex-col md:w-1/2 gap-3 self-center md:self-start'>
              {/* <motion.img
                variants={fadeIn("up", "tween",.1,1)}
                initial="hidden"
                whileInView="show" 
               viewport={{ once: true }}
              src='/aboutus_logo_2.svg' className=' ' alt="logo" /> */}
               <div className='w-[70%] self-center'>
              <img src='/aboutus_logo_2.svg' className='object-cover ' alt="logo" />
              </div>
              <div className='flex flex-col'>
               
                <p className='fish_bottom_text'>From humble beginnings to organising events and festivals across Malaysia and Southeast Asia, 
                we have years of extensive experience in bringing the best live music events under our belt</p>
              </div>
              <p className='fish_bottom_text'>Our mission is to continuously provide experiences that people will carry throughout their 
               lives — from witnessing their idols perform to enjoying music with passion and everything else in between
            </p>
            <p className='fish_bottom_text'>Happymoon turns moments into movements and memories.</p>
              
              </div>
              
              {/* <div className=' flex flex-col gap-3 self-center md:self-start'>
              <motion.img
                variants={fadeIn("up", "tween",.1,1)}
                initial="hidden"
                whileInView="show" 
               viewport={{ once: true }}
              src='/aboutus_logo_1.png' className=' ' alt="logo" />
              <div className='flex flex-col '>
                <h1 className='fish_bottom_heading'>Happymoon</h1>
                <p className='fish_bottom_text'>From humble beginnings to organising events and festivals across Malaysia and Southeast 
                Asia, we have years of extensive experience in bringing the best live music events under our belts.</p>
              </div>
              <p className='fish_bottom_text'>Our mission is to continuously provide experiences that people will carry throughout their 
              lives — from witnessing their idols perform to enjoying music with passion and everything else in between.
            </p>
            <p className='fish_bottom_text'>Happymoon turns moments into movements and memories.</p>
              </div> */}
               </div>
              </div>
              </div>
 </div>
 </div>
 <Footer />
 <img className=' md:block hidden right-[0] top-[70%]  fixed  ' src='/fish.png' />
 </>
  )
}

export default page