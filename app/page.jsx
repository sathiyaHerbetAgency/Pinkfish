/* eslint-disable */
"use client";

import { Footer, NewNavbar } from "../components";

// import { Hero, World } from "../sections";
import "../styles/contact.css";
import Hero from './../components/Home/Hero';
import Label from './../components/Home/Label';
import Brands from './../components/Home/Brands';
import Gallery from './../components/Home/Gallery';
import News from './../components/Home/News';
import Bottom from './../components/Home/Bottom';
import Popup from './../components/Home/Popup';
import Head from './../components/head';

export default function Page() {
  const description="Discover the ultimate music festival experience in Malaysia with PinkFish. Join us for an unforgettable event filled with music, fun, and memories."
  const title="Experience the Best Music Festival in Malaysia - Pinkfish "


  return (
    <>
    <Head title={title} description={description} />
    <div className="bg-transparent min-h-[100vh] ">
      <Popup />
      <NewNavbar />
      <Hero/>
      <Label color="pink" direction="left" />
      <Brands />
      <Gallery />
      <Label color="gray" direction="right" />
      <News  />
      <Bottom />
      <img
        className=" md:block hidden right-[0] top-[70%]  fixed  "
        src="/fish.png" alt="Pinkfish"
      />
     <Footer />
  
    </div>
    </>
  );
};
