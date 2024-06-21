/* eslint-disable */
"use client";
import "../../styles/contact.css";
import { scrollTop } from "../../components/jsfile";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeIn,
  planetVariants,
  staggerContainer,
  textContainer,
  textVariant,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import PartyBanner from "../../sections/PartyBanner";
import { Footer, NewNavbar, NewsTemplate } from "../../components";
const Event = () => {
  return (
    <>
      <NewNavbar />
      <div className="news_main_container min-h-screen flex flex-col  text-white   ">
        <div className="flex flex-col gap-6 pt-11 pb-24">
          <h1 className="contact_text_header  self-center">What’s bubblin’?</h1>
          <h1 className="contact_sub_text text-center w-[60%] self-center">
            Stay in the loop with Pinkfish's latest news here!
          </h1>
        </div>
        <div className="flex flex-col self-center w-[70%] gap-6">
          <div className="grid md:grid-cols-3 gap-4 grid-1">
            <NewsTemplate />
            <div className="basis-1/3 border rounded border-white flex flex-col gap-4">
              <img src="/news_img_1_1.png" alt="news image" />
              <div className="flex flex-col gap-4 self-center pb-4 w-[90%]">
                <h1 className="news_card_header ">
                  PINKFISH Paints The New Year’s Pink With An Unforgettable
                  Celebration By Having One Of Malaysia’s Biggest Countdown To
                  2024
                </h1>

                <p className="news_card_text">
                  The Pinkfish Countdown, a curated adventure by Hitman
                  Solutions and Happymoon, marked the pinnacle of New Year’s Eve
                  celebrations, setting the stage for an epic commencement of
                  2024. Taking place at Surf Beach, Sunway Lagoon, the event
                  drew in throngs of electro music fans eager to dance to the
                  beats of both EDM legends and local talents.
                </p>

                <a
                  href="https://klfoodie.com/pinkfish-countdown-2024/"
                  target="_blank"
                >
                  <button type="button" className="news_read_btn">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="basis-1/3 border rounded border-white flex flex-col gap-4">
              <img src="/news_img_2_1.png" alt="news image" />
              <div className="flex flex-col gap-4 self-center pb-4 w-[90%]">
                <h1 className="news_card_header ">
                  From TRX to Sarawak, here’s a list of top countdown parties
                  across Malaysia to welcome 2024{" "}
                </h1>

                <p className="news_card_text">
                  KUALA LUMPUR, Dec 30 — The final day of 2023 is just a day
                  away and it’s time to welcome the New Year on a high note.
                </p>
                <p className="news_card_text">
                  There are plenty of New Year’s Eve countdown parties all
                  across Malaysia to use in 2024 with thrilling line-ups of
                  music, performances and of course, fireworks.
                </p>

                <a
                  href="https://www.malaymail.com/news/life/2023/12/29/from-trx-to-sarawak-heres-a-list-of-top-countdown-parties-across-malaysia-to-welcome-2024/109792"
                  target="_blank"
                >
                  <button type="button" className="news_read_btn">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="basis-1/3 border rounded border-white flex flex-col gap-4">
              <img src="/news_img_3_1.png" alt="news image" />
              <div className="flex flex-col gap-4 self-center pb-4 w-[90%]">
                <h1 className="news_card_header ">
                  #Showbiz: Malaysians welcome new year with electrifying EDM
                  spectacle at Pinkish Countdown 2024 [NSTTV]
                </h1>

                <p className="news_card_text">
                  PETALING JAYA: As Malaysians bid farewell to 2023, Pinkfish
                  Countdown 2024 ushered in the new year with an electrifying
                  electronic dance music (EDM) spectacle that captivated some
                  12,000 music enthusiasts.{" "}
                </p>
                <p className="news_card_text">
                  Held at Sunway Lagoon Surf Beach yesterday, the carefully
                  curated artiste lineup, culminating in a breathtaking
                  countdown, created an unforgettable night of music and
                  celebration.
                </p>

                <a
                  href="https://www.nst.com.my/lifestyle/groove/2024/01/996229/showbiz-malaysians%C2%A0welcome-new-year-electrifying-edm-spectacle"
                  target="_blank"
                >
                  <button type="button" className="news_read_btn">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="basis-1/3 border rounded border-white flex flex-col gap-4">
              <img src="/news_img_4_1.png" alt="news image" />
              <div className="flex flex-col gap-4 self-center pb-4 w-[90%]">
                <h1 className="news_card_header ">
                  TYGA Gives Malaysian Fans A Taste On August 9{" "}
                </h1>

                <p className="news_card_text">
                  The Compton rapper will turn Zepp Kuala Lumpur in Rack City.
                </p>
                <a href="https://liftedasia.com/article/tyga" target="_blank">
                  <button type="button" className="news_read_btn">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="basis-1/3 border rounded border-white flex flex-col gap-4">
              <img src="/news_img_5_1.png" alt="news image" />
              <div className="flex flex-col gap-4 self-center pb-4 w-[90%]">
                <h1 className="news_card_header ">
                  US Rapper Tyga Is Coming To Malaysia For The First Time In
                  August
                </h1>

                <p className="news_card_text">
                  The Compton-born rapper, Micheal Ray Stevenson, better known
                  as Tyga, which stands for Thank You God Always, will be
                  performing on 9 August at Zepp Kuala Lumpur.Known for hit
                  songs such as Taste (feat. Offset), Loco Contigo (feat. J.
                  Balvin), Chosen (feat. Ty Dolla $ign), and Ayo, Tyga rose to
                  fame in the early 2000s, and gained success after the release
                  of his debut studio album, Careless World: Rise of the Last
                  King, in 2011.
                </p>
                <a
                  href="https://says.com/my/entertainment/tyga-is-coming-to-malaysia-in-august"
                  target="_blank"
                >
                  <button type="button" className="news_read_btn">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="basis-1/3 border rounded border-white flex flex-col gap-4">
              <img src="/news_img_6_1.png" alt="news image" />
              <div className="flex flex-col gap-4 self-center pb-4 w-[90%]">
                <h1 className="news_card_header ">
                  Tyga is set to perform in Kuala Lumpur for the first time this
                  August 2023.
                </h1>

                <p className="news_card_text">
                  Tyga, the talented rapper hailing from Compton, California, is
                  set to make his debut in Malaysia with an electrifying
                  performance in August 2023 at the prestigious Zepp Kuala
                  Lumpur. This will be the first time ever that the rapper and
                  songwriter, whose real name is Michael Ray Stevenson, will be
                  performing in Malaysia, and fans are in for a treat as they
                  get to witness the rapper’s unique style and high energy trap
                  and hip-hop hits.
                </p>
                <a
                  href="https://www.lifestyleasia.com/kl/whats-on/events-whats-on/all-you-need-to-know-about-tyga-concert-in-kuala-lumpur/"
                  target="_blank"
                >
                  <button type="button" className="news_read_btn">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="basis-1/3 border rounded border-white flex flex-col gap-4">
              <img src="/news_img_7_1.png" alt="news image" />
              <div className="flex flex-col gap-4 self-center pb-4 w-[90%]">
                <h1 className="news_card_header ">
                  PINKFISH FESTIVAL: ALL-NEW MUSIC & ARTS FESTIVAL IN M’SIA (30
                  APR 23)
                </h1>

                <p className="news_card_text">
                  Pinkfish Festival is a brand new festival that’ll be taking
                  place on 30th April 2023 at the spectacular Surf Beach at
                  Sunway Lagoon.
                </p>
                <p className="news_card_text">
                  Aiming to encapsulate the vibrant arts and music scene in
                  Malaysia, Pinkfish Festival also celebrates creativity,
                  expression and community in new and exciting ways!
                </p>
                <a
                  href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjllJOYzvyBAxV2RmwGHUm1BsUQFnoECBoQAQ&url=https%3A%2F%2Funcoverasia.com%2Fpinkfish-festival-malaysia%2F&usg=AOvVaw0MGdA37wdQCViK8zbbw2Oi&opi=89978449 "
                  target="_blank"
                >
                  <button type="button" className="news_read_btn">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="basis-1/3 border rounded border-white flex flex-col gap-4">
              <img src="/news_img_8_1.png" alt="news image" />
              <div className="flex flex-col gap-4 self-center pb-4 w-[90%]">
                <h1 className="news_card_header ">
                  “What the Fish?!” Here’s How Pinkfish is Serving M’sia’s
                  HOTTEST Music & Arts Festival in 2023!
                </h1>

                <p className="news_card_text">
                  We all know how unpredictable Malaysia’s weather can be. But
                  come rain or shine, Malaysians know how to party when there’s
                  a music festival! From mountain tops to the beachside, we’ll
                  travel far and wide to immerse ourselves in new experiences,
                  music and fun!
                </p>
                <p className="news_card_text">
                  So if you’re raring to kick off the year right with an
                  exciting art and music-filled festival, then this one taking
                  place at the end of April will definitely be worth the hype!
                </p>
                <a
                  href="https://worldofbuzz.com/what-the-fish-heres-how-pinkfish-is-serving-msias-hottest-music-arts-festival-in-2023/"
                  target="_blank"
                >
                  <button type="button" className="news_read_btn">
                    Read More
                  </button>
                </a>
              </div>
            </div>
            <div className="basis-1/3 border rounded border-white flex flex-col gap-4">
              <img src="/news_img_9_1.png" alt="news image" />
              <div className="flex flex-col gap-4 self-center pb-4 w-[90%]">
                <h1 className="news_card_header ">
                  Pinkfish Festival Happening In KL
                </h1>

                <p className="news_card_text">
                  The Pinkfish Music & Arts Festival, a curated creative music
                  and arts event put on by Hitman Solutions and Happymoon during
                  Labour Day Weekend, provided Malaysians and visitors from
                  other parts of the region with an experience they will never
                  forget. The highly charged day was held at Surf Beach in
                  Sunway Lagoon and included both local and foreign live
                  performers as well as art installations from numerous
                  multi-talented artists.
                </p>
                <a
                  href="https://beritaharian.my/pinkfish-festival-happening-in-kl/"
                  target="_blank"
                >
                  <button type="button" className="news_read_btn">
                    Read More
                  </button>
                </a>
              </div>
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

export default Event;
