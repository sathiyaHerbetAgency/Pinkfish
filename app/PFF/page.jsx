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
 const PFF = () => {
  return (
    <div >
        <NewNavbar />
        <div className="bg-white">
            <Hero select={"PFF"} />
            <Label text={"see you in 2025"} />
            <div className="gradient-container-pff">
               <Heading text={"#PFF2023 official aftermovie"} page={"PFF"} />
               <Video  id={"F8k-yI4zWLg"}  />
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