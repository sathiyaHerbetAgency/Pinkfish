/* eslint-disable */

import React from 'react'
import "../../styles/contact.css";
import NewNavbar from './../../components/NewNavbar';
import Footer from './../../components/Footer';
import Hero from './../../components/PFA/Hero'
import LineUp from './../../components/PFA/LineUp'
import Calendar from './../../components/PFA/Calendar';
import TicketGa from './../../components/PFA/TicketGa';
import InfoNote from './../../components/PFA/InfoNote'
import TicketVip from './../../components/PFA/TicketVip';
import VipBanner from './../../components/PFA/VipBanner';
import EventLayout from './../../components/PFA/EventLayout';
import BookingLabel from './../../components/PFA/BookingLabel';
import Bottom from './../../components/PFA/Bottom';
import Contact from './../../components/PFA/Contact';
import SliderLineup from './../../components/PFA/Components/SliderLineup';
// import Hero from './../../components/PFF/Hero';
// import Label from './../../components/PFF/Label';
// import Heading from './../../components/PFF/Heading';
// import Video from './../../components/PFF/Video';
// import Banner from './../../components/PFF/Banner';
// import Bottom from './../../components/PFF/Bottom';
// import Slider from './../../components/PFF/Slider';
import Head from './../../components/head';
// import Gallery from './../../components/PfaNew/Gallery';
 const Arena = () => {
  const description="Discover the vibrant Pinkfish Music & Arts Festival, featuring live acts and art installations from local and international artists. Join us for a unique creative experience! "
const title="Experience the Best Music Festival in Malaysia - Pinkfish "
  return (
    <div className="  max-w-[100%]">
        <NewNavbar />
        <Head title={title} description={description} />
        <div className="bg-black flex flex-col gap-11">
          <Hero select={"PFF"} />
          {/* <LineUp /> */}
          <Calendar />
          <div className="flex flex-col min-w-[70vw]">
            <TicketGa />
            <InfoNote image="GA" text="Kindly note that all phases of General Admission (GA) grant equal access to the free-standing and seating area." />
            <TicketVip /> 
            <VipBanner />
             <InfoNote image="VIP" text="Kindly note that all phases of Premium Admission (VIP) grant equal access to the free-standing and seating area." />
            {/* <VipBanner /> */}
          </div>
          <EventLayout />
          {/* <BookingLabel /> */}
          <Bottom />
          {/* <Contact /> */}
        </div>
         {/* <div className="bg-black">
            <Hero select={"PFA"} />
            <Label text={"see you in 2025"} />
            <div className="gradient-container-pfa flex flex-col  ">
              <div className=" flex flex-col self-center  ">
                <Slider select="PFA" />
               <Heading text={"#PFF2023 official aftermovie"} page={"PFF"} />
               <Video id={"F8k-yI4zWLg"} />
               </div>
               <Heading text={"#PFA gallery"} page={"PFC"}/>
               <Gallery select={"PFF"} />
                <Banner  select={"PFA"}  />
               <Bottom   />
            </div>
        </div> */}
     
        <Footer />
    </div>
  )
}

export default Arena