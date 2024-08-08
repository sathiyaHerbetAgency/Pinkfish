/* eslint-disable */
import React from 'react'
import TicketHeadingLabel from './Components/TicketHeadingLabel';
import TicketContainer from './Components/TicketContainer';

const TicketVip = () => {
  return (
    <div className="text-[#fff] self-center">
     
    <TicketHeadingLabel text="premium ADMISSION (vip)" />
    <div className="grid grid-cols-3 gap-4">
    <TicketContainer title="vip" type="Earlybird" price="RM 328" />
    <TicketContainer title="vip" type="phase 1" price="RM 358" />
    <TicketContainer title="vip" type="phase 2" price="RM 388" />

    </div>
</div>
  )
}

export default TicketVip