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
import Head from './../../components/head';
 const PFF = () => {
  const description="Discover the vibrant Pinkfish Music & Arts Festival, featuring live acts and art installations from local and international artists. Join us for a unique creative experience! "
  const title="Discover the Best Arts & Music Festival Events - Dates & Locations | Pinkfish "
  return (
    <div >
      <Head title={title} description={description} />
        <NewNavbar />
        <div className="bg-black">
            <Hero select={"PFF"} />
            <Label text={"see you in 2025"} />
           
            <div className="gradient-container-pff flex flex-col ">
              <div className=" flex flex-col self-center md:max-w-[100vw]">
                <Slider select="PFF" />
               
               <Heading text={"#PFF2023 official aftermovie"} page={"PFF"} />
               <Video id={"F8k-yI4zWLg"} />
               </div>
               <Heading text={"Music & Arts Celebration "} page={"PFC"} description={"Join us for a weekend of music, art, and self-expression at the Pinkfish Festival. This vibrant celebration brings together talented artists and musicians from around the world to share their unique styles and inspire others. From acoustic jams to drum circles, and from local legends to international stars, our lineup is designed to delight and energize. With a relaxed and welcoming atmosphere, Pinkfish Festival is the perfect place to let your creativity shine and connect with like-minded individuals. "} />
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