/* eslint-disable */

import React from 'react'
import "../../styles/contact.css";
import NewNavbar from './../../components/NewNavbar';
import Footer from './../../components/Footer';
import Hero from './../../components/PFF/Hero';
import Label from './../../components/PFF/Label';
import Heading from './../../components/PFF/Heading';
import Video from './../../components/PFF/Video';
import Gallery from './../../components/PFF/Gallery';
import Banner from './../../components/PFF/Banner';
import Bottom from './../../components/PFF/Bottom';
import Slider from './../../components/PFF/Slider';
 const PFF = () => {
  return (
    <div >
        <NewNavbar />
        <div className="bg-black">
            <Hero select={"PFF"} />
            <Label text={"see you in 2025"} />
           
            <div className="gradient-container-pff flex flex-col ">
              <div className=" flex flex-col md:max-w-[93vw]">
                <Slider />
                </div>
               <Heading text={"#PFF2023 official aftermovie"} page={"PFF"} />
               <Video  id={"F8k-yI4zWLg"}  />
               <Heading text={"#PFF gallery"} page={"PFC"} />
               <Gallery select={"PFF"} />
               <Banner  select={"PFF"}  />
               <Bottom   />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PFF