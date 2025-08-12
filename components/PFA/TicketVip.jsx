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
    TicketStatus:false,
    BuyButton:"sold out",
    BuyButtonStatus:false,
     link1:"https://www.ticket2u.com.my/event/43246_380e571bc2164fd2a175c9fc2aff3cee/pinkfish-presents-nifra-360-madness-malaysia",
    link2:"https://www.ticket2u.com.my/event/43248_3eb7cc124cd5479b9d498324ab09ef00/bnpl-pinkfish-presents-nifra-360-madness-malaysia",
  }

  const Ticket3={
    payLaterStatus:false,
    payLater:"",
    title:"vip",
    type:"phase 2",
    price:"RM 168",
    TicketStatus:false,
    BuyButton:"Sold Out",
    BuyButtonStatus:false,
    link1:"https://www.ticket2u.com.my/event/43246_380e571bc2164fd2a175c9fc2aff3cee/pinkfish-presents-nifra-360-madness-malaysia",
    link2:"https://www.ticket2u.com.my/event/43248_3eb7cc124cd5479b9d498324ab09ef00/bnpl-pinkfish-presents-nifra-360-madness-malaysia",
  }
  const Ticket4={
    payLaterStatus:true,
    payLater:"Buy Now Pay Later",
    title:"vip",
    type:"Elevated",
    price:"RM 248",
    TicketStatus:true,
    BuyButton:"Buy Now",
    BuyButtonStatus:true,
    link1:"https://www.ticket2u.com.my/event/43246_380e571bc2164fd2a175c9fc2aff3cee/pinkfish-presents-nifra-360-madness-malaysia",
    link2:"https://www.ticket2u.com.my/event/43248_3eb7cc124cd5479b9d498324ab09ef00/bnpl-pinkfish-presents-nifra-360-madness-malaysia",
  }
  return (
    <div className="text-[#fff] self-center pb-6 md:pb-11">
     
    <TicketHeadingLabel text="premium ADMISSION (VIP)" />
    <div className="flex flex-wrap justify-center  gap-3 mt-12  min-w-[90vw] md:min-w-[60vw]">
    {/* <TicketContainer  {...Ticket1}  /> */}
    <TicketContainer  {...Ticket2}  />
    <TicketContainer  {...Ticket3}  />
    <TicketContainer  {...Ticket4}  />

    </div>
</div>
  )
}

export default TicketVip