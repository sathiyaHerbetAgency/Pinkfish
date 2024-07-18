/* eslint-disable */

import React from 'react'
import "../../styles/contact.css";
import NewNavbar from './../../components/NewNavbar';
import Footer from './../../components/Footer';
import Hero from './../../components/PFF/Hero';
import Label1 from './../../components/PFF/Label1';
import Heading from './../../components/PFF/Heading';
import Video from './../../components/PFF/Video';
import Gallery from './../../components/PFF/Gallery';
import Banner from './../../components/PFF/Banner';
import Bottom from './../../components/PFF/Bottom';
import Timer from './../../components/PFF/Timer';


 const PFC = () => {
  return (
    <div>
        <NewNavbar />
        <div className="bg-white">
            <Hero select={"PFC"} />
            <Label1 text={"are you ready, lavas?"} />
            <div className="gradient-container-pfc">
                <Timer />
               <Heading text={"#PFC2023 official aftermovie"} page={"PFC"}  />
               <Video  page={"PFF"} />
               <Gallery select={"PFC"} />
               <Banner  select={"PFC"} />
               <Bottom   />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PFC