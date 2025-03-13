/* eslint-disable */
import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';
import TicketContainer from './Components/TicketContainer';

const TicketGa = () => {
  const Ticket1={
    payLaterStatus:true,
    payLater:"buy now pay later",
    title:"GENERAL ADMISSION",
    type:"Earlybird",
    price:"RM 198",
    TicketStatus:true,
    BuyButton:"Buy Now",
    BuyButtonStatus:true,
    link1:"#",
    link2:"#",
  }
  const Ticket2={
    payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"phase 1",
    price:"RM 228",
    TicketStatus:false,
    BuyButton:"Coming Soon",
    BuyButtonStatus:false,
    link1:"#",
    link2:"#",
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
  const Ticket4={
    payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"phase 3",
    price:"RM 298",
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
        <TicketContainer {...Ticket4} />
        </div>
    </div>
  )
}

export default TicketGa