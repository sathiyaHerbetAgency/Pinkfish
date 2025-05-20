/* eslint-disable */
import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';
import TicketContainer from './Components/TicketContainer';

const TicketVip = () => {
  // const Ticket1={
  //   payLaterStatus:false,
  //   payLater:"",
  //   title:"vip",
  //   type:"Earlybird",
  //   price:"RM 328",
  //   TicketStatus:false,
  //   BuyButton:"Sold Out",
  //   BuyButtonStatus:false,
  //   link1:"",
  //   link2:"",
  // }
  const Ticket2={
    payLaterStatus:false,
    payLater:"",
    title:"vip",
    type:"phase 1",
    price:"RM 148",
    TicketStatus:true,
    BuyButton:"Buy Now",
    BuyButtonStatus:true,
    link1:"",
    link2:"",
  }

  const Ticket3={
    payLaterStatus:false,
    payLater:"",
    title:"vip",
    type:"phase 2",
    price:"RM 168",
    TicketStatus:true,
    BuyButton:"Buy Now",
    BuyButtonStatus:true,
    link1:"",
    link2:"",
  }
  return (
    <div className="text-[#fff] self-center pb-6 md:pb-11">
     
    <TicketHeadingLabel text="premium ADMISSION (VVIP)" />
    <div className="flex flex-wrap justify-center  gap-3 mt-12  min-w-[90vw] md:min-w-[60vw]">
    {/* <TicketContainer  {...Ticket1}  /> */}
    <TicketContainer  {...Ticket2}  />
    <TicketContainer  {...Ticket3}  />

    </div>
</div>
  )
}

export default TicketVip