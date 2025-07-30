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
    TicketStatus:false,
    BuyButton:"Sold Out",
    BuyButtonStatus:false,
    link1:"https://www.ticket2u.com.my/event/43246_380e571bc2164fd2a175c9fc2aff3cee/pinkfish-presents-nifra-360-madness-malaysia",
    link2:"https://www.ticket2u.com.my/event/43248_3eb7cc124cd5479b9d498324ab09ef00/bnpl-pinkfish-presents-nifra-360-madness-malaysia",
  }
  const Ticket2={
    payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"phase 1",
    price:"RM 98",
    TicketStatus:false,
    BuyButton:"Sold Out",
    BuyButtonStatus:false,
     link1:"https://www.ticket2u.com.my/event/43246_380e571bc2164fd2a175c9fc2aff3cee/pinkfish-presents-nifra-360-madness-malaysia",
    link2:"https://www.ticket2u.com.my/event/43248_3eb7cc124cd5479b9d498324ab09ef00/bnpl-pinkfish-presents-nifra-360-madness-malaysia",
  }
   
  

  const Ticket3={
    payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"phase 2",
    price:"RM 108",
    TicketStatus:false,
    BuyButton:"Sold Out",
    BuyButtonStatus:false,
     link1:"https://www.ticket2u.com.my/event/43246_380e571bc2164fd2a175c9fc2aff3cee/pinkfish-presents-nifra-360-madness-malaysia",
    link2:"https://www.ticket2u.com.my/event/43248_3eb7cc124cd5479b9d498324ab09ef00/bnpl-pinkfish-presents-nifra-360-madness-malaysia",
  
   
  }
  const Ticket4={
    payLaterStatus:false,
    payLater:"",
    title:"GENERAL ADMISSION",
    type:"phase 3",
    price:"RM 128",
    TicketStatus:true,
    BuyButton:"Buy Now",
    BuyButtonStatus:true,
     link1:"https://www.ticket2u.com.my/event/43246_380e571bc2164fd2a175c9fc2aff3cee/pinkfish-presents-nifra-360-madness-malaysia",
    link2:"https://www.ticket2u.com.my/event/43248_3eb7cc124cd5479b9d498324ab09ef00/bnpl-pinkfish-presents-nifra-360-madness-malaysia",
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