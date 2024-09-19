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



 const page = ({params}) => {
  const artistName=params.filename

  const artistsData = {
    sarraha:{
      artist: "sarah landry",
      imageUrl: "./Landing-Page/Lineup/sarrah.png",
      heading: "welcome home, ",
      spanText:"lavas!",
      text: "It’s time to turn up the heat once again because this year's Pinkfish Countdown is rocking a whole new look.",
      bannerHeading:'Say hello to our main headliner, sarah landry!',
      bannerHeading2:'stay tuned for the full line-up reveal',
      bannerText:'We’ve got more surprises lined up for you. Keep checking in, and we’ll drop more details soon!'

    },
   
  };
  const artistSlice=artistName?.split("-")[0];
    const artistData = artistsData[artistSlice.toLowerCase()]; // Get the artist data based on the URL param
  if (!artistData) {
    return  <div>
              <NewNavbar /> 
              <h1 className="text-white text-[48px] uppecase text-center my-24">Page not found</h1>
              <Footer />
            </div>
  }
  const description="Celebrate Countdown NYE 2024 with Pinkfish! Enjoy an exciting night filled with entertainment, drinks, and unforgettable memories as we welcome the new year together. "
  const title="Celebrate Countdown NYE 2024 with Pinkfish | Unforgettable Events "
  return (
    <div>
       <Head title={title} description={description} />
        <NewNavbar />
        {/* <Hero artistData={artistData} />
        <Banner artistData={artistData} />
        <FollowUs />
        <BrandsBy /> */}
        <Footer />
    </div>
  )
}

export default page;