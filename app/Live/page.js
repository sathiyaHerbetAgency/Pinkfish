import { PinkText, Events, Gallery, Hero2, Banner } from '../../sections';
import Navbar from '../../sections/Navbar';
import FooterLive from '../../sections/FooterLive'
import '../../styles/live.css';
import Head from './../../components/head';

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
  <div className="bg-black overflow-hidden">
    <Hero2 />
    <PinkText />
    <Events />
    <Gallery />
    <Banner />
  </div>
  <FooterLive />
  </>
);
};
export default Page;
