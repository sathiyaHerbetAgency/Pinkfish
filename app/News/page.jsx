/* eslint-disable */
"use client";
import "../../styles/contact.css";
import PartyBanner from "../../sections/PartyBanner";
import { Footer, NewNavbar } from "../../components";
import NewsTemplate from "../../components/News/NewsTemplate";
import Head from './../../components/head';

const Event = () => {
  const description="Discover the vibrant Pinkfish Music & Arts Festival, featuring live acts and art installations from local and international artists. Join us for a unique creative experience! "
  const title="Experience the Best Music Festival in Malaysia - Pinkfish "

  return (
    <>
      <Head title={title} description={description} />
      <NewNavbar />
      <div className="news_main_container min-h-screen flex flex-col  text-white   ">
        <div className="flex flex-col gap-6 pt-11 pb-24">
          <h1 className="contact_text_header  self-center">What’s bubblin’?</h1>
          <h3 className="contact_sub_text text-center w-[60%] self-center">
            Stay in the loop with Pinkfish's latest news here!
          </h3>
        </div>
        <div className="flex flex-col self-center w-[70%] gap-6">
          <div className="grid md:grid-cols-3 gap-4 grid-1">
            <NewsTemplate />
          </div>
        </div>
      </div>
      <Footer />
      <img
        className=" md:block hidden right-[0] top-[70%]  fixed  "
        src="/fish.png"
      />
    </>
  );
};

export default Event;
