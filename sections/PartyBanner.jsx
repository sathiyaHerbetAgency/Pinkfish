"use client";

import Link from "next/link";
import gsap from "gsap";
const PartyBanner = () => {
  function mouseOut(e){
    var tl = gsap.timeline();
    tl.to(e, {scale: 1, duration: .5, ease: "power1.inOut"});
  }



function mouseDown (e) {
  var tl = gsap.timeline();
  tl.to(e, {scale: 1.05, duration: .5, ease: "power1.inOut"});
}
return (
  <section className=" flex justify-center mt-11  ">
    <div className=" min-w-[90vw] md:min-w-[80vw]">
      <Link
        href="Contact"
        onMouseOver={(e) => mouseDown(".join_banner")}
        onMouseLeave={(e) => mouseOut(".join_banner")}
        className=" join_banner border-[1px] border-white flex flex-col "
      >
        <div className=" self-center flex flex-col gap-2 mb-11 mt-11 ">
          <h3 className="party_banner_header text-white ">JOIN THE PARTY</h3>
          <div className="flex ">
            <h3 className="pat_banner_text text-white ">
              Reach out to us now{" "}
            </h3>
            <svg
              width="57"
              height="29"
              className="mt-1 ml-3"
              viewBox="0 0 57 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14.5L54 14.5"
                stroke="white"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M43 1.5L56 14.5L43 27.5"
                stroke="white"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  </section>
);
}
export default PartyBanner;
