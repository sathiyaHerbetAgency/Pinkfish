import { PinkText, Events, Gallery, Hero2, Banner } from '../../sections';
import Navbar from '../../sections/Navbar';
import FooterLive from '../../sections/FooterLive'
import '../../styles/live.css';

const Page = () => (
  <>
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
export default Page;
