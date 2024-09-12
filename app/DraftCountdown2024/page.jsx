/* eslint-disable */

import React from 'react'
import "../../styles/contact.css";
import NewNavbar from './../../components/NewNavbar';
import Footer from './../../components/Footer';

import Head from './../../components/head';
import Hero from './../../components/Contdown2024/Hero';
 const Contdown2024 = () => {
  const description="Celebrate Countdown NYE 2024 with Pinkfish! Enjoy an exciting night filled with entertainment, drinks, and unforgettable memories as we welcome the new year together. "
  const title="Celebrate Countdown NYE 2024 with Pinkfish | Unforgettable Events "
  return (
    <div>
       <Head title={title} description={description} />
        <NewNavbar />
        <Hero />
        <Footer />
    </div>
  )
}

export default Contdown2024;