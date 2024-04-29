import Link from "next/link";
import "../styles/live.css"
const Banner = () => (
  <section className="text-white flex justify-center mt-11 pb-11 bg-black">
    <div className="banner_container_live p-6 w-5/6 pt-6 md:pt-24 pb-6 md:pb-24 flex flex-col self-center relative ">
      <img className="absolute banner_img_1_live hidden md:block" src="Live/Banner/over_banner_1.png" />
      <img className="absolute banner_img_2_live hidden md:block" src="Live/Banner/over_banner_2.png" />
      <img className="absolute banner_img_3_live hidden md:block" src="Live/Banner/over_banner_3.png" />
      <img className="absolute banner_img_4_live hidden md:block" src="Live/Banner/over_banner_4.png" />
      <h1 className="banner_header_live self-center mb-4 mt-4">stay updated</h1>
      <p className="banner_text_live text-center self-center">Follow us on our social media pages</p>
      <div className="flex gap-4 pt-4 self-center items-center">
      <Link href='https://www.facebook.com/pinkfishfestival/' target="_blank"> <img src="Live/Banner/fb.png" /></Link>
      <Link href='https://www.youtube.com/@Pinkfishfestival' target="_blank"> <img src="Live/Banner/youTube.png" /></Link>
      <Link href='https://www.instagram.com/pinkfishfestival/' target="_blank"> <img src="Live/Banner/instagram 1.png" /></Link>
      <Link href='https://www.tiktok.com/@pinkfishfestival' target="_blank"> <img src="Live/Banner/tikTok.png" /></Link>

      </div>
    </div>
  </section>
);
export default Banner;
