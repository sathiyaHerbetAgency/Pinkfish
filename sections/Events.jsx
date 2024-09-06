import Link from "next/link";
import "../styles/live.css"
const Events = () => (
  <section id="Events" className="event_section   mb-24">
    <div className="w-[100%] flex flex-col   ">
      <h1 className=" event_header_live my-14">EVENTS</h1>
      <div className="flex flex-row justify-center   image_container_home_live  ">
        <div className="container_live ">
          <Link href='Live/EventsIndividual' className="  ">
              <img className="md:max-h-[668px] md:max-w-[803px]  " src="Live/tyga_poster.png" alt="tyga poster"/>
              <div className="text-block_live  text-white flex flex-col gap-2 md:gap-4">
                <button className="event_tickets2_live" alt="button">Sold Out
                  <svg className="self-center ml-2 mt-1" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9.46357L4.67453 5.78903C5.10849 5.35507 5.10849 4.64496 4.67453 4.211L1 0.536438" stroke="black" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  </button>           
              </div>    
            </Link>
          </div>
      </div>
    </div>
  </section>
);
export default Events;
