/* eslint-disable */

import React from 'react'
import "../../styles/contact.css";
import NewNavbar from './../../components/NewNavbar';
import Footer from './../../components/Footer';
import Hero from './../../components/Contdown2025/Hero';
import Label1 from './../../components/PFF/Label1';
import Heading from './../../components/PFC/Heading';
import Video from './../../components/PFC/Video';
import Gallery from './../../components/PFC/Gallery';
import Banner1 from './../../components/PFC/Banner1';
import Bottom from './../../components/PFF/Bottom';
import Timer from './../../components/PFF/Timer';
import Ticket from './../../components/PFC/Ticket';
import News from './../../components/PFC/News';
import GalleryMob from './../../components/PFC/GalleryMob';
import Banner from './../../components/PFF/Banner';
import Head from './../../components/head';
import Slider from './../../components/PFF/Slider';
import YoutubeEmbed from './../../components/js/Youtube';
import TicketsSlider from './../../components/Contdown2025/Components/tickets-slider';
import Header from './../../components/Contdown2025/Header';
 const PFC = () => {
  const description="Celebrate Countdown NYE 2024 with Pinkfish! Enjoy an exciting night filled with entertainment, drinks, and unforgettable memories as we welcome the new year together. "
  const title="Celebrate Countdown NYE 2024 with Pinkfish | Unforgettable Events "
  return (
    <div>
       <Head title={title} description={description} />
         <NewNavbar /> 
      {/*  <Header /> */}
        <div className="bg-black">
            <Hero select={"PFC"}  />
            <div className="bg-[linear-gradient(to_bottom,_#58388D_77%,_#022F87_100%)] flex flex-col justify-center py-24">                           
             <div className="flex  flex-col gap-4">
                  <div className='self-center'>
                    <div className="text-center ">
                      <h2 className="text-[24px] md:text-[35px] font-[InterBlack] text-white mb-4 tracking-wider uppercase">Relive the Energy</h2>
                    </div>
                      <YoutubeEmbed 
                      embedId="_8JoocpM24M"
                      title="Video Treaser"
                      type="PFC2025"
                      />
                  </div>
               </div>
              
             
              
            </div>
            <TicketsSlider />
        </div>
        <Footer />
    </div>
  )
}

export default PFC
