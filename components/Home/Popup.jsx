/* eslint-disable */
"use client";
import { useEffect, useRef } from "react";

const Popup = () => {
    let popupOverlayRef = useRef(null);
    let popupContainerRef = useRef(null);
    let popupOverlayRefMob = useRef(null);
    let popupContainerRefMob = useRef(null);
    useEffect(()=>{
    openPopup()
    },[])
  
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
          popupOverlayRef.current.style.display = "none";
          popupOverlayRefMob.current.style.display = "none";
        }, 1000);
      }

      const button="text-[12px] text-white md:text-[16px] leading-[22.66px] md:leading-[22.66px] font-[Sofia] font-[400] p-2 px-4  bg-[#FF0086] rounded"

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
        <div className="flex flex-col h-[360px] justify-end absolute">
          <div className="flex self-center w-[300px] gap-3 justify-center">
          <a href="#" className="w-fit self-center flex justify-start mt-3"> 
                <button className={button} alt="button">Buy Now</button>
              </a>
              <a href="#" className="w-fit self-center flex justify-start mt-3"> 
                <button className={button} alt="button">BNPL</button>
              </a>
        </div>
          </div>
          {" "}
          <img src="./Home/Popup/popup_home.webp" className="" alt="img" />
          
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
        <div className="flex flex-col h-[400px] justify-end absolute">
          <div className="flex self-center w-[300px] gap-3 justify-center">
          <a href="#" className="w-fit self-center flex justify-start mt-3"> 
                <button className={button} alt="button">Buy Now</button>
              </a>
              <a href="#" className="w-fit self-center flex justify-start mt-3"> 
                <button className={button} alt="button">BNPL</button>
              </a>
        </div>
          </div>
          {" "}
          <img
            src="./Home/Popup/popup_home.webp"
            className="object-cover "
            alt="img"
          />
         
          
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Popup
