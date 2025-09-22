/* eslint-disable */
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="text-white py-4 flex justify-center items-center relative"
      style={{
        background: "radial-gradient(circle, #022F87 0%, #090E19 100%)",
      }}
    >
      <div className="flex items-center gap-4">
        <div className="">
          <Image
            src="/PFC2025/Hero/pfc-logo.png"
            alt="Pinkfish Countdown"
            width={100}
            height={66}
            className="w-[80px] md:w-[100px] h-[36px] md:h-[46px]"
          />
        </div>
        <button className="border border-pink-500  px-4 py-2 rounded hover:bg-pink-500 transition font-[Manrope-Bold] text-[11px]">
          BUY TICKETS
        </button>
      </div>
    </header>
  );
}
