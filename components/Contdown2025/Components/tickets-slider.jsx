/* eslint-disable */
"use client"

import { useRef } from "react"
import TicketCard from "./TicketCard"
import { ticketsData } from "../data/tickets"
import { slickSettings } from "../config/slickConfig"
import { useSlickLoader } from "../hooks/useSlickLoader"
import {
  containerStyle,
  maxWidthStyle,
  headerStyle,
  titleStyle,
  sliderContainerStyle,
  disclaimerStyle,
} from "../styles/sliderStyles"
import { useMediaQuery } from "react-responsive";
const TicketsSlider = () => {
   const isMobile = useMediaQuery({ maxWidth: 768 });
  const sliderRef = useRef(null)

  // Load and initialize Slick carousel
  useSlickLoader(sliderRef, slickSettings)

  return (
    <section id='tickets' style={containerStyle}>
      <div style={maxWidthStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle(isMobile)}>BLIND SALE</h2>
        </div>

        <div style={sliderContainerStyle}>
          <div ref={sliderRef}>
            {ticketsData.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>

        <div style={disclaimerStyle(isMobile)}>DISCLAIMER: TICKET PRICE EXCLUDES TICKET FEE & BOOKING CHARGES</div>
      </div>
    </section>
  )
}

export default TicketsSlider
