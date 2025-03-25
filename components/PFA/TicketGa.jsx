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
    price:"RM 198",
    TicketStatus:false,
    BuyButton:"Sold Out",
    BuyButtonStatus:false,
    link1:"#",
    link2:"#",
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
    link1:"https://www.ticket2u.com.my/event/42178_df7cc8f7d6ef440e8c1062e18677a7f0/pinkfish-arena-boris-brejcha-at%c2%a0malaysia",
    link2:"https://www.ticket2u.com.my/event/42179_fa68d130c3314363b5235fbfdb45eec9/bnpl-pinkfish-arena-boris-brejcha-at%c2%a0malaysia",
   
  }

  const Ticket3={
    payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"phase 2",
    price:"RM 248",
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
    <div  className="text-[#fff] self-center flex flex-col ">
     
        <TicketHeadingLabel text="GENERAL ADMISSION (GA)" />
       
        <div className="flex flex-wrap justify-center items-start  gap-3  max-w-[90vw] md:md:max-w-[1100px] self-center">
        <TicketContainer {...Ticket1} />
        <TicketContainer {...Ticket2} />
        <TicketContainer {...Ticket3} />
        <TicketContainer {...Ticket4} />
        </div>
    </div>
  )
}

export default TicketGa