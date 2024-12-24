/* eslint-disable */
import React from 'react'
import "../../../styles/live.css"

const SlideImage = ({url,urlMob,year,link,slide}) => {
  const text="text-[12px] md:text-[16px] leading-[16.66px] md:leading-[22.66px] font-[Sofia] font-[400]"
  const heading="text-[24px] md:text-[36px] leading-[28.8px] md:leading-[43.2px] font-[Integral] font-[700] uppercase"
  const button="text-[12px] md:text-[16px] leading-[22.66px] md:leading-[22.66px] font-[Sofia] font-[400] p-2 px-4  bg-[#FF0086] rounded"

  const data=[
    {
      dateText:'21 December 2024 • Over & Above, Kuala Lumpur',
      heading:'Pinkclub: Hannah Laing',
      text:'Creating unforgettable nights in intimate venues, where every beat resonates and core memories are made.',
      link:false,
      ticketText:'Buy Tickets'
    },
    {
      dateText:'31 December 2024 • Surf Beach Sunway Lagoon',
      heading:'pinkfish countdown 2024',
      text:'Get ready to blast into 2025 at Pinkfish Countdown, where the beats drop as the clock strikes twelve!',
      link:'/countdown2024',
      ticketText:'Buy Tickets'
    },
    {
      dateText:'1 November 2024 • Mega Star Arena, Kuala Lumpur',
      heading:'pinkfish arena: FIND YOUR HARMONY',
      text:'Get hyped for a live experience like never before — where bass comes to life.',
      link:false,
      ticketText:'Buy Tickets'
    }
  ]


  return (
    <div className=" flex flex-col  ">
    <div className="self-center ">

      <div className="hidden md:block">
        <div className="pt-">
        <img
          src={url}
          className="  object-cover "
          alt="slider"
        />
        </div>
        <div className="text-block_live_hero  max-w-[100vw] z-[999] bg-gradinet-gray text-white flex flex-col justify-center h-[75vh] w-full ">
          <div className="flex flex-col self-center w-[621px] max-h-[300px] ">
          <p className={text}>{data[slide].dateText}</p>
              <h1 className={heading}>{data[slide].heading}</h1>
              <p className={`${text} pt-[7px]`}>{data[slide].text}</p>
             {data[slide].link&& <a href={data[slide].link} className="w-fit self-center flex justify-start mt-3"> 
                <button className={button} alt="button">{data[slide].ticketText}</button>
              </a>
              }
              </div>
          </div>
      </div> 
     
      <div className="md:hidden">
      <img
        src={urlMob}
        className=" object-cover  min-h-[80vh] max-w-[100vw]"
        alt="slider"
      />
      <div className="text-block_live  z-[999]   bg-gradinet-gray-mob text-white  h-[90vh]  ">
        <div className="min-h-[80vh] flex flex-col justify-center">
          <div className="flex flex-col self-center w-[90%] max-h-[164px]">
          <p className={text}>{data[slide].dateText}</p>
              <h1 className={heading}>{data[slide].heading}</h1>
              <p className={text}>{data[slide].text}</p>
              <a href={data[slide].link} className="w-fit self-center flex justify-start mt-3"> 
                <button className={button} alt="button">{data[slide].ticketText}</button>
              </a>
              </div>
              </div>
          </div>
    </div>
    </div>
  </div>
  )
}

export default SlideImage