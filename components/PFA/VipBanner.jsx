import React from 'react'

const VipBanner = () => {
    const bannerContent={
        title:'VIP PERKS',
        text1:'x1 Complimentary Drink Coupon',
        text2:'Exclusive Elevated Viewing VIP Deck',
        text3:'Exclusive Access To VIP & General Admissions Areas ',
        text4:'VIP Designated Express Lanes',
        text5:'Exclusive VIP Space (Private Bar & Lounge)',

    }
  return (
    <>
    <div className=" hidden md:block">
      <div className="flex flex-col">
        <div className="vip-banner flex flex-col justify-center min-h-[200px] min-w-[65vw] self-center">
            <div className="flex gap-4 self-center w-[80%]">
              <div className="flex flex-col  h-full basis-1/3  border-r-2 border-[#fff]">
                <h1 className="text-[20px] md:text-[24px] font-[Integral] text-[#9A9A9A]">{bannerContent.title}</h1>
                <h1 className="text-[10px] md:text-[14px] font-[Sofia] text-[#000]">{bannerContent.text1}</h1>

              </div>
              <div className="flex flex-col  h-full basis-1/3  border-r-2 border-[#fff]">
                <h1 className="text-[10px] md:text-[14px] font-[Sofia] text-[#000]">{bannerContent.text2}</h1>
                <h1 className="text-[10px] md:text-[14px] font-[Sofia] text-[#000]">{bannerContent.text3}</h1>

              </div> <div className="flex flex-col  h-full basis-1/3 ">
                <h1 className="text-[10px] md:text-[14px] font-[Sofia] text-[#000]">{bannerContent.text4}</h1>
                <h1 className="text-[10px] md:text-[14px] font-[Sofia] text-[#000]">{bannerContent.text5}</h1>

              </div>
            </div>

        </div>
      </div>
    </div>
    <div className="flex flex-col md:hidden">
      <div className="vip-banner flex flex-col justify-center min-h-[230px] max-w-[85vw] self-center">
          <div className="flex gap-4 self-center w-[90%]">
            <div className="flex flex-col  h-full basis-1/2  border-r-2 border-[#fff]">
              <h1 className="text-[20px] md:text-[24px] font-[Integral] text-[#9A9A9A]">{bannerContent.title}</h1>
              <h1 className="text-[10px] md:text-[14px] font-[Sofia] text-[#000]">{bannerContent.text1}</h1>
              <h1 className="text-[10px] md:text-[14px] font-[Sofia] text-[#000]">{bannerContent.text2}</h1>
            </div>
            <div className="flex flex-col  h-full basis-1/2  ">
              <h1 className="text-[10px] md:text-[14px] font-[Sofia] text-[#000]">{bannerContent.text3}</h1>
              <h1 className="text-[10px] md:text-[14px] font-[Sofia] text-[#000]">{bannerContent.text4}</h1>
              <h1 className="text-[10px] md:text-[14px] font-[Sofia] text-[#000]">{bannerContent.text5}</h1>

            </div>
          </div>

      </div>
    </div>
    </>
  )
}

export default VipBanner