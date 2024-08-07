/* eslint-disable */

'use client'
import React, { useState, useRef, useEffect } from "react";
import CalendarContainer from './Components/CalendarContainer';


const Calendar = () => {
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
    <div className="flex flex-col md:gap-11 justify-center  py-24 ">
      <div className="flex gap-6 self-center ">
        <div className="flex flex-col justify-center pb-11">
          <h1 className="text-[36px] font-[700] tracking-[2px] font-[Integral] text-center  text-[#fff]  uppercase">
            mark your
          </h1>
          <h1 className="text-[36px] font-[700] tracking-[2px] font-[Integral] text-center  text-[#fff]  uppercase">
            calendars!
          </h1>
        </div>
        <div className="flex flex-col">
          {state.seconds < 0 ? (
            <div className="counter-timer"> Time up </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-6  self-center">
              <div className="flex gap-6">
                <div className="flex flex-col gap-3">
                  <CalendarContainer text={state.days || "00"} />
                  <h1 className="text-[#fff] text-[24px] font-[ShareTech-Regular] text-center  uppercase">
                    {" "}
                    Days{" "}
                  </h1>
                </div>
                <div className="flex flex-col gap-3">
                  <CalendarContainer text={state.hours || "00"} />
                  <h1 className="text-[#fff] text-[24px] font-[ShareTech-Regular] text-center  uppercase">
                    {" "}
                    Hours{" "}
                  </h1>
                </div>{" "}
                <div className="flex flex-col gap-3">
                  <CalendarContainer text={state.minutes || "00"} />
                  <h1 className="text-[#fff] text-[24px] font-[ShareTech-Regular] text-center  uppercase">
                    {" "}
                    Minutes{" "}
                  </h1>
                </div>{" "}
                <div className="flex flex-col gap-3">
                  <CalendarContainer text={state.seconds || "00"} />
                  <h1 className="text-[#fff] text-[24px] font-[ShareTech-Regular] text-center  uppercase">
                    {" "}
                    Seconds{" "}
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar