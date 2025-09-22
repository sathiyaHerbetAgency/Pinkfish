/* eslint-disable */
"use client";
import React, { useEffect, useState, useRef } from "react";
import "../../../styles/live.css";
import "../../../styles/contact.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
const GalleryPF = ({ select, folder }) => {
  const [toogle, setToogle] = useState("1");
  const galleryRef = useRef();
  useEffect(() => {
    const galleryElements = galleryRef.current.querySelectorAll("a");
    galleryElements.forEach((element) => {
      const img = new Image();
      img.src = element.href;
      img.onload = () => {
        element.setAttribute("data-pswp-width", img.width);
        element.setAttribute("data-pswp-height", img.height);
      };
    });

    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-test-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [select]);

  const imageSets = {
    pff: ["pf_1", "pf_2", "pf_3", "pf_4", "pf_5", "pf_6"],
    pc: ["pc_1", "pc_2", "pc_3", "pc_4", "pc_5", "pc_6"],
    pl: ["pl_1", "pl_2", "pl_3", "pl_4", "pl_5", "pl_6"],
  };

  const count = { xs: 1, s: 2, m: 3, l: 3, xl: 3, xxl: 3 };
  const customMediaStyle = {
    objectFit: "cover",
    width: "300px",
    maxHeight: "300px",
  };
  const images = [
    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",
  ];

  const button1 = `transition-all text-[16px] md:text-[20px] font-[manrope] ${
    toogle === "1" ? "bg-[#FF0086] text-[#fff]" : "bg-[#DADADA] text-[#111111]"
  }  w-fit  px-4  rounded-lg`;
  const button2 = `transition-all text-[16px] md:text-[20px] font-[manrope] ${
    toogle === "2" ? "bg-[#FF0086] text-[#fff]" : "bg-[#DADADA] text-[#111111]"
  }  w-fit  px-4  rounded-lg`;

  return (
    <div id="my-test-gallery" ref={galleryRef}>
      <div className="flex flex-col gap-1 md:gap-3">
        <div className="flex gap-1 md:gap-3 ">
          {imageSets[select].slice(0, 3).map((file, index) => (
            <a
              href={`./Home/Gallery/${folder}/FullImage/${file}.webp`}
              key={"my-test-gallery" + "-" + index}
              target="_blank"
              rel="noreferrer"
              className="object-contain z-50"
            >
              <img
                src={`./Home/Gallery/${folder}/${file}.webp`}
                className="w-[100%] h-[100%] hidden md:block"
                alt={`${index + 1}`}
              />
              <img
                src={`./Home/Gallery/${folder}/${file}.webp`}
                className="w-[100%] h-[100%]  md:hidden"
                alt={`${index + 1}`}
              />
            </a>
          ))}
        </div>
        <div className="flex gap-1 md:gap-3 ">
          {imageSets[select].slice(3).map((file, index) => (
            <a
              href={`./Home/Gallery/${folder}/FullImage/${file}.webp`}
              key={"my-test-gallery" + "-" + index}
              target="_blank"
              rel="noreferrer"
              className="object-contain"
            >
              <img
                src={`./Home/Gallery/${folder}/${file}.webp`}
                className="w-[100%] h-[100%] hidden md:block"
                alt={`${index + 1}`}
              />
              <img
                src={`./Home/Gallery/${folder}/${file}.webp`}
                className="w-[100%] h-[100%]  md:hidden"
                alt={`${index + 1}`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPF;
