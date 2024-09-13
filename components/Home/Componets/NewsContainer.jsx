/* eslint-disable */
import React from 'react'
import "../../../styles/contact.css";

const NewsContainer = ({link,title,description,image,btn,author,date}) => {
  return (
    <div className="md:basis-1/3  flex flex-row md:flex-col ">
      <div className=" basis-2/5 md:flex md:flex-col md:px-3">
        <button className="bg-[#F20D86] hidden md:block md:w-fit px-3 py-1 rounded-md relative self-end mr-4 top-[40px] text-white text-[14px] font-[Sofia] font-[700] leading-[18px]">
          {btn}
        </button>
        <a
          href={link}
          target="_blank"
          arial-label="blog page"
          className="h-full"
        >
          <img src={image} alt="news image" className="object-cover h-full " />
        </a>
      </div>
      <div className=" basis-3/5 flex flex-col bg-white h-full px-4 py-2 md:py-6">
        <div className="flex flex-col gap-2 md:gap-4  self-center pb-4 md:w-[90%] ">
          <button className="bg-[#F20D86]  md:hidden w-fit px-3 py-1  rounded-md   text-white text-[12px] font-[Sofia] font-[700] leading-[16px]">
            {btn}
          </button>
          <a href={link} arial-label="blog page" target="_blank">
            <h3 className="text-[16px] md:text-[24px] font-[Sofia] font-[700] leading-[18px] md:leading-[28px] text-left  text-[#000]">
              {title}
            </h3>
          </a>
          <p className=" text-[12px] md:text-[15px]  leading-[12px] md:leading-[18px] font-[Nunito] font-[400]  text-left  text-[#2A2A2A]">
            {description}
          </p>
          <div className="flex gap-4">
            <p className="text-[12px] md:text-[13px]  leading-[14px] md:leading-[16px] font-[Poppins-Regular] font-[400] text-left  text-[#000]">
              {date}
            </p>
            <p className="text-[12px] md:text-[13px]  leading-[14px] md:leading-[16px] font-[Poppins-Regular] font-[400]  text-left  text-[#2A2A2A]">
              {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsContainer