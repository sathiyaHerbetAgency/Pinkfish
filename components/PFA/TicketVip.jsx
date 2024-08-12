/* eslint-disable */
import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';
import TicketContainer from './Components/TicketContainer';

const TicketVip = () => {
  return (
    <div className="text-[#fff] self-center">
     
    <TicketHeadingLabel text="premium ADMISSION (vip)" />
    <div className="flex flex-wrap justify-center  gap-3  min-w-[90vw] md:min-w-[60vw]">
    <TicketContainer color="gray" title="vip" type="Earlybird" price="RM 328" buttonText="Buy tickets 13 aug, 12pm" link="#" />
    <TicketContainer color="gray" title="vip" type="phase 1" price="RM 358" buttonText="coming soon" link="" />
    <TicketContainer color="gray" title="vip" type="phase 2" price="RM 388" buttonText="coming soon" link="" />

    </div>
</div>
  )
}

export default TicketVip