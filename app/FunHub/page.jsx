/* eslint-disable */
"use client";
import "../../styles/contact.css";
import { motion } from "framer-motion";
import {
  fadeIn,
  planetVariants,
  staggerContainer,
  textContainer,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { Footer, NewNavbar } from "../../components";
import Link from "next/link";
import Container from "../../components/Funhub/Container"
import Head from './../../components/head';
const FanHub = () => {
  const description="Discover the vibrant Pinkfish Music & Arts Festival, featuring live acts and art installations from local and international artists. Join us for a unique creative experience! "
const title="Experience the Best Music Festival in Malaysia - Pinkfish "
  return (
    <>
    <Head title={title} description={description} />
      <NewNavbar />
      <div className="fan_main_container min-h-screen  text-white   ">
        <div className="flex  flex-col gap-6 pt-11 pb-24">
          <h1 className="contact_text_header  self-center">FUN HUB</h1>
          <h3 className="contact_sub_text text-center w-[80%] md:w-[60%] self-center">
            Pinkfish is a magical celebration of community and lifestyle where
            we celebrate self-expression in a kaleidoscope of life where music,
            arts, and culture collide into one under an open sky.
          </h3>
        </div>
        <div className="flex flex-col gap-6 ">
        <Container />
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

export default FanHub;
