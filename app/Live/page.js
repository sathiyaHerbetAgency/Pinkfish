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
      <Head title={title} description={description} />
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
