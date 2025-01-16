/* eslint-disable */

import React from 'react'
import "../../styles/contact.css";
import NewNavbar from './../../components/NewNavbar';
import Footer from './../../components/Footer';
import Hero from './../../components/PFC/Hero';
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
 const PFC = () => {
  const description="Celebrate Countdown NYE 2024 with Pinkfish! Enjoy an exciting night filled with entertainment, drinks, and unforgettable memories as we welcome the new year together. "
  const title="Celebrate Countdown NYE 2024 with Pinkfish | Unforgettable Events "
  return (
    <div>
       <Head title={title} description={description} />
        <NewNavbar />
        <div className="bg-black">
            <Hero select={"PFC"}  />
            <Label1 text={"See You in 2026"} />
            <div className="gradient-container-pfc flex flex-col">
                {/* <Banner1 /> */}
                <Slider select="PFC" />
                {/* <Timer /> */}
                {/* <Ticket /> */}
                {/* <img src="./PFC/dots.png" alt="decoration" className="self-center" /> */}
               {/* <Heading type="2" /> */}
               <Heading type="2" text={"#PFC2023 official aftermovie"} page={"PFC"}  />
               <Video  id={"rlJu8PURolU"}  />
               <div className="md:hidden">
                <GalleryMob check="true" />
              </div>
              <div className="md:block hidden">
                <Gallery />
              </div>
               {/* <News /> */}
               <Banner select="PFC" />
               
               <Bottom   />
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default PFC
