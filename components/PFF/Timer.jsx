/* eslint-disable */

'use client'
import React, { useState, useRef, useEffect } from "react";
import Heading from './Heading';

const Timer = () => {
    // stop it when needed
    const countdownDate = new Date('12/31/2024');
    //end date
    const [state, setState] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
 
    useEffect(() => {
        const interval = setInterval(() => setNewTime(), 1000);
        //indicating function to rerun every 1000 milliseconds (1 second)
    
        if(state.seconds < 0){
          clearInterval(interval)
        //Stop the rerun once state.seconds is less than zero
        }
      }, []);
    
      const setNewTime = () => {
        if (countdownDate) {
          const currentTime = new Date();
          //get current time now in milliseconds
          const distanceToDate = countdownDate - currentTime;
          //get difference dates in milliseconds
          let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
          // get number of days from the difference in dates
          let hours = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          );
          // get number of minutes from the remaining time after removing hours
          let minutes = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
          );
          let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
          // number of hours from the remaining time after removing seconds
    
          const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
          days = `${days}`;
          if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
          } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
          } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
          }
          // a logic to add 0 in front of numbers such that 1 will be 01, 2 will be 02, and so on.
    
          setState({ days, hours, minutes, seconds });
          //Updating the state variable.
        }
      };

  return (
    <div className="flex flex-col md:gap-11 ">
       {/* <Heading type="1" /> */}
       <Heading text={"counting down to #pfc2024"} page={"PFC"}  />

        <div className="flex flex-col">
        {
            state.seconds < 0 ?
            <div className='counter-timer'> Time up </div>
            :
            <div className='flex flex-col md:flex-row gap-6  self-center'>
              <div className="flex gap-6">
            <div className='counter-timer-wrapper flex flex-col'>
              <div className='counter-timer'>{state.days || '00'}</div>
              <span  className='counter-text' >Days</span>
            </div>
          
            <div className='counter-timer-wrapper'>
              <div className='counter-timer'>{state.hours || '00'}</div>
              <span className='counter-text'  >Hours</span>
            </div>
            </div>
            <div className="flex gap-6">
            <div className='counter-timer-wrapper'>
              <div className='counter-timer'>{state.minutes || '00'}</div>
              <span className='counter-text'  >Minutes</span>
            </div>
            

          
            <div className='counter-timer-wrapper'>
              <div className='counter-timer'>{state.seconds || '00'}</div>
              <span className='counter-text'  >Seconds</span>
            </div>
            </div>
          </div>
        }

    </div>
    </div>
  )
}

export default Timer