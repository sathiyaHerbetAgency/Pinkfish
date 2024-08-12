/* eslint-disable */
import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';
import TicketContainer from './Components/TicketContainer';

const TicketGa = () => {
  return (
    <div  className="text-[#fff] self-center  ">
     
        <TicketHeadingLabel text="GENERAL ADMISSION (GA)" />
       
        <div className="flex flex-wrap justify-center  gap-3  min-w-[90vw] md:min-w-[60vw]">
        <TicketContainer color="pink" title="GENERAL ADMISSION" type="Earlybird" price="RM 198" buttonText="exclusive purchase only" link="#" />
        <TicketContainer color="gray" title="GENERAL ADMISSION" type="phase 1" price="RM 228" buttonText="BUY tickets 13 aug, 12pm" link="#" />
        <TicketContainer color="gray" title="GENERAL ADMISSION" type="phase 2" price="RM 258"  buttonText="coming soon" link="#" />
        
        
        </div>
    </div>
  )
}

export default TicketGa