/* eslint-disable */
import React from 'react'

const TicketContainer = ({title,type,price}) => {
  return (
    <div  className="flex flex-col pt-11">
        <div className="flex flex-col gap-6 w-[160px] md:w-[280px]">
          <div className="flex flex-col">
            {/* <div className='ticket-bg flex flex-col justify-center text-center w-full  h-[75px] '  > */}
           
            {/* </div> */}
            <div className='ticket-body-bg flex flex-col justify-start h-[190px] md:h-[330px] gap-0 w-full'  >
              <div className="flex flex-col justify-around min-h-[80%] md:min-h-[70%]">
                <h1 className="text-[10px] w-[100%] text-center md:text-[14px] font-[100]  font-[Integral] text-[#fff]  uppercase"> {title}</h1>

                <div className="">
                  <h1 className="text-[16px] md:text-[20px]  tracking-[1px] font-[Integral] text-center  text-[#fff]  uppercase">{type}</h1>
                  <h1 className="text-[34px] md:text-[40px]  tracking-[1px] font-[Integral] text-center  text-[#fff]  uppercase">{price}</h1>
                </div>
                </div>
                {/* <img src="./PFA/globe_ticket.png" className="w-full mr-2 h-[80px]" alt="globe" /> */}
            </div>
            </div>
        <button type='button' className='uppercase contact_submit min-w-[100%] bg-[#FF0086]'> <a href="" target="_blank" > Buy Now </a></button>
           
            
        </div>

    </div>
  )
}

export default TicketContainer