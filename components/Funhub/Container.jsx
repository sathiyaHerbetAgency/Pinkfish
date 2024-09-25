/* eslint-disable */
import React from "react";
import Link from "next/link";

const Container = () => {
    const dataContent=[
        {
            logoImg:'/fan_box_logo_2.png',
            altText:'Pinkfish Music & Arts Festival Logo',
            spanText:'Pinkfish Music & Arts Festival',
            text:'is a curated creative music & arts experience that features live acts, both local & international, as well as art installations from various artists gifted in multiple mediums. This event was to celebrate the best in music & art in one big event. Over 13,000 people from Malaysia and neighboring countries attended this large-scale outdoor festival at Sunway Lagoon Surf Beach.',
            link:'/music&artsfestival',
            linkText:'Make Memories',
            img:'/fan_box_2.png'
        },
        {
            logoImg:'/fan_box_logo_3.png',
            altText:'Pinkfish Countdown Logo',
            spanText:'Pinkfish Countdown',
            text:"is a groundbreaking sub-brand designed to take your New Year's Eve celebration to new heights. Pinkfish Countdown is set to deliver an unparalleled experience that pushes boundaries and sets the stage for an unforgettable countdown party to midnight",
            link:'/countdown',
            linkText:'You Only Live Once',
            img:'/fan_box_3.png'
        },
        {
          logoImg:'/fan_box_logo_1.png',
          altText:'pinkfish live Logo',
          spanText:'Pinkfish Live,',
          text:"a sub-division of Pinkfish, provides revolutionary and international-level live shows, electrifying stage setup and show production, mind-bending LED and sound setup. We elevate and celebrate the artistry of rap and hip-hop through the power of live performances, bringing this cultural force to life on stage.",
          link:'/Live/EventsIndividual',
          linkText:'Start Living Your Life',
          img:'/fan_box_1.png'
        },
        {
          logoImg:'/fun-box-logo-4.png',
          altText:'Pinkfish live Logo',
          spanText:'Pinkfish Arena,',
          text:"the latest sub-brand in the Pinkfish family, ready to set a new standard  for arena shows with an electrifying focus on electronic dance music at iconic local venues, turning them into epicentres of DJ brilliance. Get hyped for a live experience like never before — where bass comes to life.",
          link:'/Arena',
          linkText:'Feel the Beat',
          img:'/fan_box_3.png'
        }

    ]
  return (
    <>
    {dataContent.map((each,index)=>(
    <div className="fan_box flex  md:flex-row flex-col border border-white rounded md:w-[70%]  gap-6 w-[90%] self-center bg-black pb-6">
      <div className="basis-1/2  order-2 md:order-1  flex flex-col justify-center gap-4">
        <div className="flex flex-col self-center w-[80%] gap-6">
          <img
            src={each.logoImg}
            className="self-center"
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
        <img src={each.img} alt={"fanbox image "+index} />
      </div>
    </div>
    ))}
    </>
  );
};

export default Container;