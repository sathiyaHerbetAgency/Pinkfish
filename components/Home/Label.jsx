/* eslint-disable */

import "../../styles/home.css"
import Marquee from "react-fast-marquee";

const Label = ({color,direction}) => {

  const text1="Experience music, dance and art in new and exciting ways"
  const text2="Welcome to Malaysia's Premier Music Festival"

  return(
  <>

  <div id="brand" className={`${color==="pink" ? "horizantal_pink_container_live_pff ":"horizantal_gray_container_live_pff "} `}>
  <Marquee direction={direction}>
  <div className="flex items-center justify-around min-w-[100vw] md:gap-6 gap-2 px-3 md:py-1 py-6">

      <svg width="65" height="27" className="" viewBox="0 0 65 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58.1454 12.6491C63.9781 11.1144 64.4533 6.81296 64.4853 5.844C63.2122 5.20615 55.8844 2.16925 50.2362 11.9554L50.1532 11.8965C49.1812 11.2109 48.1884 10.5385 47.2069 9.90167C44.6727 8.22375 39.5253 5.10356 33.5209 3.04883C29.3798 1.63093 25.4367 0.912842 21.7996 0.912842C20.8412 0.912842 19.89 0.963626 18.9739 1.06316C13.4663 1.6614 8.71661 4.06249 4.85664 8.19734C2.5373 10.4755 1.13644 12.6806 0.504692 13.7978L0.10376 14.5159L0.53584 15.2076C1.16759 16.2142 2.56286 18.209 4.81191 20.2576C7.60326 22.7989 10.7876 24.6017 14.2769 25.6143C16.4469 26.2451 18.7479 26.564 21.1151 26.564C23.7404 26.564 26.4982 26.1719 29.3103 25.398C32.4195 24.5428 35.6789 23.2021 38.9973 21.4124C42.6025 19.4674 46.3699 16.9444 50.1923 13.9146L50.2746 13.8496C56.3037 23.261 63.5021 19.7569 64.7472 19.0378C64.677 18.0718 64.0316 13.807 58.1454 12.6481V12.6491ZM38.2785 19.2561C35.0663 20.9879 31.9187 22.2849 28.9213 23.1097C26.2338 23.8481 23.6078 24.2228 21.1143 24.2228C18.8853 24.2228 16.7225 23.9232 14.6867 23.3321C11.4377 22.3885 8.47541 20.7136 5.88373 18.3542C4.24805 16.8642 3.11075 15.4148 2.43348 14.4398C3.11714 13.3479 4.29358 11.6994 6.03787 9.99816L6.66243 9.37859L6.64965 9.35726C10.7117 5.32092 15.824 3.27634 21.8571 3.27634C25.3433 3.27634 29.105 3.95889 33.0385 5.30365C38.0286 7.01102 42.3877 9.43953 45.3579 11.3257L45.3548 11.3338L46.0744 11.7959C46.2956 11.9381 46.5176 12.0823 46.7404 12.2286C47.1941 12.5343 47.5655 12.7933 47.8474 12.9944C44.5752 15.491 41.3622 17.5935 38.2793 19.2561H38.2785Z" fill="white"/>
        <path d="M10.1959 10.828C9.43315 10.8523 8.83015 11.6588 8.84932 12.6288C8.86929 13.5988 9.50343 14.3656 10.2662 14.3412C11.0289 14.3168 11.6319 13.5104 11.6127 12.5404C11.5935 11.5704 10.9594 10.8036 10.1959 10.828Z" fill="white"/>
        <path d="M26.1236 9.25338C24.527 8.00916 22.9393 7.91877 22.135 7.97565L22.1973 9.39558C22.8714 9.34784 24.2028 9.42401 25.5405 10.4661C26.6707 11.3467 27.3136 12.5381 27.641 13.3263C27.2848 14.1266 26.586 15.3272 25.3672 16.1438C24.0215 17.0457 22.73 17.0132 22.0799 16.9147L21.9465 18.3265C22.1566 18.359 22.4225 18.3854 22.7308 18.3854C23.5654 18.3854 24.7091 18.1924 25.8888 17.4022C27.5524 16.287 28.4086 14.5766 28.7704 13.6554L28.891 13.3486L28.7775 13.0378C28.4493 12.14 27.6682 10.4549 26.126 9.25338H26.1236Z" fill="white"/>
      </svg>
    <p className="text-[16px] md:text-[20px] font-[Integral] text-center drop-shadow-2xl  text-[#fff]  uppercase">{text1}</p>
    <a className="" arial-label="What The Fish Page" href="WhatTheFish" >
          <button className="text-[12px] md:p-2 p-1 font-[Sofia] text-center  text-[#fff] border-2 border-solid border-[#fff]  rounded-md">Find Out More</button>
    </a>
    <p className="text-[16px] md:text-[20px] font-[200] font-[Integral] text-center  text-[#fff]  uppercase">{text2}</p>
  </div>

  </Marquee>
  </div>
  </>
)
}
export default Label;
