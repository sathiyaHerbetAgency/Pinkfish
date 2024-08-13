/* eslint-disable */
import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';
import TicketContainer from './Components/TicketContainer';

const TicketGa = () => {
  return (
    <div  className="text-[#fff] self-center  ">
     
        <TicketHeadingLabel text="GENERAL ADMISSION (GA)" />
       
        <div className="flex flex-wrap justify-center  gap-3  min-w-[90vw] md:min-w-[60vw]">
        <TicketContainer payLater="buy now pay later" color="pink" title="GENERAL ADMISSION" type="Earlybird" price="RM 198" buttonText="Buy Now" link1="#https://www.ticket2u.com.my/event/37375" link2="https://www.ticket2u.com.my/event/37445" />
        <TicketContainer payLater="buy now pay later"  color="pink" title="GENERAL ADMISSION" type="phase 1" price="RM 228" buttonText="Buy Now" link1="#https://www.ticket2u.com.my/event/37375" link2="https://www.ticket2u.com.my/event/37445" />
        <TicketContainer color="gray" title="GENERAL ADMISSION" type="phase 2" price="RM 258"  buttonText="coming soon" link="#" />
        
        
        </div>
    </div>
  )
}

export default TicketGa