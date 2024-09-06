import Link from 'next/link';
import '../styles/live.css'
const Hero2 = () => (
  <section className="hero_container_live flex mb-2 md:mb-11 ">
      <img src='Live/HEROIMG_Mob.webp' className='md:hidden mt-0 mb-12 object-fill ' alt='hero banner' />
    <div className='  header_container flex justify-center'>
    
      <div className='flex flex-col md:flex-row items-center md:justify-between md: p-4 md:w-[90%]'>
      {/* <h1 className="absolute banner_img_5_live  text-center py-6 hidden md:block text-white ">
        Zepp KL
        </h1> */}
        <div className='md:basis-3/4 flex justify-center mb-11'>
        <h1 className='hero_heading_live pt-3 mb-11 md:mb-24 max-w-[90%] text-center'>pinkfish live </h1>
        </div>
        <div className='flex justify-center mb-11 md:basis-1/4'>
        <Link href='#Events' arial-label="Event Page" className="" >
          <svg className='cursor-pointer pb-5 w-[84px] md:w-[131.14px] h-[84px] md:h-[131.14px] mt-6 md:mt-[-45px]'  viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M78.42 0C121.679 0 156.84 35.1613 156.84 78.42C156.84 121.679 121.679 156.84 78.42 156.84C35.1613 156.84 0 121.679 0 78.42C0 35.1613 35.1613 0 78.42 0ZM78.42 145.898C115.624 145.898 145.898 115.624 145.898 78.42C145.898 41.2161 115.624 10.9423 78.42 10.9423C41.2161 10.9423 10.9423 41.2161 10.9423 78.42C10.9423 115.624 41.2161 145.898 78.42 145.898Z" fill="white" />
            <path d="M78.42 47.4168C81.4109 47.4168 83.8911 49.8971 83.8911 52.888V96.6573C83.8911 99.6482 81.4109 102.128 78.42 102.128C75.429 102.128 72.9488 99.6482 72.9488 96.6573V52.888C72.9488 49.8971 75.429 47.4168 78.42 47.4168Z" fill="white" />
            <path d="M56.5389 76.597C57.925 76.597 59.311 77.1076 60.4052 78.2018L78.4236 96.2199L96.4423 78.2018C98.5578 76.0863 102.059 76.0863 104.175 78.2018C106.29 80.3173 106.29 83.8189 104.175 85.9344L82.2899 107.819C80.1744 109.934 76.6728 109.934 74.5573 107.819L52.6727 85.9344C50.5571 83.8189 50.5571 80.3173 52.6727 78.2018C53.7669 77.1076 55.1529 76.597 56.5389 76.597Z" fill="white" />
          </svg>
        </Link>
        </div>
      </div>
    </div>
  </section>
);
export default Hero2;
