/* eslint-disable */

import React from 'react'
import "../../styles/live.css"
import "../../styles/contact.css"



const Hero = ({select}) => {

    const PFF={
        first_heading:"thank you lavas!",
        second_heading:"pinkfish music & arts festival",
        span_text:"Pinkfish Music & Arts Festival ",
        text:" is a curated creative music & arts experience that featured live acts, both local & international, as well as art installations from various artists gifted in multiple mediums to celebrate the best in music & art in one big event.",
        button_text:'Follow for more updates',
        link:"https://www.instagram.com/pinkfishfestival/"
    }
    const PFC={
        first_heading:"are you ready, lavas?",
        second_heading:"pinkfish countdown",
        span_text:"Pinkfish Countdown ",
        text:" is set to deliver an unparalleled experience that pushes boundaries and sets the stage for an unforgettable countdown to midnight.",
        button_text:'BUY TICKETS NOW',
        link:"/countdown2024",
        dateText:' 31 December 2024 • Surf Beach Sunway Lagoon',
        ticketHeading:'gA, vIP & vVIP passes are on sale',
        faqHeading:'frequently asked questions',
    }
    function checkContents(){
        if(select==="PFF"){
            return PFF
        }else if(select==="PFC"){
            return PFC
        }
    }

const textHero="text-[12px] md:text-[16px] font-[DmSansLight] md:leading-[20.83px] leading-[15.62px] font-light text-center text-[#fff] md:w-[80%] self-center"
const textHeadingBtn="text-[16px] md:text-[16px] font-[Sofia] md:leading-[20.83px] leading-[20.83px] font-bold text-center text-[#fff] uppercase"

  return (
    <div
      className={` flex flex-col justify-between pt-24  md:pt-24 md:pb-11  ${
        select === "PFF" ? "bg-pff" : "bg-pfc"
      }`}
    >
      <div className="flex flex-col gap-4 md:pt-16 pt:36 self-center md:w-[620px]">
        <div className="md:w-[620px] w-[78%] flex flex-col self-center  gap-4">
          <h2 className="text-[22px] font-[Integral]  text-[#FF0086] text-center uppercase">
            {checkContents().first_heading}
          </h2>
          <h1 className="text-[32px] md:text-[40px] font-[Integral] md:leading-[48px] leading-[38.04px] font-bold tracking-[1px] text-center text-[#fff] uppercase">
            {checkContents().second_heading}
          </h1>
          <p className={textHero}>
            {checkContents().dateText}
          </p>
          <p className={textHero}>
            <span className="font-bold">{checkContents().span_text} </span>
            {checkContents().text}
          </p>
         
        </div>
        <div className="hidden md:block">
            <div className="flex flex-col">
          
                <div className=" text-left md:text-center flex justify-center w-[80%] md:w-[100%] self-center gap-6 ">
                <button
                    type="button"
                    className="uppercase hero-submit-pfc11111 w-[179px] h-[48px] items-center  self-center font-bold hidden md:block"
                >
                    {" "}
                    <a
                    href={checkContents().link}
                    target={select === "PFF" && "_blank"}
                    >
                    {" "}
                    {checkContents().button_text}{" "}
                    </a>
                </button>
                <button
                    type="button"
                    href="/faq"
                    className=" bg-[#F33288] uppercase text-[16px] leading-[24px] font-[Sofia] font-bold text-white w-[71px] h-[48px]  rounded-md "
                >
                    <a href="/Faq">FAQ</a>
                </button>
                </div>       
            </div>
        </div>
        {/* <div className="hidden md:block ">
          <div className="flex gap-3 items-center pt-11 k">
            <p className="text-white">Be in the loop!</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/pinkfishfestival/"
                arial-label="Facebook Page"
                target="_blank"
                className=" "
              >
                <img
                  src="/PFF_1/SocailMediaIcons/facebook-pfc.png"
                  alt="Facebook Logo"
                />
              </a>
              <a
                href="https://www.youtube.com/@Pinkfishfestival"
                arial-label="Youtube Channel"
                target="_blank"
                className=" "
              >
                <img
                  src="/PFF_1/SocailMediaIcons//pff-youtube.png"
                  alt="Youtube Logo"
                />
              </a>
              <a
                href="https://www.instagram.com/pinkfishfestival/"
                arial-label="Instagram Page"
                target="_blank"
                className=" "
              >
                <img
                  src="/PFF_1/SocailMediaIcons//pff-insta.png"
                  alt="Instagram Logo"
                />
              </a>
              <a
                href="https://www.tiktok.com/@pinkfishfestival"
                arial-label="Tiktok Page"
                target="_blank"
                className=""
              >
                <img
                  src="/PFF_1/SocailMediaIcons//pff-tiktok.png"
                  alt="Tiktok Logo"
                />
              </a>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="flex justify-center items-center gap-3  mt-6 md:hidden bg-black bg-opacity-50 py-8">
        <p className="text-white">Be in the loop!</p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/pinkfishfestival/"
            arial-label="Facebook Page"
            target="_blank"
            className=" "
          >
            <img
              src="/PFF_1/SocailMediaIcons//facebook-pfc.png"
              alt="Facebook Logo"
            />
          </a>
          <a
            href="https://www.youtube.com/@Pinkfishfestival"
            arial-label="Youtube Channel"
            target="_blank"
            className=" "
          >
            <img
              src="/PFF_1/SocailMediaIcons//pff-youtube.png"
              alt="Youtube Logo"
            />
          </a>
          <a
            href="https://www.instagram.com/pinkfishfestival/"
            arial-label="Instagram Page"
            target="_blank"
            className=" "
          >
            <img
              src="/PFF_1/SocailMediaIcons//pff-insta.png"
              alt="Instagram Logo"
            />
          </a>
          <a
            href="https://www.tiktok.com/@pinkfishfestival"
            arial-label="Tiktok Page"
            target="_blank"
            className=""
          >
            <img
              src="/PFF_1/SocailMediaIcons//pff-tiktok.png"
              alt="Tiktok Logo"
            />
          </a>
        </div>
      </div> */}
      <div className="flex flex-col  min-w-[100vw]">
      <div className="md:hidden  flex flex-col gap-6 justify-center self-center min-w-[100vw] ">
        <div className="w-[90%] h-[103px] bg-[#FFFFFF1A] flex flex-col self-center justify-center  gap-2 text-white ">
            <p className={textHeadingBtn}>
                {checkContents().ticketHeading}
            </p>
          <button
            type="button"
            href="/faq"
            className=" bg-[#F33288]  text-[12px] leading-[14px] font-[Sofia] font-bold text-white w-[92px] h-[32px] rounded-md  self-center"
          >
            <a href="/Faq">Buy Now</a>
          </button>
        </div>
        <div className="w-[90%] h-[103px] bg-[#FFFFFF1A] flex flex-col self-center justify-center gap-2  text-white ">
            <p className={textHeadingBtn}>
                {checkContents().faqHeading}
            </p>
          <button
            type="button"
            href="/faq"
            className=" bg-[#F33288]  text-[12px] leading-[14px] font-[Sofia] font-bold text-white w-[92px] h-[32px] rounded-md  self-center"
          >
            <a href="/Faq">Faq</a>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero