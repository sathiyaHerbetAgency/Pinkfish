/* eslint-disable */

import React from "react";
import "../../styles/contact.css";
import NewNavbar from "./../../components/NewNavbar";
import Footer from "./../../components/Footer";
import Head from "./../../components/head";
import Header from "./../../components/Contdown2025/Header";
const PFC = () => {
  const description =
    "Celebrate Countdown NYE 2024 with Pinkfish! Enjoy an exciting night filled with entertainment, drinks, and unforgettable memories as we welcome the new year together. ";
  const title =
    "Celebrate Countdown NYE 2024 with Pinkfish | Unforgettable Events ";
  return (
    <div>
      <Head title={title} description={description} />
      <NewNavbar />
       {/* <Header /> */}
      {/* <div className="bg-black">
        <Hero select={"PFC"} />
        <div className="bg-[linear-gradient(to_bottom,_#58388D_77%,_#022F87_100%)] flex flex-col justify-center py-24">
          <div className="flex  flex-col gap-4">
            <div className="self-center">
              <div className="text-center ">
                <h2 className="text-[24px] md:text-[35px] font-[Manrope-Black] text-white mb-4 tracking-wider uppercase">
                  Relive the Energy
                </h2>
              </div>
              <YoutubeEmbed
                embedId="_8JoocpM24M"
                title="Video Treaser"
                type="PFC2025"
              />
            </div>
          </div>
        </div>
        <TicketsSlider />
      </div> */}
      <div class="flex h-screen flex-col items-center justify-center bg-white px-4">
        <h1 class="text-3xl font-bold text-gray-800">
          This page is no longer available
        </h1>
        <p class="mt-2 text-gray-500 text-center max-w-sm">
          The page you were trying to reach might have been removed, had its
          name changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          class="mt-6 inline-block rounded-lg bg-[#FF0086] px-6 py-3 text-white font-medium transition hover:bg-[#FF0075]"
        >
          Go Home
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default PFC;
