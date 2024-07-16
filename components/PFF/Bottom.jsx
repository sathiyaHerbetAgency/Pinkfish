'use client'
import React from 'react'
import { scrollTop } from './../jsfile';
const Bottom = () => {
  return (
    <div className="bg-[#EA2181] flex flex-col justufy-center items-center">
        <img src="/bottom-pfc.png"/>
        <div className='flex justify-center'>
        <button onClick={()=>{scrollTop()}} className='top_btn flex  self-center mt-11 mb-11 '>
      back to top 
     <img className='mt-0 md:mt-1 ml-2' src='/uparrow.png'/>

      </button>
      </div>
</div>
   
  )
}

export default Bottom