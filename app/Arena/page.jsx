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
 const Arena = () => {
  return (
    <div >
        <NewNavbar />
        <div className="bg-black flex flex-col gap-11">
          <Hero select={"PFF"} />
          <LineUp />
          <Calendar />
          <div className="flex flex-col min-w-[70vw]">
            <TicketGa />
            <InfoNote image="GA" text="Kindly note that all phases of General Admission (GA) grant equal access to the free-standing and seating area." />
            <TicketVip /> 
             <InfoNote image="VIP" text="Kindly note that all phases of Premium Admission (VIP) grant equal access to the free-standing and seating area." />
            <VipBanner />
          </div>
          <EventLayout />
          <BookingLabel />
          <Bottom />
          <Contact />
        </div>
        <Footer />
    </div>
  )
}

export default Arena