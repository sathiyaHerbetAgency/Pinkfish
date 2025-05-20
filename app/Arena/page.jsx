/* eslint-disable */

import React from "react";
import "../../styles/contact.css";
import NewNavbar from "./../../components/NewNavbar";
import Footer from "./../../components/Footer";
import Hero from "./../../components/PFA/Hero";
import LineUp from "./../../components/PFA/LineUp";
import Calendar from "./../../components/PFA/Calendar";
import TicketGa from "./../../components/PFA/TicketGa";
import InfoNote from "./../../components/PFA/InfoNote";
import TicketVip from "./../../components/PFA/TicketVip";
import VipBanner from "./../../components/PFA/VipBanner";
import EventLayout from "./../../components/PFA/EventLayout";
import BookingLabel from "./../../components/PFA/BookingLabel";
import Bottom from "./../../components/PFA/Bottom";
import Contact from "./../../components/PFA/Contact";
import SliderLineup from "./../../components/PFA/Components/SliderLineup";
import Head from "./../../components/head";
// import Gallery from './../../components/PfaNew/Gallery';
const Arena = () => {
  const description =
    "Discover the vibrant Pinkfish Music & Arts Festival, featuring live acts and art installations from local and international artists. Join us for a unique creative experience! ";
  const title = "Experience the Best Music Festival in Malaysia - Pinkfish ";
  return (
    <div className="  max-w-[100%]">
      <NewNavbar />
      <Head title={title} description={description} />
      <div className="bg-black flex flex-col gap-11">
        <Hero select={"PFF"} />

        <Calendar />
        <div className="flex flex-col min-w-[70vw] ">
          <TicketGa />
          <InfoNote
            image="GA"
            text="Kindly note that all phases of General Admission (GA) grant equal access to the free-standing and seating area."
          />

          <div className="self-center flex justify-center  w-[90%] my-6 md:my-11">
            <p className="text-[10px] md:text-[14px] leading-[12%] tracking-[2px] font-[manrope] items-center self-center text-[#fff] uppercase">
              *Ticket prices excludes ticket fee & booking charges.
            </p>
          </div>

          <TicketVip />
          {/* <VipBanner /> */}
          {/* <TicketVip /> */}
          <InfoNote
            image="VIP"
            text="Kindly note that all phases of Premium Admission (VVIP) grant equal access to the free-standing and seating area."
          />
        </div>
        <EventLayout />
        <Bottom />
      </div>

      <Footer />
    </div>
  );
};

export default Arena;
