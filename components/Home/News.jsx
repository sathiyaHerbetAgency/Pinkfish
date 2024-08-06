/* eslint-disable */
"use client";
import "../../styles/contact.css";
import React from 'react'
import { useState } from 'react';
import NewsBody from './Componets/NewsBody';

const News = () => {
  const [toogle,setToogle]=useState('1')


  const animationBorder="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
  const animationBorderActive="border-b-[2px] relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"

  return (
    <div className="bg-[#000] flex flex-col py-11">
        <div className="max-w-[1100px] min-w-[80%] self-center flex flex-col">
            <div className="self-center flex flex-col gap-6 w-full">
                <div className="  border-solid border-b-[1px] pb-3">
                    <h1 className="text-[24px] font-[Integral] text-left  text-[#fff]  uppercase">News</h1>
                </div>
                <div className="bg-[#F20D86] flex flex-col py-3 ">
                    <div className="w-[95%] flex gap-5 self-center">
                        <div className={toogle==='1'?animationBorderActive:animationBorder}>
                            <a onClick={()=>{setToogle('1')}} className="cursor-pointer text-[24px] font-[Poppins-Regular] text-left font-[400]  text-[#fff]  uppercase">ALL</a>
                        </div>
                        <div className={toogle==='2'?animationBorderActive:animationBorder}>
                            <a onClick={()=>{setToogle('2')}} className="cursor-pointer text-[24px] font-[Poppins-Regular] text-left  text-[#fff]  font-[400] uppercase">#PFF2024</a>
                        </div>
                        <div className={toogle==='3'?animationBorderActive:animationBorder}>
                            <a onClick={()=>{setToogle('3')}} className="cursor-pointer text-[24px] font-[Poppins-Regular] text-left  text-[#fff]  uppercase">#PFC2023</a>
                        </div>
                        <div className={toogle==='4'?animationBorderActive:animationBorder}>
                            <a onClick={()=>{setToogle('4')}} className="cursor-pointer text-[24px] font-[Poppins-Regular] text-left  text-[#fff]  uppercase">#PFL</a>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="flex flex-col">
        <NewsBody check={toogle==='1'&&"ALL"||toogle==="2"&&"PFF"||toogle==="3"&&"PFC"||toogle==="4"&&"PL"} />
        <button className="bg-[#828282] text-[14px] font-[Poppins-Regular] text-center self-center  text-[#fff]  uppercase py-3 px-8 rounded"type="button"> view more</button>

        </div>
        </div>
       
    </div>
  )
}

export default News