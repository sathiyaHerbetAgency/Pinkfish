/* eslint-disable */
import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';
import TicketContainer from './Components/TicketContainer';

const TicketGa = () => {
  const Ticket1={
    payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"Earlybird",
    price:"RM 88",
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
    price:"RM 98",
    TicketStatus:false,
    BuyButton:"Buy Now",
    BuyButtonStatus:true,
    link1:"#",
    link2:"#",
   
  }

  const Ticket3={
     payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"phase 1",
    price:"RM 108",
    TicketStatus:false,
    BuyButton:"Buy Now",
    BuyButtonStatus:true,
    link1:"#",
    link2:"#",
   
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
    <div  className="text-[#fff] self-center flex flex-col ">
     
        <TicketHeadingLabel text="GENERAL ADMISSION (GA)" />
       
        <div className="flex flex-wrap justify-center items-start  gap-3  max-w-[90vw] md:md:max-w-[1100px] self-center">
        <TicketContainer {...Ticket1} />
        <TicketContainer {...Ticket2} />
        <TicketContainer {...Ticket3} />
        {/* <TicketContainer {...Ticket4} /> */}
        </div>
    </div>
  )
}

export default TicketGa