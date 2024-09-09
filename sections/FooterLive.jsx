/* eslint-disable */
'use client'
import Link from 'next/link';

const Footer = () => (
  <div className="pb-11 ">
    <hr className="hr_line_footer_live " />
    <div className="flex flex-col mt-11 ">
      <div className=" flex flex-col md:flex-row justify-between w-[90%] md:w-[80%] self-center  gap-11 ">
        <div className="flex flex-col gap-4">
          <h3 className="footer_heading_live">join the party</h3>
        <div className='flex gap-4 '>
            <div className=' buy_ticket_footer_live flex justify-center'>
            <Link href="/Live/Contact">
              <button className=" flex    " type="button">Reach Out 
                <svg className="  md:mt-2 ml-2 mt-1  " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
                </svg>
              </button>
            </Link>
            </div>
            <div className=' browse_show_live flex justify-center'>
            <Link href="/Live/Events">

              <button className=" flex  " type="button">Browse Shows
                <svg className=" md:mt-2 ml-2 mt-1" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
                </svg>
              </button>
            </Link>
          </div>
          </div>
        </div>
        <div className="flex flex-col text-white md:items-start  items-center">
        <Link href="/" arial-label="Home" >
          <p className="cursor-pointer icon_text_live  mt-3">Main Home</p>
          </Link>
          <Link href="/Live/Events">
          <p className="cursor-pointer icon_text_live  mt-2">Events</p>
          </Link>
          <Link href="/Live/Terms&Condition">
          <p className="cursor-pointer icon_text_live  mt-2">Terms & Conditions</p>
          </Link>
          <Link href="/Live/Contact">
          <p className="cursor-pointer icon_text_live  mt-2">Contact </p>
          </Link>
          
        </div>
        <div className="flex flex-col gap-5 md:items-start items-center ">
          <h3 className="address_title icon_text_live">Follow us</h3>
          <div className="flex  flex-col gap-6 md:gap-3">
            <div className="flex md:justify-between gap-2 text-white">
              <a href='https://www.facebook.com/pinkfishfestival/' target="_blank"  arial-label="Facebook" className="icon_text_live order-2 md:order-1">Facebook</a>
              <svg className="mt-1 ml-1 order-1 md-order-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.04 0H0.853333C0.426667 0 0 0.426667 0 0.853333V15.04C0 15.5733 0.426667 16 0.853333 16H8.42667V9.81333H6.4V7.36H8.42667V5.65333C8.21333 4.05333 9.38667 2.66667 10.9867 2.45333C11.2 2.45333 11.3067 2.45333 11.52 2.45333C12.16 2.45333 12.8 2.45333 13.3333 2.56V4.69333h32.0533C11.0933 4.69333 10.88 5.12 10.88 5.86667V7.46667h33.2267L12.9067 9.92h30.88V16h34.9333C15.4667 16 15.7867 15.5733 15.7867 15.1467V0.853333C15.8933 0.426667 15.4667 0 15.04 0Z" fill="white" />
              </svg>
            </div>
            <div className="flex md:justify-between gap-2  text-white">
            <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank" arial-label="Youtube" className="icon_text_live order-2 md:order-1 ">Youtube</a>
              <svg className="mt-1 ml-1 order-1 md-order-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8222 2.71106C15.7333 2.17772 15.5556 1.5555 15.2 1.11106C14.7556 0.666612 14.2222 0.399946 13.6 0.399946C11.3778 0.222168 8 0.222168 8 0.222168C8 0.222168 4.62222 0.222168 2.4 0.399946C1.77778 0.399946 1.24444 0.666612 0.8 1.11106C0.444444 1.5555 0.266667 2.17772 0.177778 2.71106C0.0888889 3.59995 0 4.48883 0 5.37772V6.62217C0 7.51106 0.0888889 8.39995 0.177778 9.28883C0.266667 9.82217 0.444444 10.4444 0.8 10.8888C1.24444 11.3333 1.95556 11.5999 2.57778 11.5999C3.82222 11.7777 8 11.7777 
                8 11.7777C8 11.7777 11.3778 11.7777 13.6 11.5999C14.2222 11.5999 14.7556 11.3333 15.2 10.8888C15.5556 10.4444 15.7333 9.82217 15.8222 9.28883C15.9111 8.39995 16 7.51106 16 6.62217V5.37772C16 4.48883 15.9111 3.59995 15.8222 2.71106ZM6.31111 8.13328V3.51106L10.6667 5.82217L6.31111 8.13328Z" fill="white" />
              </svg>
            </div>
            <div className="flex md:justify-between gap-2  text-white">
              <a href='https://www.instagram.com/pinkfishfestival/' target="_blank" arial-label="Instagram" className="icon_text_live order-2 md:order-1">Instagram</a>
              <svg className="mt-1 ml-1 order-1 md-order-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.70545 0C3.45867 0.00383629 2.26405 0.50082 1.38243 1.38243C0.50082 2.26405 0.00383629 3.45867 0 4.70545L0 11.2945C0.00383629 12.5413 0.50082 13.736 1.38243 14.6176C2.26405 15.4992 3.45867 15.9962 4.70545 16h31.2945C12.5413 15.9962 13.736 15.4992 14.6176 14.6176C15.4992 13.736 15.9962 12.5413 16 11.2945V4.70545C15.9962 3.45867 15.4992 2.26405 14.6176 1.38243C13.736 0.50082 12.5413 0.00383629 11.2945 0L4.70545 0ZM4.70545 1.45455h31.2945C12.1567 1.45455 12.9836 1.79705 13.5933 2.40671C14.2029 3.01638 14.5455 3.84326 14.5455 4.70545V11.2945C14.5455 12.1567 14.2029 12.9836 13.5933 13.5933C12.9836 14.2029 12.1567 14.5455 11.2945 14.5455H4.70545C3.84326 14.5455 3.01638 14.2029 2.40671 13.5933C1.79705 12.9836 1.45455 12.1567 1.45455 11.2945V4.70545C1.45455 3.84326 1.79705 3.01638 2.40671 2.40671C3.01638 
                1.79705 3.84326 1.45455 4.70545 1.45455ZM12.2982 3.04727C12.1667 3.04584 12.0377 3.08361 11.9278 3.15577C11.8178 3.22794 11.7319 3.33122 11.6809 3.45245C11.6299 3.57367 11.6162 3.70734 11.6415 3.83639C11.6668 3.96545 11.73 4.08403 11.823 4.17703C11.916 4.27002 12.0346 4.3332 12.1636 4.3585C12.2927 4.38381 12.4263 4.37009 12.5476 4.3191C12.6688 4.26811 12.7721 4.18216 12.8442 4.07222C12.9164 3.96227 12.9542 3.83332 12.9527 3.70182C12.9527 3.52822 12.8838 3.36174 12.761 3.23898C12.6383 3.11623 12.4718 3.04727 12.2982 3.04727ZM8 3.63636C7.13695 3.63636 6.29329 3.89229 5.57569 4.37177C4.8581 4.85125 4.2988 5.53276 3.96853 6.33011C3.63825 7.12746 3.55184 8.00484 3.72021 8.8513C3.88858 9.69777 4.30418 10.4753 4.91444 11.0856C5.52471 11.6958 6.30223 12.1114 7.1487 12.2798C7.99516 12.4482 8.87254 12.3617 9.66989 
                12.0315C10.4672 11.7012 11.1487 11.1419 11.6282 10.4243C12.1077 9.70671 12.3636 8.86305 12.3636 8C12.3636 6.84269 11.9039 5.73278 11.0856 4.91444C10.2672 4.0961 9.15731 3.63636 8 3.63636ZM8 5.09091C8.57536 5.09091 9.13781 5.26152 9.6162 5.58118C10.0946 5.90083 10.4675 6.35517 10.6876 6.88674C10.9078 7.41831 10.9654 8.00323 10.8532 8.56754C10.7409 9.13184 10.4639 9.6502 10.057 10.057C9.6502 10.4639 9.13184 10.7409 8.56754 10.8532C8.00323 10.9654 7.41831 10.9078 6.88674 10.6876C6.35517 10.4675 5.90083 10.0946 5.58118 9.6162C5.26152 9.13781 5.09091 8.57536 5.09091 8C5.09091 7.22846 5.3974 6.48852 5.94296 5.94296C6.48852 5.3974 7.22846 5.09091 8 5.09091Z" fill="white"
                />
              </svg>
            </div>
            <div className="flex md:justify-between  gap-2  text-white">
             
              <a href='https://www.tiktok.com/@pinkfishfestival' target="_blank" arial-label="Tiktok" className="icon_text_live text-center order-2 md:order-1">Tiktok</a>
              <svg className="mt-1 ml-1 order-1 md-order-2" width="16" height="16" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.703 8.3575C23.4546 8.09047 22.3242 7.43169 21.4765 6.47719C20.6288 5.5227 20.1082 4.32239 19.9905 3.05125V2.5h35.6842V19.59C15.6816 20.3466 15.4419 21.0833 14.9989 21.6967C14.5559 22.3101 13.9319 22.7692 13.2145 23.0096C12.4971 23.25 11.7225 23.2596 10.9993 23.0371C10.2762 22.8145 9.641 22.371 9.18297 21.7688C8.71782 21.1565 8.45979 20.412 8.4463 19.6432C8.43281 18.8743 8.66455 18.1212 9.10793 17.493C9.5513 16.8648 10.1833 16.3941 10.9122 16.1493C11.6411 15.9044 12.429 15.8981 
13.1617 16.1312V11.7562C11.5278 11.5304 9.86411 11.8209 8.4034 12.5871C6.9427 13.3533 5.75801 14.5569 5.01506 16.0296C4.27211 17.5023 4.00805 19.1704 4.25982 20.8005C4.51159 22.4306 5.26659 23.9413 6.41922 25.1213C7.51841 26.2459 8.92782 27.0176 10.4675 27.3377C12.0072 27.6577 13.6074 27.5117 15.0638 26.9183C16.5201 26.3249 17.7666 25.3109 18.6441 24.0059C19.5217 22.7008 19.9904 21.1639 19.9905 19.5913V10.8588C21.7308 12.1029 23.8174 12.7701 25.9567 12.7663V8.4875C25.5354 8.48802 25.1152 8.44445 24.703 8.3575Z" fill="white"/>
</svg>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3 className="footer_bottom_text_live mt-11">Copyright © 2024. All rights reserved</h3>
  </div>
);
export default Footer;
