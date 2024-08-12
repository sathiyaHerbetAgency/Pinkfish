/* eslint-disable */
import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';
import TicketContainer from './Components/TicketContainer';

const TicketGa = () => {
  return (
    <div className="text-[#fff] self-center  ">
     
        <TicketHeadingLabel text="GENERAL ADMISSION (GA)" />
       
        <div className="flex flex-wrap justify-center  gap-3  min-w-[90vw] md:min-w-[60vw]">
        <TicketContainer title="GENERAL ADMISSION" type="Earlybird" price="RM 198" />
        <TicketContainer title="GENERAL ADMISSION" type="phase 1" price="RM 228" />
        <TicketContainer title="GENERAL ADMISSION" type="phase 2" price="RM 258" />
        
        
        </div>
    </div>
  )
}

export default TicketGa