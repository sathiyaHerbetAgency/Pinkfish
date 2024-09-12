/* eslint-disable */

import React from 'react'
import "../../styles/live.css"
import "../../styles/contact.css"



const Hero = () => {

    const PFF={
        first_heading:"thank you lavas!",
        second_heading:"pinkfish music & arts festival",
        span_text:"Pinkfish Music & Arts Festival ",
        text:"is a curated creative music & arts experience that featured live acts, both local & international, as well as art installations from various artists gifted in multiple mediums to celebrate the best in music & art in one big event.",
        button_text:'Follow for more updates',
        link:"https://www.instagram.com/pinkfishfestival/"
    }
    const PFC={
        first_heading:"coming soon in 2024",
        second_heading:"pinkfish countdown",
        span_text:"Pinkfish Countdown ",
        text:"is a curated experience of tight-knit celebration that features both international and local live acts upon the ushering into the new year. This event brings together the creative and music-loving community, as we count down to the new year.",
        button_text:'Be Part of PFC2024',
        link:"https://pinkfishfestival.com/countdown2024"
    }




  return (
    <div className= 'flex flex-col justify-center md:pb-11 bg-pfc'>
        <div className="flex flex-col gap-4  self-center md:w-[80%]">
            <div className="md:w-[65%] w-[78%] flex flex-col self-center  gap-4">
                <img src="/PFC/pf_logo.png" className="object-none h-[100px]" />
                <img src="/PFC/countdown_logo.png" className="object-contain" />
            </div>
            
            <div className=" self-center ">
                <div className="flex  gap-3 items-center pt-11 k">
                    <p className="text-[#D9D9D9] font-[Sofia] text-[18px]">Be in the loop!</p>
                    <div className="flex items-center gap-3">
                        <a href='https://www.facebook.com/pinkfishfestival/' target="_blank" className=" ">
                            <img src="./PFC/Social/pfc_fb.png"  className="object-contain w-[30px] md:w-[40px]" />
                        </a>
                        <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank" className=" ">
                        <img src="./PFC/Social/pfc_yt.png"  className="object-contain w-[30px] md:w-[40px]" />
                        </a>
                        <a href='https://www.instagram.com/pinkfishfestival/'  target="_blank" className=" ">
                        <img src="./PFC/Social/pfc_insta.png"  className="object-contain w-[30px] md:w-[40px]" />
                        </a>
                        <a href='https://www.tiktok.com/@pinkfishfestival' target="_blank" className="">
                        <img src="./PFC/Social/pfc_tiktok.png" className="object-contain w-[40px]" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
 
      
         
</div>
  )
}

export default Hero



 //   <div className="flex justify-center items-center gap-3  mt-6 md:hidden  py-8">
// <p className="text-[#D9D9D9] font-[Sofia] text-[18px]">Be in the loop!</p>
// <div className="flex items-center gap-3">
//     <a href='https://www.facebook.com/pinkfishfestival/' target="_blank" className=" ">
//         <img src="./PFC/Social/pfc_fb.png"  className="object-contain w-[30px] md:w-[40px]" />
//     </a>
//     <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank" className=" ">
//     <img src="./PFC/Social/pfc_yt.png"  className="object-contain w-[30px] md:w-[40px]" />
//     </a>
//     <a href='https://www.instagram.com/pinkfishfestival/'  target="_blank" className=" ">
//     <img src="./PFC/Social/pfc_insta.png"  className="object-contain w-[30px] md:w-[40px]" />
//     </a>
//     <a href='https://www.tiktok.com/@pinkfishfestival' target="_blank" className="">
//     <img src="./PFC/Social/pfc_tiktok.png" className="object-contain w-[40px]" />
//     </a>
// </div>
// </div>