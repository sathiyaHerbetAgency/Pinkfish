/* eslint-disable */
'use client'
import React, { useState } from 'react'
import gsap from 'gsap'


const AccordItem = ({header,text,no}) => {
    const [active,setActive]=useState(Boolean)
    const handleToggle = (event,no) => {
      const arr=[".icon0",".icon1", '.icon2', ".icon3",".icon4",".icon5", '.icon6', ".icon7",".icon8",".icon9", '.icon10', ".icon11"]
      const arr1=[".container0",".container1", '.container2', ".container3"]

     const a=   gsap.to(arr[no],{
         rotation:180,
        })
        if(active){
          const a=   gsap.to(arr[no],{
            rotation:0,
           })
        }
    // const b=    gsap.fromTo(arr1[no],{
    //       opacity:0,
    //       duration:1,
    //       y:40},{
    //         ease:'easeOut',
    //          y:0,
    //          opacity:1,
    //     })
        
        event.preventDefault();
        setActive(!active);
      };
  return (
    <div className='flex flex-col pt-6'>
      <div className=" flex justify-between pb-6">
      <h4 className="question_text">{header}</h4>
    <button className='md:self-end ' onClick={(e)=>{handleToggle(e,no)}} type="button">
    <img className={`icon${no}`} src="/chevron-down.png" />

      </button>
     
      </div>
      <div
        className={`md:pl-[62px]   ease-in-out faq_tag ${"container"+no}   ${
          active ? "block" : "hidden"
        }`}
      >

      <p> {text} </p>
        
      </div>
  </div>
  )
}

export default AccordItem