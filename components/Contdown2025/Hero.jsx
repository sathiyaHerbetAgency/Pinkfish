"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
// import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 173,
    hours: 14,
    minutes: 28,
    seconds: 45,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-12-31T23:59:59").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        }
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
    }

    setTimeLeft(calculateTimeLeft())

},[])
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/PFC2025/Hero/hero-bg.webp" alt="Futuristic space background" fill className="object-cover" priority />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="flex justify-center">
            <img src="/PFC2025/Hero/title.webp" alt="headoing text"  className="object-cover w-[50%]"  />
        </div>
        <h1 className="text-md sm:text-md md:text-xl lg:text-2xl font-[InterBold]  text-[#FFD900] mb-4  mt-6  tracking-wide">
          {"WE'RE BACK THIS NEW YEAR'S EVE!"}
        </h1>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 sm:mb-12">
          <div className="bg-gradient-to-b from-[#022F87] via-[#011A4B]/50 to-transparent rounded-2xl p-4 sm:p-6 lg:p-8  min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-[press-start-2p] text-white mb-2">
              {timeLeft.days.toString().padStart(3, "0")}
            </div>
            <div className="text-yellow-400 text-sm sm:text-base lg:text-lg font-semibold tracking-wider">DAYS</div>
          </div>

          <div className="bg-gradient-to-b from-[#022F87] via-[#011A4B]/50 to-transparent rounded-2xl p-4 sm:p-6 lg:p-8  min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-[press-start-2p] text-white mb-2">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-yellow-400 text-sm sm:text-base lg:text-lg font-semibold tracking-wider">HOURS</div>
          </div>

          <div className="bg-gradient-to-b from-[#022F87] via-[#011A4B]/50 to-transparent rounded-2xl p-4 sm:p-6 lg:p-8  min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-[press-start-2p] text-white mb-2">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-yellow-400 text-sm sm:text-base lg:text-lg font-semibold tracking-wider">MINUTES</div>
          </div>

          {/* <div className="bg-gradient-to-b from-[#022F87] via-[#011A4B]/50 to-transparent rounded-2xl p-4 sm:p-6 lg:p-8  min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-[press-start-2p] text-white mb-2">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-yellow-400 text-sm sm:text-base lg:text-lg font-semibold tracking-wider">SECONDS</div>
          </div> */}
        </div>

        {/* Subtitle */}
        <p className="text-white text-lg sm:text-[14px] lg:text-[19px] font-[InterBold] mb-4 sm:mb-6 tracking-wide">
          UNTIL WE LIGHT UP THE NIGHT AGAIN
        </p>

        {/* CTA Button */}
        <button
        
          className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-[20px] font-[InterBlack]  sm:text-[14px] px-4 sm:px-12 py-2 sm:py-4 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
        >
          BUY TICKETS
        </button>
      </div>

      {/* Animated particles effect */}
      {/* <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-50" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" />
      </div> */}
    </section>
  )
}
