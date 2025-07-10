/* eslint-disable */
"use client"

import Image from "next/image"
import {
  getButtonStyle,
  cardStyle,
  contentStyle,
  ticketBgStyle,
  overlayStyle,
  titleStyle,
  subtitleStyle,
  priceStyle,
  comingSoonStyle,
  soonStyle,
  belowContentStyle,
  featuresStyle,
  descriptionStyle,
} from "../styles/ticketStyles"
import { useMediaQuery } from "react-responsive";
const TicketCard = ({ ticket }) => {
  const buttonStyle = getButtonStyle(ticket.status)
const isMobile = useMediaQuery({ maxWidth: 768 });
  const handleButtonHover = (e, isHover) => {
    if (ticket.status === "available") {
      if (isHover) {
        e.target.style.transform = "scale(1.05)"
        e.target.style.boxShadow = "0 10px 25px rgba(236, 72, 153, 0.3)"
      } else {
        e.target.style.transform = "scale(1)"
        e.target.style.boxShadow = "none"
      }
    }
  }

  const handleButtonClick = (e) => {
    e.stopPropagation() // Prevent slider interaction when clicking button
    if (ticket.status === "available") {
      // Handle purchase logic here
      console.log(`Purchase ticket: ${ticket.id}`)
    }
  }

  return (
    <div style={cardStyle}>
      <div style={contentStyle}>
        <div style={ticketBgStyle}>
          <Image
            src="/PFC2025/Ticket/ticket-bg.webp"
            alt="Ticket background"
            width={300}
            height={220}
              className="w-[300px] h-[220px] md:w-[300px] md:h-[220px] ]"
            draggable={false}
          />

          <div style={overlayStyle}>
            <h3 style={titleStyle(isMobile)}>{ticket.title}</h3>
            {ticket.subtitle && <p style={subtitleStyle}>{ticket.subtitle}</p>}

            {ticket.status === "available" && ticket.price && <div style={priceStyle(isMobile)}>{ticket.price}</div>}

            {ticket.status === "coming-soon" && (
              <div style={comingSoonStyle(isMobile)}>
                COMING
                <br />
             <span style={soonStyle(isMobile)} >SOON</span>
              </div>
            )}
          </div>
        </div>

        <div style={belowContentStyle}>
          {ticket.status === "available" && ticket.features && (
            <div style={featuresStyle}>
              {ticket.features.map((feature, idx) => (
                <div key={idx}>• {feature}</div>
              ))}
            </div>
          )}

          <button
            style={buttonStyle}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={handleButtonClick}
          >
            {ticket.status === "available" ? "ON SALE: 14 July, 12pm" : "COMING SOON"}
          </button>

            {ticket.description && 
           
              <p style={descriptionStyle}>{ticket.description}</p>
          
            }
          
        </div>
      </div>
    </div>
  )
}

export default TicketCard
