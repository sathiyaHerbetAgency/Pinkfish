/* eslint-disable */
'use client'
import React from 'react'
import "../../styles/contact.css";
import NewNavbar from './../../components/NewNavbar';
import Footer from './../../components/Footer';
import Head from './../../components/head';
import Hero from './../../components/LandingPage/Hero';
import BrandsBy from './../../components/LandingPage/BrandsBy';
import FollowUs from './../../components/LandingPage/FollowUs';
import {Banner} from './../../components/LandingPage/Banner';
import OfferSection from './../../components/LandingPage/OfferSection';
import TicketSection from './../../components/LandingPage/TicketSection';

 const page = () => {
  const description="Celebrate Countdown NYE 2024 with Pinkfish! Enjoy an exciting night filled with entertainment, drinks, and unforgettable memories as we welcome the new year together. "
  const title="Celebrate Countdown NYE 2024 with Pinkfish | Unforgettable Events "
  return (
    <div>
       <Head title={title} description={description} />
        <NewNavbar />
        {/* <Hero />
        <TicketSection />
        <OfferSection />
        <FollowUs />
        <BrandsBy /> */}
        <Footer />
    </div>
  )
}

export default page;