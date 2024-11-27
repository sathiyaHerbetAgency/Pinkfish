/* eslint-disable */
import React from "react";
import Link from "next/link";

const Container = () => {
    const dataContent=[
        {
            logoImg:'/fan_box_logo_2.png',
            altText:'Pinkfish Music & Arts Festival Logo',
            spanText:'Pinkfish Music & Arts Festival',
            text:' is a curated creative music & arts experience that features live acts, both local & international, as well as art installations from various artists gifted in multiple mediums. This event was to celebrate the best in music & art in one big event. Over 13,000 people from Malaysia and neighboring countries attended this large-scale outdoor festival at Sunway Lagoon Surf Beach.',
            link:'/music&artsfestival',
            linkText:'Make Memories',
            img:'/FunHub/fun-hub-1.png',
            imgMob:'/FunHub/Mob/fun-hub-1.webp',
        },
        {
          logoImg:'/fan_box_logo_1.png',
          altText:'pinkfish live Logo',
          spanText:'Pinkfish Live,',
          text:" a sub-division of Pinkfish, provides revolutionary and international-level live shows, electrifying stage setup and show production, mind-bending LED and sound setup. We elevate and celebrate the artistry of rap and hip-hop through the power of live performances, bringing this cultural force to life on stage.",
          link:'/Live/EventsIndividual',
          linkText:'Start Living Your Life',
          img:'/FunHub/fun-hub-2.png',
          imgMob:'/FunHub/Mob/fun-hub-2.webp',
        },
        {
            logoImg:'/fan_box_logo_3.png',
            altText:'Pinkfish Countdown Logo',
            spanText:'Pinkfish Countdown',
            text:" is a groundbreaking sub-brand designed to take your New Year's Eve celebration to new heights. Pinkfish Countdown is set to deliver an unparalleled experience that pushes boundaries and sets the stage for an unforgettable countdown party to midnight",
            link:'/pfc-countdown-nye-2024',
            linkText:'You Only Live Once',
           img:'/FunHub/fun-hub-3.png',
           imgMob:'/FunHub/Mob/fun-hub-3.webp',
        },
       
        {
          logoImg:'/fun-box-logo-4.png',
          altText:'Pinkfish live Logo',
          spanText:'Pinkfish Arena,',
          text:" the latest sub-brand in the Pinkfish family, ready to set a new standard  for arena shows with an electrifying focus on electronic dance music at iconic local venues, turning them into epicentres of DJ brilliance. Get hyped for a live experience like never before — where bass comes to life.",
          link:'/Arena',
          linkText:'Feel the Beat',
          img:'/FunHub/fun-hub-4.webp',
          imgMob:'/FunHub/Mob/fun-hub-4.webp',
        },
        {
          logoImg:'/FunHub/Logos/pc-logo.svg',
          altText:'Pinkfish live Logo',
          spanText:'Pinkclub,',
          text:"  is the newest addition to the Pinkfish banner, turning up the heat with a dynamic series of electronic dance music shows dedicated to curating high-energy nights and core memories. These events take place in intimate club venues, offering fans a chance to experience the music up close and personal, where every beat and vibe resonates like never before.",
          link:'/Arena',
          linkText:'Feel the Beat',
          img:'/FunHub/fun-hub-5.webp',
          imgMob:'/FunHub/Mob/fun-hub-5.webp',
        }

    ]
  return (
    <>
    {dataContent.map((each,index)=>(
    <div className="fan_box flex  md:flex-row flex-col border border-white rounded md:w-[70%]  gap-6 w-[90%] self-center bg-black">
      <div className="basis-1/2  order-2 md:order-1  flex flex-col justify-center gap-4">
        <div className="flex flex-col self-center w-[80%] gap-6">
          <img
            src={each.logoImg}
            className="self-center w-[150px]"
            alt={each.altText}
          />
          <p className="fish_bottom_text text-center self-center">
            <span className="fish_bottom_heading">{each.spanText}</span>{each.text}</p>
          <Link className="fan_button self-center" href={each.link}>
            <button className="" type="button">{each.linkText}</button>
          </Link>
        </div>
      </div>
      <div className="basis-1/2 order-1 md:order-2 flex justify-end">
        <img src={each.img} className=" hidden md:block" alt={"fanbox image "+index} />
        <img src={each.imgMob} className="  md:hidden" alt={"fanbox image "+index} />

      </div>
    </div>
    ))}
    </>
  );
};

export default Container;
