/* eslint-disable */
'use client'
import { useState } from 'react';
import '../../../styles/live.css';
import gsap from 'gsap';
import FsLightbox from "fslightbox-react";
import Navbar from '../../../sections/Navbar';
import FooterLive from '../../../sections/FooterLive'
import Head from './../../../components/head';
const EventsIndividual = () => {
    const [active, setActive] = useState(false);
    const [url,setUrl]=useState('')
    const [toggler, setToggler] = useState(false);
    const [slide,setSlide]=useState()
    const [slideMob,setSlideMob]=useState()
    const description="Discover the best live music events in Malaysia & Southeast Asia with Pinkfish! Immerse yourself in the vibrant music scene and experience unforgettable performances."
    const title="Live music event in Malaysia & Southeast Asia | Pinkfish  "
    function sideScroll(direction,speed,distance,step){
        var element =   document.getElementById('container')
       
         var scrollAmount = 0;
          var slideTimer = setInterval(function(){
              if(direction == 'left'){
                  element.scrollLeft -= step;
              } else {
                  element.scrollLeft += step;
              }
              scrollAmount += step;
              if(scrollAmount >= distance){
                  window.clearInterval(slideTimer);
              }
          }, speed);
      }
      function mouseOut(e){
        var tl = gsap.timeline();
        tl.to(e, {scale: 1, duration: .5, ease: "power1.inOut"});
      }
    
      function moveImageLeft(){   
  
            gsap.to('.image_01',{
                x:"0%", duration:3
            })
      }

      function moveImageRight(){   
        gsap.to('.image_01',{
            x:"-100%", duration:3
        })
  }
    
    
    function mouseDowns (e) {
    
      var tl = gsap.timeline();
      tl.to(e, {scale: 1.05, duration: .5, ease: "power1.inOut"});
    }

    function selectImage(e){
        setActive(true)
        setUrl(e)
    }



  return (
    <>
    <Head title={title} description={description} />
    <Navbar />
    <div className=' flex flex-col justify-center '>
        <div className='w-[80%] self-center flex flex-col gap-8 mt-11 '>
   
    <div className='flex flex-col md:flex-row gap-4 '>
    <div className='md:basis-2/3 order-2 md:order-1 flex flex-col gap-6'>
        
        <p className='date_event_main_text_live'>9 august 2023</p>
        <h2 className='event_section_header_live cursour-pointer'>TYGA live in kl</h2>
        <p className='event_section_text_live'>Compton-born Tyga is coming to Malaysia for the first time and he's ready to make 
        it “Bedrock”! Tyga, which stands for Thank You God Always brings his arsenal of hits, from ‘Rack City’, to 
        ‘Ice Cream Man’ to ‘Taste’ from the blast from the radio to his live shows. You know you’re in for a party with him taking 
        the stage this Wednesday, the 8th of August 2023 in Zepp KL!
        </p>
        <div className='buy_ticket_event_main_live flex justify-center w-[40%] md:w-[15%]'>
        <button className=" flex  " type="button">Sold Out
        <svg className="mt-1 ml-2" width="6" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.46351L4.67453 5.78896C5.10849 5.35501 5.10849 4.64489 4.67453 4.21094L1 0.536377" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</button>
</div>
    </div>
    <div className=' md:basis-1/3 order-1 md:order-2'>
        <img src="/Live/event_individual_1.webp"/>
    </div>
    </div>
    </div>
    <div className='w-[full] flex flex-col md:flex-row md:justify-around gap-11 text-white bg-[#F33288] mt-6 mb-6 pt-6 pb-6'>
    <div className='flex flex-col self-center items-center'>
        <p className='sub_heading_events_live'>Schedule</p>
        <p className='sub_text_live'>8pm</p>
    </div>
    <div className='flex flex-col self-center items-center '>
        <p className='sub_heading_events_live'>date</p>
        <p className='sub_text_live'>9 August 2023</p>
    </div>
    <div className='flex flex-col self-center items-center'>
        <p className='sub_heading_events_live'>Venue</p>
        <p className='sub_text_live'>Zepp Kuala Lumpur</p>
    </div>
    <div className='flex flex-col self-center items-center'>
        <p className='sub_heading_events_live'>rating</p>
        <p className='sub_text_live'>18+</p>
    </div>
</div>

    <div className='  gap-4 mb-11 md:mb-24 '>
{/* <div className='gallery_scroll_container flex gap-24 p-24'>
<img src="/event_individual_2.webp" className=''  alt='img'/>
<img src="/event_individual_3.webp" className='pr-24 '  alt='img'/>
</div> */}
        <div id='container' className=' flex flex-col overflow-x-scroll gap-4 order-2 md:order-1'>
            <div  className=' flex gap-6  '>
                <div className=' flex flex-col    min-w-[200vw] '>
                    <div className=' max-w[90%]  flex gap-3 md:gap-1 '>
                    <div className='min-w-[100vw] flex flex-col'>
            <img src="/Live/event_individual_2.webp" className='md:w-[50%] w-[80%] self-center'  alt='img'/>
            </div>
            <div className='min-w-[100vw] flex flex-col'>
            <img src="/Live/event_individual_3.webp" className='md:w-[50%]  w-[80%] self-center'  alt='img'/>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className='flex  justify-center gap-4 mt-6'>
        <button className='' onClick={()=>{sideScroll("left",2,900,1900)}}>  <img className='w-12 md:w-full'  src='/Live/left_arrow_event.svg' alt='img'/></button>
          <button className='' onClick={()=>{sideScroll("right",2,900,1900)}}>  <img className=' w-12 md:w-full' src='/Live/right_arrow_event.svg ' alt='img'/></button>
        </div>
     
    </div>

    <div className='flex flex-col gap-4 text-white mb-11'>
    <h2 className='gallery_event_live text-center'>Gallery</h2>
    <div className='flex gap-4 self-center '>
        <img  onClick={() => {setToggler(!toggler), setSlide(1)}}  onMouseOver={(e)=>mouseDowns(".image_112")} onMouseLeave={(e)=>mouseOut(".image_112")} alt='img' src='/Live/Gallery/gallery_event_1.webp' className='image_112 object-none hidden md:block'/>
        <img  onClick={() => {setToggler(!toggler), setSlide(2)}} onMouseOver={(e)=>mouseDowns(".image_113")} onMouseLeave={(e)=>mouseOut(".image_113")} alt='img' src='/Live/Gallery/gallery_event_2.webp' className='object-none image_113 hidden md:block'/>

    </div>
    <div className='flex gap-4 self-center items-start  '>
        <img  onClick={() => {setToggler(!toggler), setSlide(3)}}  onMouseOver={(e)=>mouseDowns(".image_114")} onMouseLeave={(e)=>mouseOut(".image_114")} alt='img' src='/Live/Gallery/gallery_event_3.webp' className='object-none image_114  hidden md:block'/>
        <img  onClick={() => {setToggler(!toggler), setSlide(4)}} onMouseOver={(e)=>mouseDowns(".image_115")} onMouseLeave={(e)=>mouseOut(".image_115")} alt='img' src='/Live/Gallery/gallery_event_4.webp' className='object-none image_115  hidden md:block'/>

    </div>
    <div className='flex gap-4 self-center  md:hidden'>
        <img onClick={() => {setActive(!active), setSlideMob(1)}} onMouseOver={(e)=>mouseDowns(".image_117")} onMouseLeave={(e)=>mouseOut(".image_117")} alt='img' src='/Live/Gallery/gallery_event_1_mob.webp' className='image_117 object-none'/>
        <img onClick={() => {setActive(!active), setSlideMob(2)}} onMouseOver={(e)=>mouseDowns(".image_116")} onMouseLeave={(e)=>mouseOut(".image_116")} alt='img' src='/Live/Gallery/gallery_event_2_mob.webp' className='object-none image_116'/>

    </div>
    <div className='flex gap-4 self-center items-start   md:hidden '>
        <img onClick={() => {setActive(!active), setSlideMob(3)}} onMouseOver={(e)=>mouseDowns(".image_118")} onMouseLeave={(e)=>mouseOut(".image_118")} alt='img' src='/Live/Gallery/gallery_event_3_mob.webp' className='object-none image_118'/>
        <img onClick={() => {setActive(!active), setSlideMob(4)}} onMouseOver={(e)=>mouseDowns(".image_119")} onMouseLeave={(e)=>mouseOut(".image_119")} alt='img' src='/Live/Gallery/gallery_event_4_mob.webp' className='object-none image_119'/>
    </div>
    <div className='hidden md:block'>
		
			 <FsLightbox
				toggler={toggler}
				sources={[
					'/Live/Gallery/gallery_event_1.webp',
					'/Live/Gallery/gallery_event_2.webp',
					'/Live/Gallery/gallery_event_3.webp',
          '/Live/Gallery/gallery_event_4.webp'
				]}
        slide={slide}
			/>
		 </div>
     <div className=' md:hidden'>
		
    <FsLightbox
     toggler={active}
     sources={[
       '/Live/Gallery/gallery_event_1_mob.webp',
       '/Live/Gallery/gallery_event_2_mob.webp',
       '/Live/Gallery/gallery_event_3_mob.webp',
       '/Live/Gallery/gallery_event_4_mob.webp'
     ]}
     slide={slideMob}
   />
  </div>

    
    </div>

 
   
    </div>
<FooterLive />
    </>
    
  )
}

export default EventsIndividual