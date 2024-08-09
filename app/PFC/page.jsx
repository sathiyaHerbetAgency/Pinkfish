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
import Banner from './../../components/PFC/Banner';
import Bottom from './../../components/PFF/Bottom';
import Timer from './../../components/PFF/Timer';
import Ticket from './../../components/PFC/Ticket';
import News from './../../components/PFC/News';
import GalleryMob from './../../components/PFC/GalleryMob';



 const PFC = () => {
  return (
    <div>
        <NewNavbar />
        <div className="bg-black">
            <Hero  />
            {/* <Label1 text={"are you ready, lavas?"} /> */}
            <div className="gradient-container-pfc flex flex-col">
                <Banner />

                <Timer />
                <Ticket />
                <img src="./PFC/dots.png" alt="decoration" className="self-center" />
               <Heading type="2" />
               <Video  id={"rlJu8PURolU"}  />
               <div className="">
                <GalleryMob check="true" />
              </div>
              {/* <div className="md:block hidden">
                <Gallery />
              </div> */}
               <News />
               
               <Bottom  type="PFC" />
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default PFC