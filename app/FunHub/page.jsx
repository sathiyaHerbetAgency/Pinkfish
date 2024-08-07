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

const FanHub = () => {
  return (
    <>
      <NewNavbar />
      <div className="fan_main_container min-h-screen  text-white   ">
        <div className="flex  flex-col gap-6 pt-11 pb-24">
          <h1 className="contact_text_header  self-center">FUN HUB</h1>
          <h1 className="contact_sub_text text-center w-[80%] md:w-[60%] self-center">
            Pinkfish is a magical celebration of community and lifestyle where
            we celebrate self-expression in a kaleidoscope of life where music,
            arts, and culture collide into one under an open sky.
          </h1>
        </div>
        <div className="flex flex-col gap-6 ">
          <div className="fan_box flex  md:flex-row flex-col border border-white rounded md:w-[70%]  gap-6 w-[90%] self-center bg-black pb-6">
            <div className="basis-1/2  order-2 md:order-1  flex flex-col justify-center gap-4">
              <div className="flex flex-col self-center w-[80%] gap-6">
                <img
                  src="/fan_box_logo_2.png"
                  className="self-center"
                  alt="Pinkfish Music & Arts Festival logo"
                />
                <p className="fish_bottom_text text-center self-center">
                  {" "}
                  <span className="fish_bottom_heading">
                    {" "}
                    Pinkfish Music & Arts Festival{" "}
                  </span>
                  is a curated creative music & arts experience that features
                  live acts, both local & international, as well as art
                  installations from various artists gifted in multiple mediums.
                  This event was to celebrate the best in music & art in one big
                  event. Over 13,000 people from Malaysia and neighboring
                  countries attended this large-scale outdoor festival at Sunway
                  Lagoon Surf Beach.
                </p>

                

                <Link
                  className="fan_button self-center"
                  href="/music&artsfestival"
                >
                  <button className="" type="button">
                    Make Memories
                  </button>
                </Link>
              </div>
            </div>
            <div className="basis-1/2 order-1 md:order-2 flex justify-end">
              <img src="/fan_box_2.png" alt="demo image" />
            </div>
          </div>

          <div className="fan_box flex  md:flex-row flex-col border border-white rounded md:w-[70%] w-[90%] gap-6 self-center pb-6 bg-black">
            <div className="basis-1/2 order-2 md:order-1  flex flex-col justify-center gap-4">
              <div className="flex flex-col self-center w-[80%] gap-6">
                <img
                  src="/fan_box_logo_3.png"
                  className="self-center"
                  alt="Pinkfish Countdown logo"
                />
                <p className="fish_bottom_text text-center self-center">
                  {" "}
                  <span className="fish_bottom_heading">
                    {" "}
                    Pinkfish Countdown{" "}
                  </span>
                  is a groundbreaking sub-brand designed to take your New Year's
                  Eve celebration to new heights. Pinkfish Countdown is set to
                  deliver an unparalleled experience that pushes boundaries and
                  sets the stage for an unforgettable countdown party to
                  midnight
                </p>

                {/* <p className='fish_bottom_text self-center text-center'>Stay tuned for the promising line-up and future announcements!</p> */}

                <Link href="/countdown.html" className="fan_button self-center">
                  <button className="" type="button">
                    You Only Live Once
                  </button>
                </Link>
              </div>
            </div>
            <div className="basis-1/2 order-1 md:order-2 flex justify-end">
              <img src="/fan_box_3.png" alt="demo image" />
            </div>
          </div>
          <div className="fan_box flex md:flex-row flex-col border border-white rounded md:w-[70%] w-[90%] gap-6 self-center bg-black pb-6">
            <div className="basis-1/2 order-2 md:order-1  flex flex-col justify-center gap-4">
              <div className="flex flex-col self-center w-[80%] gap-6">
                <img
                  src="/fan_box_logo_1.png"
                  className="self-center"
                  alt="pinkfish live logo"
                />
                <p className="fish_bottom_text text-center self-center">
                  {" "}
                  <span className="fish_bottom_heading"> Pinkfish Live, </span>a
                  sub-division of Pinkfish, provides revolutionary and
                  international-level live shows, electrifying stage setup and
                  show production, mind-bending LED and sound setup. We elevate
                  and celebrate the artistry of rap and hip-hop through the
                  sheer power of live performances, bringing this cultural force
                  to life on stage.
                </p>

                <Link href="/Live" className="fan_button self-center">
                  <button className="" type="button">
                    Start Living Your Life
                  </button>
                </Link>
              </div>
            </div>
            <div className="basis-1/2 order-1 md:order-2 flex justify-end">
              <img src="/fan_box_1.png" className="" alt="demo image" />
            </div>
          </div>
          <div className="fan_box flex md:flex-row flex-col border border-white rounded md:w-[70%] w-[90%] gap-6 self-center bg-black pb-6">
            <div className="basis-1/2 order-2 md:order-1  flex flex-col justify-center gap-4">
              <div className="flex flex-col self-center w-[80%] gap-6">
                <img
                  src="/fun-box-logo-4.png"
                  className="self-center"
                  alt="pinkfish live logo"
                />
                <p className="fish_bottom_text text-center self-center">
                  {" "}
                  <span className="fish_bottom_heading"> Pinkfish Arena, </span> the latest sub-brand in the Pinkfish family, ready to set a new standard 
                  for arena shows with an electrifying focus on electronic dance music at iconic local venues, 
                  turning them into epicentres of DJ brilliance. Get hyped for a live experience like never before — where bass comes to life.
                </p>

                <Link href="/PFA" className="fan_button self-center">
                  <button className="" type="button">
                  Feel the Beat
                  </button>
                </Link>
              </div>
            </div>
            <div className="basis-1/2 order-1 md:order-2 flex justify-end">
              <img src="/fun-box-4.png" className="" alt="demo image" />
            </div>
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

export default FanHub;
