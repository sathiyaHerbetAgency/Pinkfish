/* eslint-disable */
import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';
import TicketContainer from './Components/TicketContainer';

const TicketGa = () => {
  const Ticket1={
    payLaterStatus:false,
    payLater:"Sold out",
    title:"GENERAL ADMISSION",
    type:"Earlybird",
    price:"RM 198",
    TicketStatus:false,
    BuyButton:"Sold out",
    BuyButtonStatus:false,
    link1:"https://www.ticket2u.com.my/event/37375",
    link2:"https://www.ticket2u.com.my/event/37445",
  }
  const Ticket2={
    payLaterStatus:true,
    payLater:"buy now pay later",
    title:"GENERAL ADMISSION",
    type:"phase 1",
    price:"RM 228",
    TicketStatus:true,
    BuyButton:"Buy Now",
    BuyButtonStatus:true,
    link1:"https://www.ticket2u.com.my/event/37375",
    link2:"https://www.ticket2u.com.my/event/37445",
  }

  const Ticket3={
    payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"phase 2",
    price:"RM 258",
    TicketStatus:false,
    BuyButton:"Coming Soon",
    BuyButtonStatus:false,
    link1:"",
    link2:"",
  }
  return (
    <div  className="text-[#fff] self-center  ">
     
        <TicketHeadingLabel text="GENERAL ADMISSION (GA)" />
       
        <div className="flex flex-wrap justify-center  gap-3  min-w-[90vw] md:min-w-[60vw]">
        <TicketContainer {...Ticket1} />
        <TicketContainer {...Ticket2} />
        <TicketContainer {...Ticket3} />
        
        
        </div>
    </div>
  )
}

export default TicketGa