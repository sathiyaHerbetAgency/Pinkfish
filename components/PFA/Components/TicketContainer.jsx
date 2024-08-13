/* eslint-disable */
import React from 'react'
import  Link  from 'next/link';

const TicketContainer = ({payLater,color,title,type,price,buttonText, link1,link2}) => {
  return (
    <div  className="flex flex-col pt-11">
        <div className="flex flex-col gap-6 w-[160px] md:w-[280px]">
          <div className="flex flex-col">
            {/* <div className='ticket-bg flex flex-col justify-center text-center w-full  h-[75px] '  > */}
           
            {/* </div> */}
            <div className={`${color==="pink"?"ticket-body-bg":"ticket-body-bg-gray"}  flex flex-col justify-start h-[190px] md:h-[330px] gap-0 w-full`}  >
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
            {link1&& <Link  href={link1} target="_blank" className={`uppercase rounded py-2 md:py-3 font-[Integral] text-[16px] text-center min-w-[100%] ${color==="pink"?"bg-[#FF0086]":"bg-[#6C6066]"} `}>  {buttonText} </Link>}
       {payLater&& <Link  href={link2} target="_blank" className={`uppercase rounded py-2 md:py-3 font-[Integral] text-[16px] text-center min-w-[100%] ${color==="pink"?"bg-[#FF0086]":"bg-[#6C6066]"} `}>  {payLater} </Link>
}
            
        </div>

    </div>
  )
}

export default TicketContainer