/* eslint-disable */
import Link from 'next/link';

const Footer = () => (
  <div className=''>
  <div className="pb-11 md:block hidden pt-11 ">
  <hr className="hr_line_footer " />
  <div className="flex flex-col gap-11 mt-11 ">
    <div className=" flex flex-col md:flex-row justify-between  w-[90%] md:w-[80%] self-center  gap-11 ">
      <div className='flex justify-between basis-3/5'>
    <div className="flex flex-col  gap-5 md:items-start items-center ">
        
       <div className='flex flex-col gap-6'>
        <h2 className="home_bottom_header ">as seen on</h2>
        <div className="flex w-[350px] gap-6 ">
          {/* <img  src='/home_bottom_logo_mob_1.svg'/> */}
          <img className="w-[15%]" src='/trb.png'/>
          <img className='w-[15%]' src='/home_bottom_logo_mob_3.svg'/>
          <img className="w-[15%]" src='/home_bottom_logo_mob_4.svg'/>

        </div>
        <div className="flex gap-6 ">
          <img src='/logo_gf_media.png'/>
          <img className="object-none" src='/home_bottom_logo_mob_6.svg'/>
          <img src='/home_bottom_logo_mob_7.svg'/>

        </div>
        <div className="flex gap-6 ">
          <img src='/logo_yl.png'/>
          <img className="object-none" src='/logo_mm.png'/>
          
          <img src='/logo_juice.png'/>
        </div>
      
        </div>
        <>
        <h2 className="home_bottom_header">Follow us</h2> 
     <div className="flex items-center  gap-6 md:gap-3">

            <a href='https://www.facebook.com/pinkfishfestival/' target="_blank" className="icon_text order-2 md:order-1">
            <img className='' src='/fb.svg'/>

            </a>
        
          <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank" className="icon_text order-2 md:order-1 ">
          <img src='/yt.svg'/>

            </a>
            <a href='https://www.instagram.com/pinkfishfestival/' target="_blank" className="icon_text order-2 md:order-1">
            <img src='/insta.svg'/>
            </a>
           
            <a href=' https://www.tiktok.com/@pinkfishfestival' target="_blank" className="icon_text text-center order-2 md:order-1">
            <img src='/tiktok.svg'/>

</a> 
        
        </div></>
      </div>
      <div className="flex flex-col   justify-center mt-11 gap-5 ">
      <img src='/logo_footer.png' alt='logo'/>
      </div>
      </div>
      <div className="flex flex-col   text-white md:items-start gap-2  ">
      <a className='flex justify-end w-full' href="/WhatTheFish">
        <p className="cursor-pointer icon_text  ">What The Fish</p>
        </a>
        <a className='flex justify-end w-full' href="/FunHub">
        <p className="cursor-pointer icon_text  ">Fun Hub</p>
        </a>
        <a className='flex justify-end w-full' href="Gallery">
        <p className="cursor-pointer icon_text  ">Festival Oasis</p>
        </a>
        <a className='flex justify-end w-full' href="/News">
        <p className="cursor-pointer icon_text  ">News</p>
        </a>
       
        <Link className='flex justify-end w-full' href="Contact">
        <p className="cursor-pointer icon_text  ">Contact Us </p>
        </Link>
      
       
      </div>
     
    </div>
    <div className='flex flex-col  md:flex-row justify-between  w-[90%] md:w-[80%] self-center  gap-11'>
   
  <p className="footer_bottom_text ">Copyright- Pinkfish lifestyle and Entertainment in Malaysia </p>

  <div className='flex gap-2 text-white items-center' >
  <Link href="PrivacyPolicy">
        <p className="cursor-pointer icon_text  ">Privacy Policy</p>
        </Link>
        |
  <a href="Terms&Condition">
        <p className="cursor-pointer icon_text  ">Terms & Conditions</p>
        </a>
        
        </div>
  </div>
  </div>
 
</div>
<div className='md:hidden'>
  <div className='flex flex-col mt-11 '>
  <div className='w-[80%] self-center flex flex-col gap-6'>
<div className='flex flex-col gap-6 self-center mb-6'>
        <h2 className="home_bottom_header_seen text-center mt-6">as seen on</h2>
        {/* <div className="flex gap-6">

          <img className="w-[15%]" src='/trb.png'/>

          <img src='/home_bottom_logo_mob_3.svg'/>
         
          <img className="object-none" src='/home_bottom_logo_mob_4.svg'/>
        </div>
        <div className="flex gap-6 items-center">
    
          <img src='/logo_gf_media.png'/>
          <img src='/home_bottom_logo_mob_7.svg'/>
         
          <img className="object-none" src='/home_bottom_logo_mob_6.svg'/>

        </div>
        
        <div className="flex gap-6 ">
          <img src='/logo_yl.png'/>
         

        </div>
        <div className="flex gap-6 ">
          <img className="object-none" src='/logo_mm.png'/>

          <img src='/logo_juice.png'/>
         

        </div> */}
        <div className="flex  gap-3 grid grid-cols-3">
          <img className="" src='/trb.png'/>
          <img src='/home_bottom_logo_mob_3.svg'/>
          <img className="object-none" src='/home_bottom_logo_mob_4.svg'/>
          <img src='/logo_gf_media.png'/>
          <img src='/home_bottom_logo_mob_7.svg'/>
          <img className="object-" src='/home_bottom_logo_mob_6.svg'/>
          <img src='/logo_yl.png'/>
          <img className="object-non" src='/logo_mm.png'/>
          <img className='object-non' src='/logo_juice.png'/>
         
        </div>

      </div>
  <hr className="hr_line_footer w-[110%] self-center " />
  <div className="flex flex-col text-white mt-11 mb-11  gap-1  ">
      <a className='flex justify-center' href="WhatTheFish">
        <p className="cursor-pointer icon_text  ">What The Fish</p>
        </a>
        <a className='flex justify-center w-full' href="FunHub">
        <p className="cursor-pointer icon_text  ">Fun Hub</p>
        </a>
        <a className='flex justify-center w-full' href="News">
        <p className="cursor-pointer icon_text  ">News</p>
        </a>
        <a className='flex justify-center w-full' href="Gallery">
        <p className="cursor-pointer icon_text  ">Festival Oasis</p>
        </a>
        <Link className='flex justify-center w-full' href="Contact">
        <p className="cursor-pointer icon_text  ">Contact Us </p>
        </Link>
       
      </div>
      <div className="flex flex-col gap-5 md:items-start items-center mb-11 ">
        <h2 className="address_title icon_text">Follow us</h2>
        <div className="flex items-center  gap-6 md:gap-3">

            <a href='https://www.facebook.com/pinkfishfestival/' target="_blank" className="icon_text order-2 md:order-1">
            <img src='/fb.svg'/>

            </a>
        
          <a href='https://www.youtube.com/@Pinkfishfestival' target="_blank" className="icon_text order-2 md:order-1 ">
          <img src='/yt.svg'/>

            </a>
            <a href='https://www.instagram.com/pinkfishfestival/' target="_blank" className="icon_text order-2 md:order-1">
            <img src='/insta.svg'/>
            </a>
           
            <a href='https://www.tiktok.com/@pinkfishfestival' target="_blank" className="icon_text text-center order-2 md:order-1">
            <img src='/tiktok.svg'/>

</a> 
        
        </div>
        </div>
        <hr className="hr_line_footer w-[110%] self-center  " />
        <div className="flex flex-col gap-5 md:items-start items-center mt-6">
      <img src='/logo_footer.png' className='w-1/2' alt='logo'/>
      </div>
        <div className='flex flex-col md:flex-row justify-between  mb-11 self-center  gap-3'>
   
   <p className="footer_bottom_text ">Copyright- Pinkfish lifestyle and Entertainment in Malaysia </p>
 
   <div className='flex gap-2 text-white items-center' >
   <Link href="PrivacyPolicy">
         <p className="cursor-pointer footer_bottom_text  ">Privacy Policy</p>
         </Link>
         |
   <a href="Terms&Condition">
         <p className="cursor-pointer footer_bottom_text ">Terms & Conditions</p>
         </a>
         
         </div>
   </div>
        </div>
</div>
</div>
</div>
);
export default Footer;
