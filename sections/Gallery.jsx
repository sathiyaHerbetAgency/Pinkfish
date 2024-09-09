'use client'
import { useState } from "react";
import "../styles/live.css"
import gsap from "gsap";
import FsLightbox from "fslightbox-react";
const Gallery = () =>{
  const [active, setActive] = useState(false);

  const [toggler, setToggler] = useState(false);
  const [slide,setSlide]=useState()
  const [slideMob,setSlideMob]=useState()
  function sideScroll(element,direction,speed,distance,step){
   
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



function mouseDowns (e) {

  var tl = gsap.timeline();
  tl.to(e, {scale: 1.05, duration: .5, ease: "power1.inOut"});
}
var dragged = false
var oldX = 0;
function mouseDown (e) {
    oldX = e.pageX;
    dragged = false 
  }
 function mouseMove() {
   dragged = true 
  }

function mouseUp(e) {
var divOverlay =   document.getElementById('container')
        if (dragged == true && e?.pageX < oldX) {
            sideScroll(divOverlay,'right',25,300,900);
        } else if (dragged == true && e?.pageX > oldX) {
            sideScroll(divOverlay,'left',25,100, 900);          
        }    
}

function selectImage(e){
  setActive(true)
  setUrl(e)
}


  
return(
  <section className="mt-24">

    <div id="container" onMouseMove={()=>mouseMove()}  onMouseDown={(e)=>mouseDown(e)} onMouseUp={(e)=>mouseUp(e)}  className="flex gallery_main_container_live gap-4 hidden md:block">
      <div className="flex gap-8 ">
      <div className="flex flex-col gap-8 ">
        <div className="image_11_live">
        <img onClick={() => {setToggler(!toggler), setSlide(1)}} draggable="false"   alt="gallery-image" className="min-w-[400px] h-[260px] image_1" src="Live/Gallery/gallery_1.webp" />
        </div>
        <div className="image_11_live">
        <img  onClick={() => {setToggler(!toggler), setSlide(2)}} draggable="false"  alt="gallery-image" className="w-[400px] h-[400px] image_2" src="Live/Gallery/gallery_2.webp" />
        </div>
      </div>
      <div className="flex flex-col gap-8  ">
        <div className="flex flex-col gap-8  gallery_container_live text-white p-4 ">
          <div className="gap-8 flex w-[400px] h-[275px] flex-col">
          <h1 className="gallery_header_live w-1/2 mt-11 ">Gallery</h1>
          <p className="gallery_text_live">Step into our Gallery and let the music do the talking! Get a glimpse
            of the epic performances and wild moments that make concerts with us an unforgettable ride.</p>
         
            </div>
        </div>
       
        <div className="image_11_live">
        <img onClick={() => {setToggler(!toggler), setSlide(3)}} draggable="false"  alt="gallery-image" className="w-[440px] h-[354px] image_3" src="/Live/Gallery/gallery_3.webp" />
      </div>
      </div>
     
    <div className="flex flex-col gap-8 ">
        <div className="flex gap-8">
        <div className="image_11_live">
        <img  onClick={() => {setToggler(!toggler), setSlide(4)}} draggable="false"  alt="gallery-image"  src="/Live/Gallery/gallery_5.webp" />
        </div>
        <div className="image_11_live">
        <img onClick={() => {setToggler(!toggler), setSlide(5)}} draggable="false"  alt="gallery-image" src="/Live/Gallery/gallery_6.webp" />
        </div>
        </div>
        <div className="w-[840px] h-[308px] ">
        <div className="image_11_live">
        <img onClick={() => {setToggler(!toggler), setSlide(6)}} draggable="false"  alt="gallery-image" className="object-contain " src="/Live/Gallery/gallery_7.webp"/>
        </div>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      <div className="image_11_live">
      
        <img onClick={() => {setToggler(!toggler), setSlide(7)}}  className="image_8" draggable="false"  alt="gallery-image" src="/Live/Gallery/gallery_8.webp" />
        </div>
        <div className="w-[400px] h-[400px] image_11_live">

        <img  onClick={() => {setToggler(!toggler), setSlide(8)}} draggable="false"  alt="gallery-image" className="image_9 object-contain" src="/Live/Gallery/gallery_9.webp"/>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      
    
   
      <div className="w-[400px] image_11_live">

      <img onClick={() => {setToggler(!toggler), setSlide(9)}} draggable="false"  alt="gallery-image" className=" h-[690px] image_10" src="/Live/Gallery/gallery_10.webp"/>
      </div>
    </div> 
    <div className="flex flex-col gap-8 ">
       
        <div className="w-[840px] image_11_live">

        <img onClick={() => {setToggler(!toggler), setSlide(10)}} draggable="false"  alt="gallery-image" className="object-contain " src="/Live/Gallery/gallery_11.webp"/>
        </div>
        <div className="flex gap-8  ">
        <div className="image_11_live">
        <img onClick={() => {setToggler(!toggler), setSlide(11)}} draggable="false"  alt="gallery-image" className="image_12" src="/Live/Gallery/gallery_12.webp" />
        </div>
        <div className="image_11_live">
        <img  onClick={() => {setToggler(!toggler), setSlide(12)}} draggable="false"  alt="gallery-image" className="image_13" src="/Live/Gallery/gallery_13.webp" />
        </div>
        </div>
      </div> 
 
</div>

</div>

    <div className="md:hidden gallery_container_mob_live px-4 pt-4 pb-4">
    <div className="flex flex-col gap-4  text-white mb-4 ">
          <h1 className="gallery_header_live">Gallery</h1>
          <p className="gallery_text_live">Step into our Gallery and let the music do the talking! Get a glimpse
            of the epic performances and wild moments that make concerts with us an unforgettable ride.</p>
        
        </div>
        <div className="flex gap-4 mx-2">
          <div className="flex flex-col gap-4 basis-1/2">
          <div className="image_11_live">
          <img onClick={() => {setActive(!active), setSlideMob(1)}} className=" w-full h-full image_14" alt="gallery-image" src="/Live/Gallery/gallery_1_mob.webp" />
          </div>
          <div className="image_11_live">
          <img onClick={() => {setActive(!active), setSlideMob(2)}} className=" w-full h-full" alt="gallery-image" src="/Live/Gallery/gallery_3_mob.webp" />
          </div>
          </div>
          <div className="flex flex-col gap-4 basis-1/2">
          <div className="image_11_live">
          <img  onClick={() => {setActive(!active), setSlideMob(3)}} className="  w-full h-full" alt="gallery-image" src="/Live/Gallery/gallery_2_mob.webp" />
          </div>
          <div className="image_11_live">
          <img onClick={() => {setActive(!active), setSlideMob(4)}} className="  w-full h-full " alt="gallery-image" src="/Live/Gallery/gallery_4_mob.webp" />
          </div>
          </div>
         
        </div>
        
        <div className="image_11_live">
        <img onClick={() => {setActive(!active), setSlideMob(5)}} className=" w-full h-full mx-2 my-4 pr-3  mt-4 mb-4" alt="gallery-image" src="/Live/Gallery/gallery_5_mob.webp"/>
        </div>
        <div className="flex gap-4 mx-2 w-full ">
          <div className="basis-1/2 image_11_live">
        <img onClick={() => {setActive(!active), setSlideMob(6)}} className="object-cover w-full h-full rounded" alt="gallery-image" src="/Live/Gallery/gallery_6_mob.webp" />
        </div>
        <div className="basis-1/2 mr-3 image_11_live ">
          <img onClick={() => {setActive(!active), setSlideMob(7)}} className="w-full h-full " alt="gallery-image" src="/Live/Gallery/gallery_7_mob.webp" />
        </div>
        </div>
       
    </div>
    <div className='hidden md:block'>
		
    <FsLightbox
     toggler={toggler}
     sources={[
       '/Live/Gallery/gallery_1.webp',
       '/Live/Gallery/gallery_2.webp',
       '/Live/Gallery/gallery_3.webp',
       '/Live/Gallery/gallery_5.webp',
       '/Live/Gallery/gallery_6.webp',
       '/Live/Gallery/gallery_7.webp',
       '/Live/Gallery/gallery_8.webp',
       '/Live/Gallery/gallery_9.webp',
       '/Live/Gallery/gallery_10.webp',
       '/Live/Gallery/gallery_11.webp',
       '/Live/Gallery/gallery_12.webp',
       '/Live/Gallery/gallery_13.webp',
     ]}
     slide={slide}
   />
  </div>
  <div className=' md:hidden'>
 
 <FsLightbox
  toggler={active}
  sources={[
    '/Live/Gallery/gallery_1_mob_full.webp',
       '/Live/Gallery/gallery_3_mob_full.webp',
       '/Live/Gallery/gallery_2_mob_full.webp',
       '/Live/Gallery/gallery_4_mob_full.webp',
       '/Live/Gallery/gallery_5_mob_full.webp',
       '/Live/Gallery/gallery_6_mob_full.webp',
       '/Live/Gallery/gallery_7_mob_full.webp',
  ]}
  slide={slideMob}
/>
</div>
  </section>
);
}
export default Gallery;
