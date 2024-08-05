/* eslint-disable */
import React from 'react'

const Brands = () => {
    const containerClass="border-solid border-[#D9D9D9] border rounded-2xl px-11 py-11"
  return (
    <div className="flex flex-col pt-11 pb-11 gap-6">
        <h1 className="text-[36px] font-[700] font-[Integral] text-center  text-[#fff]  uppercase">Our brands</h1>
        <div className="flex justify-center gap-5">
            <div className={containerClass}>
                <img src="./Home/pf_logo.png" alt="pinkfish logo"/>
            </div>
            <div  className={containerClass}>
                <img src="./Home/pc_logo.png" alt="pinkfish logo"/>
            </div>
            <div className={containerClass}>
                <img src="./Home/pl_logo.png" alt="pinkfish logo"/>
            </div>
        </div>
    </div>
  )
}

export default Brands