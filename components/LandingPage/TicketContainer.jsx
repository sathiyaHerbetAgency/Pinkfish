/* eslint-disable */
"use client"
import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip';
import ReactFlipCard from 'reactjs-flip-card'
const TicketContainer = () => {
    const [isFlipped,setIsFlipped]=useState(false);
    function handleClick(e) {
        e.preventDefault();
        setIsFlipped(!isFlipped);
      }
      const styles = {
        card: {background: 'blue', color: 'white', borderRadius: 20,},
    }
  return (
    <div className="text-white">
         {/* <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront="0.1"  flipSpeedFrontToBack="0.2" flipDirection="horizontal">
        <div className="bg-white min-h-[300px] w-[200px] m-10 text-black">
          This is the front of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>

        <div className="bg-black min-h-[300px] w-[200px] m-10">
          This is the back of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip> */}
      <ReactFlipCard
            frontStyle={styles.card}
            backStyle={styles.card}
            frontComponent={<div>Hover me!</div>}
            backComponent={<div>Back!</div>}
        />
    </div>
  )
}

export default TicketContainer