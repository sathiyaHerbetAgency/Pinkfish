/* eslint-disable */

'use client'
import React from 'react'
import { scrollTop } from './../jsfile';
const Bottom = ({select}) => {
  return (
    <div className={`bg-[#FF0086] flex flex-col pt-6 justufy-center items-center relative top-[20%]`}>
      <div className="w-[70%] flex justify-center self-center md:[100%]">
        <img src="/bottom-pfc.png" alt="bottom" />
      </div>

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