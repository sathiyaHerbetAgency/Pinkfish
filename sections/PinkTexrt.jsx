import "../styles/live.css"
import "../styles/home.css"
import Marquee from "react-fast-marquee";
import { SvgPinkText } from './../components/Live/SvgPinkText';
const PinkText = () => (
  <div className="horizantal_pink_container_live">
    <Marquee direction="right">
      <div class=" flex justify-around min-w-[100vw] text-white">
        <h2 className="horizantal_text_1_live  ">what the fish?</h2>
        <SvgPinkText />
        <h2 className="horizantal_text_2 ">PinkFishLive</h2>
        <SvgPinkText />
        <h2 className="horizantal_text_1_live  ">what the fish?</h2>
        <SvgPinkText />
        <h2 className="horizantal_text_2 ">PinkFishLive</h2>
        <SvgPinkText />
      </div>
    </Marquee>
  </div>
);
export default PinkText;
