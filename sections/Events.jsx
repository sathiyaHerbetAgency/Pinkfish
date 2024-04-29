import Link from "next/link";
import "../styles/live.css"
const Events = () => (
  <section id="Events" className="event_section  mt-11 mb-24">
    <div className="w-[100%] flex flex-col   ">
      <h1 className=" event_header_live mb-11 mt-24">EVENTS</h1>
      <div className="flex flex-row justify-center   image_container_home_live  mt-11">
       
      <Link href='EventsIndividual' className="  ">
        <div className="container_live ">
      <img className="max-h-[668px] max-w-[803px] hidden md:block " src="Live/event_2.png" />
          <img className=" max-h-[384px] max-w-[308px] md:hidden self-center" src="Live/event_2_Mob.png" />
          <div className="text-block_live  text-white flex flex-col gap-2 md:gap-4">
            <h1 className="event_text_date2_live">9 august 2023</h1>
            <h1 className="event_text2_live">Tyga live in kl</h1>
           <Link href='EventsIndividual'> <button className="event_tickets2_live" alt="button">Sold Out
              <svg className="self-center ml-2 mt-1" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.46357L4.67453 5.78903C5.10849 5.35507 5.10849 4.64496 4.67453 4.211L1 0.536438" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              </button>
              </Link>
          </div>
        </div>.
        </Link>
      </div>
      {/* <button className="buy_ticket_live flex w-fit self-center mt-11 " type="button">see more shows
        <svg className="mt-2 ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
        </svg>
        </button> */}
    </div>
  </section>
);
export default Events;
