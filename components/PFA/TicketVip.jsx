/* eslint-disable */
import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';
import TicketContainer from './Components/TicketContainer';

const TicketVip = () => {
  const Ticket1={
    payLaterStatus:true,
    payLater:"buy now pay later",
    title:"vip",
    type:"Earlybird",
    price:"RM 328",
    TicketStatus:true,
    BuyButton:"Buy Now",
    BuyButtonStatus:true,
    link1:"https://www.ticket2u.com.my/event/37375",
    link2:"https://www.ticket2u.com.my/event/37445",
  }
  const Ticket2={
    payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"phase 2",
    price:"RM 358",
    TicketStatus:false,
    BuyButton:"Coming Soon",
    BuyButtonStatus:false,
    link1:"",
    link2:"",
  }

  const Ticket3={
    payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"phase 2",
    price:"RM 388",
    TicketStatus:false,
    BuyButton:"Coming Soon",
    BuyButtonStatus:false,
    link1:"",
    link2:"",
  }
  return (
    <div className="text-[#fff] self-center">
     
    <TicketHeadingLabel text="premium ADMISSION (vip)" />
    <div className="flex flex-wrap justify-center  gap-3  min-w-[90vw] md:min-w-[60vw]">
    <TicketContainer  {...Ticket1}  />
    <TicketContainer  {...Ticket2}  />
    <TicketContainer  {...Ticket3}  />

    </div>
</div>
  )
}

export default TicketVip