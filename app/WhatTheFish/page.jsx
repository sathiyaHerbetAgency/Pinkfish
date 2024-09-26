/* eslint-disable */
'use client'
import '../../styles/contact.css';
import {  motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "../../utils/motion";
import { Footer, NewNavbar } from '../../components';
import Container from './../../components/Funhub/Container';

const page = () => {
  return (
    <>
    <NewNavbar />
    <div className=" min-h-screen  text-white   ">
    <div className="contact_main_container_what flex flex-col justify-center pd:mb-0 pb-6      ">
   
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
                    <h2 className='contact_sub_text text-center'>Pinkfish celebrates the best of dance, urban pop, and live music acts, 
                    all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable
                    experience for music and art lovers alike.</h2>
                    <h2 className='contact_sub_text text-center'>Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has
                    something for everyone. It's more than just a festival - it's a celebration of creativity,
                    expression, and community. Come and experience music, dance and art in new and exciting
                    ways.</h2>
                    <h2 className='contact_sub_text text-center'>  Let Pinkfish be your way of life!</h2>
                    </div>
         </div>
         </div>
         </div>
         <div className="flex flex-col gap-6 pt-11 ">
          <Container />
        </div>
 </div>
 <Footer />
 <img className=' md:block hidden right-[0] top-[70%]  fixed  ' src='/fish.png' />
 </>
  )
}

export default page