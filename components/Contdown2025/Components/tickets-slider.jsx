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

const TicketsSlider = () => {
  const sliderRef = useRef(null)

  // Load and initialize Slick carousel
  useSlickLoader(sliderRef, slickSettings)

  return (
    <section style={containerStyle}>
      <div style={maxWidthStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>BLIND SALE</h2>
        </div>

        <div style={sliderContainerStyle}>
          <div ref={sliderRef}>
            {ticketsData.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>

        <div style={disclaimerStyle}>DISCLAIMER: TICKET PRICE EXLCUDES TICKET FEE & BOOKING CHARGES</div>
      </div>
    </section>
  )
}

export default TicketsSlider
