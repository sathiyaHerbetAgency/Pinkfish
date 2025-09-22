/* eslint-disable */
"use client";
import React from "react";
import Link from "next/link";
const GalleryContainer = () => {
  const textGallery =
    "md:text-[28px] lg:text-[36px] leading-[46.87px] font-[manrope] font-[800] text-white md:p-4 lg:p-6";
  const textGallery1 =
    "text-[24px] leading-[32px] font-[manrope] font-[800] text-white p-5 md:p-3 lg:p-6";
  const overlayContainer =
    "absolute z-1 w-[353.64px] h-[280px] md:w-[220px] lg:w-[291px] md:h-[185px] lg:h-[280px] flex flex-col justify-end";
  const imageSmall =
    "w-[353.6px] h-[280px] md:w-[220px] lg:w-[291px] md:h-[185px] lg:h-[280px]";
  const mobData = [
    {
      imgUrl: "2024Gallery/Mob/pff_gallery.webp",
      text: "Pinkfish Music & Arts Festival 2024",
      link: "/pff2024-gallery",
    },
    {
      imgUrl: "2024Gallery/Mob/pfc_gallery.webp",
      text: "Pinkfish Countdown 2023",
      link: "/pfc2023-gallery",
    },
    {
      imgUrl: "2024Gallery/Mob/pfl_gallery.webp",
      text: "Pinkfish Live: Tyga",
      link: "/pfl-tyga-gallery",
    },
    {
      imgUrl: "2024Gallery/Mob/pff_2023_gallery.webp",
      text: "Pinkfish Music & Arts Festival 2023",
      link: "/pff2023-gallery",
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <div className="flex flex-col md:gap-5 lg:gap-6 max-w-1100px">
          <div className="self-center ">
            <Link
              href="/pff2024-gallery"
              className="absolute z-1 md:w-[670px] lg:w-[925px] md:h-[200px] lg:h-[300px] flex flex-col justify-end"
            >
              <p className={textGallery}>Pinkfish Music & Arts Festival 2024</p>
            </Link>
            <img
              src="2024Gallery/pff_gallery.webp"
              className="md:w-[700px] lg:w-[925px] md:h-[220px] lg:min-h-[300px]"
              alt="pff 2024"
            />
          </div>
          <div className="flex self-center md:gap-5 lg:gap-6">
            <Link href="/pfc2023-gallery" className="">
              <div className={overlayContainer}>
                <p className={textGallery1}>Pinkfish Countdown 2023</p>
              </div>
              <img
                className={imageSmall}
                src="2024Gallery/pfc_gallery.webp"
                alt="pfc gallery"
              />
            </Link>
            <Link href="/pfl-tyga-gallery" className="">
              <div className={overlayContainer}>
                <p className={textGallery1}>Pinkfish Live: Tyga</p>
              </div>
              <img
                className={imageSmall}
                src="2024Gallery/pfl_gallery.webp"
                alt="pfl gallery"
              />
            </Link>
            <Link href="/pff2023-gallery" className="">
              <div className={overlayContainer}>
                <p className={textGallery1}>
                  Pinkfish Music & Arts Festival 2023
                </p>
              </div>
              <img
                className={imageSmall}
                src="2024Gallery/pff_2023_gallery.webp"
                alt="pff 2023"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col">
        <div className="flex flex-col self-center gap-6">
          {mobData.map((each) => (
            <Link href={each.link} className="">
              <div className={overlayContainer}>
                <p className={textGallery1}>{each.text}</p>
              </div>
              <img className={imageSmall} src={each.imgUrl} alt="pfc gallery" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryContainer;
