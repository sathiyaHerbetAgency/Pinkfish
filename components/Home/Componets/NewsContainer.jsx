/* eslint-disable */
import React from 'react'
import "../../../styles/contact.css";

const NewsContainer = ({link,title,description,image,btn,author,date}) => {
  return (
    <div className="basis-1/3  flex flex-col ">
        <button className="bg-[#F20D86] w-fit px-3 py-1 rounded-md relative self-end mr-4 top-[40px] text-white text-[14px] font-[Sofia] font-[700] leading-[18px]">{btn}</button>
    <img src={image} alt="news image" className="" />
    <div className=" flex flex-col bg-white h-full pt-6"> 
    
        <div className="flex flex-col gap-4 self-center pb-4 w-[90%] ">
        <h1 className="text-[24px] font-[Sofia] font-[700] leading-[28px] text-left  text-[#000]">{title}</h1>

        <p className="text-[15px] font-[Nunito] font-[400] leading-[18px] text-left  text-[#2A2A2A]">{description}</p>
        <div className="flex gap-4">
        <p className="text-[13px] font-[Poppins-Regular] font-[400] leading-[18px] text-left  text-[#000]">{date}</p>
        <p className="text-[13px] font-[Poppins-Regular] font-[400] leading-[18px] text-left  text-[#2A2A2A]">{author}</p>


        </div>

        <div className="flex gap-4">
            <a href="#" target="_blank">
            <img src="./Home/svg/link.svg" />
            </a>
            <a href="#" target="_blank">
            <img src="./Home/svg/share.svg" />
            </a>
        </div>
        </div>
    </div>
  </div>
  )
}

export default NewsContainer