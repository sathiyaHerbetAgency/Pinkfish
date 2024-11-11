// import { PinkText, Events, Gallery, Hero2, Banner } from '../../sections';
import Navbar from '../../sections/Navbar';
import FooterLive from '../../sections/FooterLive'
import '../../styles/live.css';
import Head from './../../components/head';
import Hero from './../../components/PFF/Hero';
import Label from './../../components/PFF/Label';
import Heading from './../../components/PFF/Heading';
import Video from './../../components/PFF/Video';
import Banner from './../../components/PFF/Banner';
import Bottom from './../../components/PFF/Bottom';
import Slider from './../../components/PFF/Slider';
import Gallery from './../../components/PflNew/Gallery';

const Page = () => {
  const description="Discover the best live music events in Malaysia & Southeast Asia with Pinkfish! Immerse yourself in the vibrant music scene and experience unforgettable performances."
  const title="Live music event in Malaysia & Southeast Asia | Pinkfish  "
  
  return(
  <>
      <>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property='og:title' content='Pinkfish Festival'/>
    <meta property='og:image' content='/thumbnail.png'/>
    <meta property='og:description' content={description}/>
    <meta property='og:url' content='www.pinkfishfestival.com'/>
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='627' />
    <link rel="icon" href="/fav_icon.png" />
  </>
  <Navbar />
  {/* <div className="bg-black overflow-hidden">
    <Hero2 />
    <PinkText />
    <Events />
    <Gallery />
    <Banner />
  </div> */}
   <div className="bg-black">
            <Hero select={"PFL"} />
            <Label text={"see you in 2025"} />
            <div className="gradient-container-pfl flex flex-col ">
              <div className=" flex flex-col self-center md:max-w-[100vw]">
                <Slider select="PFL" />
               <Heading text={"TYGA live in kuala lumpur"} page={"PFF"} />
               <Video id={"nHNpHVcrCSk"} />
               </div>
               <Heading text={"#PFL gallery "} page={"PFF"}/>
               <Gallery select={"PFF"} />
               <Banner  select={"PFL"}  />
               <Bottom select={"PFL"}  />
            </div>
        </div>
  <FooterLive />
  </>
);
};
export default Page;
