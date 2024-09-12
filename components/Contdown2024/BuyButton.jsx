/* eslint-disable */

import React from 'react'

const BuyButton = ({text,link,check}) => {
    const now="bg-[#ff0086]";
    const later="bg-[#00b14f]";
  return (
    <a href={link} className={`${check==="now"?now:later} p-3 text-white rounded-lg font-[Babas] text-[1.2em]`}>
    <button>{text}</button>
    </a>
  )
}

export default BuyButton