/* eslint-disable */
"use client";
import { useEffect, useRef,useState } from "react";

const Popup2 = ({setShowPopup}) => {
    let popupOverlayRef = useRef(null);
    let popupContainerRef = useRef(null);
    let popupOverlayRefMob = useRef(null);
    let popupContainerRefMob = useRef(null);

    const imgRef = useRef(null); // Reference for the image
    const [containerHeight, setContainerHeight] = useState(0); // State for container height
    const [containerWidth, setContainerWidth] = useState(0); // State for container height

  
    useEffect(() => {
      openPopup()

    }, []);
  
    function openPopup() {
        popupOverlayRef.current.style.display = "flex";
        popupOverlayRefMob.current.style.display = "flex";
    
        setTimeout(() => {
          popupContainerRef.current.style.opacity = "1";
          popupContainerRefMob.current.style.opacity = "1";
          popupContainerRefMob.current.style.transform = "scale(1)";
          popupContainerRef.current.style.transform = "scale(1)";
        }, 0.1);
      }
      function closePopup() {
        popupContainerRef.current.style.opacity = "0";
        popupContainerRefMob.current.style.opacity = "0";
        popupContainerRef.current.style.transform = "scale(0.8)";
        popupContainerRefMob.current.style.transform = "scale(0.8)";
        setTimeout(() => {
          if (popupOverlayRef.current) {
            popupOverlayRef.current.style.display = "none";
          }
          if (popupOverlayRefMob.current) {
            popupOverlayRefMob.current.style.display = "none";
          }
        }, 1000); 
        setShowPopup(false)

      }

      const button="text-[12px] text-white md:text-[16px] leading-[22.66px] md:leading-[22.66px] font-[Sofia] font-[400] p-2 px-4  bg-[#FF0086] rounded w-[110px]"

  return (
    <div>
        <div className="hidden md:block">
   <div ref={popupOverlayRef} className="popup-overlay ">
         <div
      ref={popupContainerRef}
      className="popup-container_main flex flex-col"
    >
      <div className="popup-card_main flex flex-col self-center w-[40%]  mt-6">
        <img
          onClick={() => {
            closePopup();
          }}
          className="w-[30px]  h-[30px] p-2 bg-[#F33288] rounded self-end cursor-pointer"
          src="close.png"
          alt="close"
        />
        <div>
       
          {" "}
          <img src="./Home/Festival/festival-img-10.webp" className="" alt="img" />
          <div className="flex flex-col justify-end ">
          <div className="flex self-center  gap-3 justify-center">
          <a href="/countdown" target=""className="w-fit self-center flex justify-start mt-3"> 
                <button className={button} alt="button">BUY NOW</button>
              </a>
             
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className=" md:hidden">
  <div ref={popupOverlayRefMob} className="popup-overlay ">
    <div
      ref={popupContainerRefMob}
      className="popup-container_main flex flex-col gap-3"
    >
      <div className="flex justify-end  ">

        <img
          onClick={() => {
            closePopup();
          }}
          className="w-[40px] p-3 bg-[#F33288] rounded cursor-pointer"
          src="close.png"
          alt="close"
        />
      </div>
      <div className="popup-card_main  ">
       
          {" "}
          <img
           ref={imgRef}
            src="./Home/Festival/festival-img-10.webp"
            className="object-cover "
            alt="img"
          />
         
        
      </div>
      <div  className="flex flex-col   pb-4 justify-end ">
          <div className="flex self-center gap-3 justify-center w-[100vw]">
          <a href="/countdown" target="" className="w-[100px] self-center flex justify-start "> 
                <button className={button} alt="button">BUY NOW</button>
              </a>
             
        </div>
          </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Popup2
