/* eslint-disable */
import React from 'react'

const Brands = () => {
    const containerClass="border-solid border-[#D9D9D9] flex flex-col items-center border rounded-2xl px-6 py-6 md:px-11 md:py-11"
  return (
    <div className="flex flex-col">
        <div  className="flex flex-col self-center w-[80%] pt-11 pb-11 gap-6">
            <h1 className="text-[36px] font-[700] font-[Integral] text-center  text-[#fff]  uppercase">Our brands</h1>
            <div className="grid md:grid-cols-4 gap-4 grid-cols-2 self-center ">
                <a href="PFF" className={containerClass}>
                    <img src="./Home/pf_logo.png" clasName="self-center" alt="pinkfish logo"/>
                </a>
                <a href="PFC" className={containerClass}>
                    <img src="./Home/pc_logo.png" alt="pinkfish logo"/>
                </a>
                <a href="Live" className={containerClass}>
                    <img src="./Home/pl_logo.png" alt="pinkfish logo"/>
                </a>
                <a href="#" className={containerClass}>
                    <img src="./Home/pf_arena_logo.png" alt="pinkfish logo"/>
                </a>
            </div>
        </div>
     </div>
    
  )
}

export default Brands