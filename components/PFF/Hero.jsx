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
        link:"https://www.instagram.com/pinkfishfestival/",
        heroClass:'bg-pff',
    }
    const PFC={
        first_heading:"coming soon in 2024",
        second_heading:"pinkfish countdown",
        span_text:"Pinkfish Countdown ",
        text:" is a curated experience of tight-knit celebration that features both international and local live acts upon the ushering into the new year. This event brings together the creative and music-loving community, as we count down to the new year.",
        button_text:' Be Part of PFC2024',
        link:"/countdown2024 ",
        heroClass:'bg-pfc',
    }
    const PFA={
      first_heading:"thank you lavas!",
      second_heading:"pinkfish arena",
      span_text:"Pinkfish Arena, ",
      text:" the latest sub-brand in the Pinkfish family, ready to set a new standard for arena shows with an electrifying focus on electronic dance music at iconic local venues, turning them into epicentres of DJ brilliance. Get hyped for a live experience like never before — where bass comes to life.",
      button_text:'Follow for more updates',
      link:"https://www.instagram.com/pinkfishfestival/",
      heroClass:'bg-pfa',
  }
  const PFL={
    first_heading:"thank you lavas!",
    second_heading:"pinkfish Live",
    span_text:"Pinkfish Live, ",
    text:" a sub-division of Pinkfish, provides revolutionary and international-level live shows, electrifying stage setup and show production, mind-bending LED and sound setup. We elevate and celebrate the artistry of rap and hip-hop through the power of live performances, bringing this cultural force to life on stage.",
    button_text:'Follow for more updates',
    link:"https://www.instagram.com/pinkfishfestival/",
    heroClass:'bg-pfl',
}
const PFP={
  first_heading:"thank you lavas!",
  second_heading:"pinkclub",
  span_text:"Pinkclub, ",
  text:" is the newest addition to the Pinkfish banner, turning up the heat with a dynamic series of electronic dance music shows dedicated to curating high-energy nights and core memories. These events take place in intimate club venues, offering fans a chance to experience the music up close and personal, where every beat and vibe resonates like never before.",
  button_text:'Follow for more updates',
  link:"https://www.instagram.com/pinkfishfestival/",
  heroClass:'bg-pfb',
}

    function checkContents(){
        if(select==="PFF"){
            return PFF
        }else if(select==="PFC"){
            return PFC
        }
        else if(select==="PFA"){
          return PFA
      }
      else if(select==="PFL"){
        return PFL
    }else if(select==="PFP"){
      return PFP
  }
    }



  return (
    <div
      className={` flex flex-col justify-between pt-24  md:pt-24 md:pb-11  ${
        checkContents().heroClass
      }`}
    >
      <div className="flex flex-col gap-4 md:pt-16 pt:36 self-center md:w-[80%]">
        <div className="md:w-[65%] w-[78%] flex flex-col self-center md:self-start gap-4">
          <h2 className="text-[22px] font-[Integral]  text-[#FF0086] text-start uppercase">
            {checkContents().first_heading}
          </h2>
          <h1 className="text-[36px] md:text-[44px] font-[Integral] md:leading-[50px] leading-[38px] font-bold tracking-[1px] er text-[#fff] uppercase">
            {checkContents().second_heading}
          </h1>
          <p className="world_text w-[90%]  ">
            <span className="font-bold">{checkContents().span_text} </span>
            {checkContents().text}
          </p>
        </div>
        <div className=" text-left md:text-center flex justify-center w-[80%] md:w-[100%] self-center md:justify-start gap-6">
          <button
            type="button"
            className="uppercase contact_submit bg-[#FF0086]"
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
            className=" uppercase text-[16px] leading-[24px] font-[Sofia] text-white font-[500] px-3 outline outline-2 outline-[#fff] rounded-md "
          >
            <a href="/Faq">FAQ</a>
          </button>
        </div>
        <div className="hidden md:block ">
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
        </div>
      </div>

      <div className="flex justify-center items-center gap-3  mt-6 md:hidden bg-black bg-opacity-50 py-8">
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
      </div>
    </div>
  );
}

export default Hero