/* eslint-disable */
import React from 'react'
import Link from 'next/link';

const TicketContainer = ({...Ticket}) => {
  const showOverlay = Ticket.TicketStatus === false;

  return (
    <div className="flex flex-col pt-11 relative">
      <div className="flex flex-col gap-6 w-[160px] md:w-[220px] relative overflow-hidden">
        <div className={`flex flex-col ${Ticket.TicketStatus ? "ticket-body-bg" : "ticket-body-bg"} justify-start h-[190px] md:h-[240px] gap-0 w-full`}>
          <div className="flex flex-col justify-around min-h-[80%] md:min-h-[70%]">
            <h2 className="text-[10px] w-[100%] text-center md:text-[14px] font-[100] font-[Integral] text-[#fff] uppercase">
              {Ticket.title}
            </h2>
            <div>
              <h2 className="text-[16px] md:text-[20px] tracking-[1px] font-[Integral] text-center text-[#fff] uppercase">
                {Ticket.type}
              </h2>
              <h2 className="text-[34px] md:text-[32px] tracking-[1px] font-[Integral] text-center text-[#fff] uppercase">
                {Ticket.price}
              </h2>
            </div>
          </div>
        </div>

        {Ticket.BuyButtonStatus && (
          <Link
            href={Ticket.link1}
            target="_blank"
            className={`uppercase rounded py-2 md:py-3 font-[Integral] text-[16px] text-center min-w-[100%] ${
              Ticket.BuyButtonStatus ? "bg-[#FF0086] cursor-pointer" : "bg-[#6C6066] cursor-not-allowed"
            }`}
          >
            {Ticket.BuyButton}
          </Link>
        )}

        {!Ticket.BuyButtonStatus && (
          <button
            className={`uppercase rounded py-2 md:py-3 font-[Integral] text-[16px] text-center min-w-[100%] ${
              Ticket.BuyButtonStatus ? "bg-[#FF0086] cursor-pointer" : "bg-[#6C6066] cursor-not-allowed"
            }`}
          >
            {Ticket.BuyButton}
          </button>
        )}

        {Ticket.payLaterStatus && (
          <Link
            href={Ticket.link2}
            target="_blank"
            className={`uppercase rounded py-2 md:py-3 font-[Integral] text-[16px] text-center min-w-[100%] ${
              Ticket.payLaterStatus ? "bg-[#FF0086] cursor-pointer" : "bg-[#6C6066] cursor-not-allowed"
            }`}
          >
            {Ticket.payLater}
          </Link>
        )}

        {!Ticket.payLaterStatus && Ticket.payLater && (
          <button
            className={`uppercase rounded py-2 md:py-3 font-[Integral] text-[16px] text-center min-w-[100%] ${
              Ticket.payLaterStatus ? "bg-[#FF0086] cursor-pointer" : "bg-[#6C6066] cursor-not-allowed"
            }`}
          >
            {Ticket.payLater}
          </button>
        )}

        {showOverlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 flex justify-center items-center">
            {/* <span className="text-white font-[Integral] text-[18px] uppercase">
              {Ticket.overlayText || "Coming Soon"}
            </span> */}
          </div>
        )}
      </div>
    </div>
  )
}

export default TicketContainer;
