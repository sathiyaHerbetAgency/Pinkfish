
/* eslint-disable */
'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../sections/Navbar'
const NewNavbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [checkUrl,setCheckUrl]=useState(Boolean)


  function changeToggle(){  
    console.log(toggleDropdown)
   
  }

  
return (

  <nav className="navbar_main_container oveflow-hiden">
   

    <div className='hidden md:block'>
    <div className=' flex justify-center  '>
    <div className="  flex justify-end  pb-2  w-[90%] ">
      <div className=' w-[110%]  flex justify-center   desktop_navbar  items-center'>
      
      <div className="flex gap-6   items-center ">
      <a href="WhatTheFish">
          <h1 className="menu_text  items-end">What the fish!</h1>
        </a>
        <a href="FunHub">
          <h1 className="menu_text ">FUN HUB</h1>
        </a>
        <a href="/" className='flex mt-3 '>
        <img  src="/new_menu_logo_2.svg" className=" items-center w-[150px] " />
      </a>
        <a href="News">
          <h1 className="menu_text ">News</h1>
        </a>
        <a href="Contact">
          <h1 className="menu_text ">Contact us</h1>
        </a>
      </div>
     
    </div>
    {/* <Link className=' buy_ticket flex self-center items-center  absolute '  href="/Contact">
        <button className="  " type="button">Tickets
         
        </button>
        <svg className="self-center " width="13" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
          </svg>
      </Link> */}
    </div>
    </div>
    </div>
    <div className='navbar_container_mob  '>
      <div className='flex'>
      <div className='w-[90%] self-center flex justify-between'>
    <a className='self-end' href="/">
    <img  src="/new_menu_logo_2.svg" className="ml-6  w-[80px] items-center" />
      </a>
      <button type='button' onClick={()=>{  setToggleDropdown(((prev)=>!prev)); changeToggle()}}>
      <svg clipPath='pt-6' width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4565 2.46813H0.978261C0.443478 2.46813 0 2.00547 0 1.44757C0 0.889658 0.443478 0.427002 0.978261 0.427002H24.4565C24.9913 0.427002 25.4348 0.889658 25.4348 1.44757C25.4348 2.00547 24.9913 2.46813 24.4565 2.46813Z" fill="#F33288"/>
<path d="M24.4565 9.27184H0.978261C0.443478 9.27184 0 8.80919 0 8.25128C0 7.69337 0.443478 7.23071 0.978261 7.23071H24.4565C24.9913 7.23071 25.4348 7.69337 25.4348 8.25128C25.4348 8.80919 24.9913 9.27184 24.4565 9.27184Z" fill="#F33288"/>
<path d="M24.4565 16.0756H0.978261C0.443478 16.0756 0 15.6129 0 15.055C0 14.4971 0.443478 14.0344 0.978261 14.0344H24.4565C24.9913 14.0344 25.4348 14.4971 25.4348 15.055C25.4348 15.6129 24.9913 16.0756 24.4565 16.0756Z" fill="#F33288"/>
</svg>
</button>

</div> 
</div>
{toggleDropdown &&
<div className="dropdown items-center mt-6 ">
<a href="WhatTheFish" className="menu_text_mob" onClick={()=>setToggleDropdown(false)}>What the fish! </a>
     <a href="FunHub" className="menu_text_mob" onClick={()=>setToggleDropdown(false)}>Fun Hub</a>
<a href="News" className="menu_text_mob" onClick={()=>setToggleDropdown(false)}>News </a>
   
    <Link href="Contact" className="menu_text_mob mb-4" onClick={()=>setToggleDropdown(false)}>Contact us</Link>
    {/* <Link href="/Contact" className='w-[100%] flex flex-col'  onClick={()=>setToggleDropdown(false)}>
        <button className="buy_ticket  self-center items-center p-5 mb-6 flex " type="button">Tickets
          <svg className=" " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
          </svg>
        </button>
      </Link> */}
    </div>
} 
    </div>
    
  </nav>

);
  }
export default NewNavbar;