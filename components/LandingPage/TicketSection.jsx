/* eslint-disable */
import React from 'react'
import { artistData } from './LandingPageData';
import TicketContainer from './TicketContainer';

const TicketSection = () => {
  return (
    <div className="flex flex-col">
        <h2 className="self-center text-white">{artistData.ticketSectionHeading}</h2>
        <TicketContainer />
    </div>
  )
}

export default TicketSection