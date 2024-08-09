
/* eslint-disable */
'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../sections/Navbar'
import Dropdown  from './Dropdown';
import EventContainer from './EventContainer';
const NewNavbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [checkUrl,setCheckUrl]=useState(false)
  const [toogle,setToogle]=useState(false)



  function changeToggle(){  
    console.log(toggleDropdown)
  }

  
return (
  <nav className="navbar_main_container oveflow-hiden">
    <div className="hidden md:block">
      <div className=" flex justify-center  ">
        <div className="  flex justify-end  pb-2  w-[90%] ">
          <div className=" w-[110%]  flex justify-center   desktop_navbar  ">
            <div className="flex gap-6   pt-2 ">
              <a href="WhatTheFish" className=" flex flex-col justify-center ">
                <h1 className="menu_text  items-end">What the fish!</h1>
              </a>
              {/* <Dropdown /> */}
              <a href="FunHub" className=" flex flex-col justify-center ">
                <h1 className="menu_text ">FUN HUB</h1>
              </a>
              <a
                onClick={() => setToogle(!toogle)}
                className="cursor-pointer flex flex-col justify-center "
              >
                <h1 className="menu_text ">Events</h1>
              </a>

              <a href="/" className=" flex flex-col justify-center ">
                <img
                  src="/new_menu_logo_2.svg"
                  className=" items-center w-[150px] "
                />
              </a>
              <a href="News" className=" flex flex-col justify-center ">
                <h1 className="menu_text ">News</h1>
              </a>
              <a href="Contact" className=" flex flex-col justify-center ">
                <h1 className="menu_text ">Contact us</h1>
              </a>
              <a
                className="bg-[#FF0086] rounded flex flex-col justify-center items-center"
                href="Merchandise"
              >
                <div className="flex self-center items-center px-2">
                  <h1 className="menu_text ">Shop</h1>
                  <svg
                    width="24"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1867 5.73611L6.08923 1.63861L7.16937 0.558472L13.1109 6.5L7.16937 12.4415L6.08923 11.3614L10.1867 7.26389H0.888672V5.73611H10.1867Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </div>
      {toogle&&
        <div className="text-white absolute top-[100px] bg-black min-h-[40vh] min-w-[100vw] ">
          <div className="flex flex-col">
            <div className="self-center grid md:grid-cols-2  grid-1  gap-6 pb-6">
              <EventContainer link="#" title='#PFA' description="pinkfish Arena" />
              <EventContainer link="PFC" title='#PFC' description="Pinkfish Countdown" />
              <EventContainer link="PFF" title='#PFF' description="pinkfish music & ARTS festival" />
              <EventContainer link="Live" title='#PFL' description="Pinkfish Live" />
            </div>
          </div>
        </div>
        }
    </div>
    <div className="navbar_container_mob  flex flex-col md:hidden">
      <div className="flex">
        <div className="w-[90%] self-center flex justify-between">
          <a className="self-end" href="/">
            <img
              src="/new_menu_logo_2.svg"
              className="ml-6  w-[80px] items-center"
            />
          </a>
          <button
            type="button"
            onClick={() => {
              setToggleDropdown((prev) => !prev);
              changeToggle(); setToogle(false)
            }}
          >
            <svg
              clipPath="pt-6"
              width="26"
              height="17"
              viewBox="0 0 26 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.4565 2.46813H0.978261C0.443478 2.46813 0 2.00547 0 1.44757C0 0.889658 0.443478 0.427002 0.978261 0.427002H24.4565C24.9913 0.427002 25.4348 0.889658 25.4348 1.44757C25.4348 2.00547 24.9913 2.46813 24.4565 2.46813Z"
                fill="#F33288"
              />
              <path
                d="M24.4565 9.27184H0.978261C0.443478 9.27184 0 8.80919 0 8.25128C0 7.69337 0.443478 7.23071 0.978261 7.23071H24.4565C24.9913 7.23071 25.4348 7.69337 25.4348 8.25128C25.4348 8.80919 24.9913 9.27184 24.4565 9.27184Z"
                fill="#F33288"
              />
              <path
                d="M24.4565 16.0756H0.978261C0.443478 16.0756 0 15.6129 0 15.055C0 14.4971 0.443478 14.0344 0.978261 14.0344H24.4565C24.9913 14.0344 25.4348 14.4971 25.4348 15.055C25.4348 15.6129 24.9913 16.0756 24.4565 16.0756Z"
                fill="#F33288"
              />
            </svg>
          </button>
        </div>
      </div>
      {toggleDropdown && (
        <div className="dropdown items-center mt-6 ">
          <a
            href="WhatTheFish"
            className="menu_text_mob"
            onClick={() => setToggleDropdown(false)}
          >
            What the fish!{" "}
          </a>
          <a
            href="FunHub"
            className="menu_text_mob"
            onClick={() => setToggleDropdown(false)}
          >
            Fun Hub
          </a>
          <a
            href="News"
            className="menu_text_mob"
            onClick={() => setToggleDropdown(false)}
          >
            News{" "}
          </a>
          <a className="menu_text_mob" onClick={() => {setToggleDropdown(false); setToogle(!toogle)}}>Events</a>

          <Link
            href="Contact"
            className="menu_text_mob mb-4"
            onClick={() => setToggleDropdown(false)}
          >
            Contact us
          </Link>
          <button className="bg-[#FF0086] rounded flex  items-center p-2 gap-2 px-4">
            <Link
              href="Merchandise"
              className="menu_text_mob  "
              onClick={() => setToggleDropdown(false)}
            >
              Shop
            </Link>
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1867 5.73611L6.08923 1.63861L7.16937 0.558472L13.1109 6.5L7.16937 12.4415L6.08923 11.3614L10.1867 7.26389H0.888672V5.73611H10.1867Z"
                fill="white"
              />
            </svg>
          </button>
          {/* <Link href="/Contact" className='w-[100%] flex flex-col'  onClick={()=>setToggleDropdown(false)}>
        <button className="buy_ticket  self-center items-center p-5 mb-6 flex " type="button">Tickets
          <svg className=" " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
          </svg>
        </button>
      </Link> */}
        </div>
      )}
      {toogle&&
        <div className="text-white absolute top-[71px] self-center bg-black min-h-[40vh] min-w-[90vw] ">
          <div className="flex flex-col py-11">
            <div className="self-center grid md:grid-cols-2  grid-1  gap-6 pb-6">
              {/* <div className="basis-1/3">

              </div> */}
              <EventContainer link="#" title='#PFA' description="pinkfish Arena" />
              <EventContainer  link="PFC" title='#PFC' description="Pinkfish Countdown" />
              <EventContainer link="PFF" title='#PFF' description="pinkfish music & ARTS festival" />
              <EventContainer link="Live" title='#PFL' description="Pinkfish Live" />
            </div>
          </div>
        </div>
        }
    </div>
  </nav>
);
  }
export default NewNavbar;