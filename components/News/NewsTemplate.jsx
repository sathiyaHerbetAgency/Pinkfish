/* eslint-disable */

import React from 'react'
import {NewsData}  from './NewsData';
const NewsTemplate = ({header,paragraph,link,img}) => { 
  return (
   <>
    {NewsData.map((each,index)=>
        <div key={index+1} className='basis-1/3 border rounded border-white flex flex-col gap-4'>
        <img src={each.img} alt='news image' />
        <div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
        <h1 className='news_card_header '>{each.heading}</h1>
        <p className='news_card_text'>{each.description}</p>
        {each.description2&& <p className='news_card_text'>{each.description2}</p>}
        <a href={each.link} target='_blank'>
        <button type='button' className='news_read_btn'>Read More</button>
        </a>
        </div>
        </div>
        )}
    </>
    )
}

export default NewsTemplate;