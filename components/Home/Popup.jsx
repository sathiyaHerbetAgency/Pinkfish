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
  return (
    <div>
        <div className="hidden md:block">
   <div ref={popupOverlayRef} class="popup-overlay ">
         <div
      ref={popupContainerRef}
      class="popup-container_main flex flex-col"
    >
      <div class="popup-card_main flex flex-col self-center w-[40%]  mt-6">
        <img
          onClick={() => {
            closePopup();
          }}
          className="w-[30px]  h-[30px] p-2 bg-[#F33288] rounded self-end cursor-pointer"
          src="close.png"
          alt="close"
        />
        <a href="/Arena">
          {" "}
          <img src="./Home/Popup/popup_home.png" className="" alt="img" />
        </a>
      </div>
    </div>
  </div>
</div>

<div className=" md:hidden">
  <div ref={popupOverlayRefMob} class="popup-overlay ">
    <div
      ref={popupContainerRefMob}
      class="popup-container_main w-[90%] flex flex-col gap-3"
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
      <div class="popup-card_main  ">
        <a href="/Arena">
          {" "}
          <img
            src="./Home/Popup/popup_home.png"
            className="object-cover"
            alt="img"
          />
        </a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Popup
