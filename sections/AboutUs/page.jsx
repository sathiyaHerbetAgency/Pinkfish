// /* eslint-disable */
// 'use client'
// import '../../styles/contact.css';
// import { Navbar } from '..';
// import {Footer}  from '..';
// import PartyBanner from '../../sections/PartyBanner';
// import {  motion } from "framer-motion";
// import { fadeIn, planetVariants, staggerContainer, textContainer, textVariant, textVariant2 } from "../../utils/motion";

// const AboutUs = () => {
//   return (
//     <div className='text-white  min-h-screen min-w-screen  overflow-hidden   flex flex-col'>
     
//          <div className='bg_about_us border-b-[1px] border-white'>
//          <div className=' top-0 w-full'>
//       <Navbar selectItem="about"/>
//       </div>
//           <div className=' flex justify-center  '>
//             <div className='flex flex-col'>
//             <div className='flex flex-col gap-6 pb-11 pt-6 header_container_aboutus border-b-[1px] border-white w-full '>
              
//                 <motion.h1
//                  variants={textVariant2}
//                  initial="hidden"
//                  whileInView="show"
//                viewport={{ once: true }}
                
//                 className='about_us_main_header'>WHO WE ARE?</motion.h1>
//             </div>

//             <div className='flex flex-col   mt-24'>
//               <motion.img 
//                variants={fadeIn("up", "tween",.1,1)}
//                initial="hidden"
//                whileInView="show"
//                viewport={{ once: true }}
//               src='/PinkfishImg_1.png' className='md:w-84 w-64 self-center mt-6' />
//                 <div
               
//                 className='w-[60%] self-center flex flex-col gap-4 mt-11 bg-[transparent]'>
//                 <motion.p 
//                   variants={textVariant2}
//                  initial="hidden"
//                  whileInView="show"
//                viewport={{ once: true }}
//                   className='about_us_text text-center'>Pinkfish Music & Arts Festival is a curated creative music & arts experience that featured live acts,
// both local & international, as well as art installations from various artists gifted in multiple mediums.
// This event was to celebrate the best in music & art in one big event. Over 8,000 people from
// Malaysia and neighbouring countries attended this large-scale outdoor festival at Sunway Lagoon
// Surf Beach.

//                  </motion.p>
//                  <motion.p
//                    variants={textVariant2}
//                   initial="hidden"
//                   whileInView="show"
//                viewport={{ once: true }} className='about_us_text text-center'>
// Two dynamic stages (Main Stage & Beach Hut) allowed for non-stop entertainment throughout the
// festival. Headliners included DJ Snake, Yellow Claw, Meduza & Dash Berlin, and we also invited
// regional & local acts like Joe Flizzow, Ramengvrl, Gemini & many more.</motion.p>
// </div>
//             </div>
           
//             </div>
            
//             </div>
//             <motion.div
//              variants={planetVariants('right')}
//              initial="hidden"
//             whileInView="show"
//                viewport={{ once: true }}
//             className='self-center mt-11 mb-11 flex flex-col '>
//               <button className='about_us_btn w-full md:w-fit self-center ' type='button'>Visit Pinkfish Music & Art Festival website  &nbsp; &gt;</button>
//             </motion.div>
//          </div>
//          <div className='bg_about_us_2'>
//          <div className='flex flex-col border-b-[1px] border-white   mt-11'>
//               <motion.img
//                variants={fadeIn("up", "tween",.1,1)}
//                initial="hidden"
//               whileInView="show"
//                viewport={{ once: true }}
//               src='/PinkfishImg_2.png' className='md:w-84 w-64 self-center mt-6' />
//                 <div className='w-[60%] self-center flex flex-col gap-4 mt-11 bg-[transparent]'>
//                 <motion.p
//                   variants={textVariant2}
//                  initial="hidden"
//                  whileInView="show"
//                viewport={{ once: true }}
//                 className='about_us_text text-center'>Pinkfish Live provides revolutionary and international-level 
//                   live shows electrifying stage setup and show production, mind-bending LED and sound setup for Malaysians.
//                   Pinkfish Live brought these expertise together for Tyga’s show on the 9th August 2023, having
//                   concert-goers dancing the night away.</motion.p>
//                  <motion.p 
//                   variants={textVariant2}
//                   initial="hidden"
//                   whileInView="show"
//                viewport={{ once: true }}
//                  className='about_us_text text-center'>The adrenaline-filled night also featured an exciting lineup of
//                   local acts. DJ sets from Nahsyk, Naufal, and Bad M.O.B. set the tone for the night, with exhilarating 
//                   performances by guest artists such as Saixse and Kidd Santhe, who performed their crowd-favourite hits 
//                   and had them singing along.</motion.p>
// </div>
          
//             <motion.div 
//             variants={planetVariants('right')}
//             initial="hidden"
//            whileInView="show"
//                viewport={{ once: true }}
//             className=' mt-11 mb-24 flex flex-col'>
//               <button className='about_us_btn w-full md:w-fit self-center' type='button'>Visit Pinkfish Live website  &nbsp;    &gt;</button>
//             </motion.div>
//             </div>
//             </div>
//             <div className='bg-[#FF0086] flex flex-col'>
//             <div className='flex flex-col  gap-6 mt-24 self-center'>
//                 <motion.h1
//                  variants={textVariant2}
//                  initial="hidden"
//                  whileInView="show"
//                viewport={{ once: true }}
//                 className='about_us_header'>ABOUT US</motion.h1>
//                 <motion.h1 
//                  variants={textVariant2}
//                  initial="hidden"
//                  whileInView="show"
//                viewport={{ once: true }}
//                 className='about_us_sub_header'>THE CURATORS</motion.h1>
           
//             <div className='flex flex-column   gap-6   mb-11 mt-11 '>
//            <div className='self-center flex md:flex-row flex-col justify-center md:justify-between '>
//               <motion.img
//                 variants={fadeIn("up", "tween",.1,1)}
//                 initial="hidden"
//                 whileInView="show" 
//                viewport={{ once: true }}
//               src='/aboutus_logo_2.png' className='w-[80%] md:w-[40%] self-center md:self-start' alt="logo" />
//               <motion.img
//                 variants={fadeIn("up", "tween",.1,1)}
//                 initial="hidden"
//                 whileInView="show"
//                viewport={{ once: true }}
//               src='/aboutus_logo_1.png' alt="logo" className=' w-[80%] md:w-[40%] mt-11 self-center md:self-start' />
//                </div>
//               </div>
//               </div>
//               </div>
//               <div className='about_us_botton_container flex flex-col  '>
//                 <PartyBanner  />
//                 <div className='mt-11 mb-0 items-center flex self-center gap-6' >
//                 <a href='https://www.facebook.com/pinkfishfestival/' target="_blank"> <img  className='h-6' src='/fb_icon.svg'/></a>
//                 <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank">  <img  className=' w-8 h-8' src='/yt_icon.svg'/> </a>
//                 <a href='https://www.instagram.com/pinkfishfestival/' target="_blank"> <img className='h-6' src='/ig_icon.svg'/></a>
//                 <a href='https://www.tiktok.com/@pinkfishfestival' target="_blank">  <img className='h-6' src='/tt_icon.svg'/></a>
//                 </div>
//                 <Footer />
//               </div>    
//     </div>
//   )
// }

// export default AboutUs