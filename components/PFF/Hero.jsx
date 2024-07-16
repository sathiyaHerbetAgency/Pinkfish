import React from 'react'
import "../../styles/live.css"


const Hero = ({select}) => {

    const PFF={
        first_heading:"thank you lavas!",
        second_heading:"pinkfish music & arts festival",
        span_text:"Pinkfish Music & Arts Festival ",
        text:"is a curated creative music & arts experience that featured live acts, both local & international, as well as art installations from various artists gifted in multiple mediums to celebrate the best in music & art in one big event.",
        button_text:'Follow for more updates'
    }
    const PFC={
        first_heading:"coming soon in 2024",
        second_heading:"pinkfish countdown",
        span_text:"Pinkfish Countdown ",
        text:"is a curated experience of tight-knit celebration that features both international and local live acts upon the ushering into the new year. This event brings together the creative and music-loving community, as we count down to the new year.",
        button_text:'Join the 2024 waitlist'
    }
    function checkContents(){
        if(select==="PFF"){
            return PFF
        }else if(select==="PFC"){
            return PFC
        }
    }



  return (
    <div className={`min-h-screen flex flex-col pt-24  ${select==="PFF"?"bg-pff":"bg-pfc"}`}>
    <div className="flex flex-col gap-4 self-center w-[80%]">
        <div className="w-[65%] flex flex-col gap-4">
            <h1 className="text-[24px] font-[Integral]  text-[#FF0086] uppercase">{checkContents().first_heading}</h1>
            <h1 className="text-[48px] font-[Integral] leading-[54px] font-bold tracking-[1px] text-[#fff] uppercase">{checkContents().second_heading}</h1>
            <p className="text-[24px] font-[SofiaLight] text-[#fff]"><span className="font-bold">{checkContents().span_text} </span>{checkContents().text}</p>
        </div>
        <div className="flex gap-6">
            <button type='button' className='uppercase text-white p-3 bg-[#FF0086] rounded-md font-[SofiaMedium] text-[20px]'>{checkContents().button_text}</button>
            <button type='button'className=' uppercase text-white  px-4 outline outline-2 outline-[#fff] rounded-md font-[SofiaMedium] text-[20px]'>FAQ</button>

        </div>
        <div className="flex gap-3 items-center pt-11">
        <p className="text-white">Be in the loop!</p>
        <div className="flex gap-3">
            <img src="/facebook-pfc.png" />
            <img src="/twitter-pfc.png" />
            <img src="/pff-insta.png" />
        </div>
    </div>
    </div>
 
        
</div>
  )
}

export default Hero