/* eslint-disable */
"use client";
import "../../styles/contact.css";
import  {Footer}   from "../../components";
import Link from "next/link";
// import AccordItem from './../../components/AccordItem';
import {NewNavbar}  from "../../components";
import AccordItem from "../../components/js/AccordItem";

const Faq = () => {
  const data0=
  <div className="flex flex-col gap-2 py-3 ">
  <p className="world_text   leading-relaxed" >Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.</p>
    <p className="world_text  leading-relaxed"> Let Pinkfish be your way of life!</p>
    </div>;
    const data1=<p className="world_text py-3  leading-relaxed" >We throw a diverse range of events, including music festivals, concerts, and arena shows. Each event promises a unique and exciting experience!</p>
    const data2=<p className="world_text py-3  leading-relaxed" >Our events are held in various locations based on the type of event. Want to know where the next event is? Follow our official Facebook & Instagram – @pinkfishfestival for all the deets!</p>
    const data3=<p className="world_text py-3  leading-relaxed" >Stay in the loop by following us on social media, and regularly checking our Instagram and Facebook page for the latest updates</p>
    const data4=<p className="world_text py-3  leading-relaxed" >We welcome vendors and sponsors to join our festivals. Drop us an email at <a className="font-medium text-[#F33288] dark:text-[#F33288] hover:underline" target="_blank" href="mailto:info@pinkfishfestival.com" >info@pinkfishfestival.com</a> for more information on the application process and the benefits of collaborating with us!</p>
    const data5=<p className="world_text py-3  leading-relaxed" >You can grab our merchandise online at  <a className="font-medium text-[#F33288] dark:text-[#F33288] hover:underline" target="_blank" href="https://pinkfishfestival.com/merchandise" >here</a> or directly at our festivals. Explore our range of apparel, accessories, and unique memorabilia.</p>
    const data6=<p className="world_text py-3  leading-relaxed" >We love to hear your feedback and suggestions! Drop us an email at <a className="font-medium text-[#F33288] dark:text-[#F33288] hover:underline" href="mailto:info@pinkfishfestival.com" >info@pinkfishfestival.com.</a> or contact us directly to share your thoughts and help us make things even better!</p>
    const data7=<p className="world_text py-3  leading-relaxed" >Yes, we are always on the lookout for passionate and creative individuals to join our team. Email us at <a className="font-medium text-[#F33288] dark:text-[#F33288] hover:underline" target="_blank" href="mailto:marketing@pinkfishfestival.com" >marketing@pinkfishfestival.com</a> and let’s chat!</p>
    const data8=<p className="world_text py-3  leading-relaxed" >For more details or questions, kindly email us at <a className="font-medium text-[#F33288] dark:text-[#F33288] hover:underline" href="mailto:info@pinkfishfestival.com" >info@pinkfishfestival.com.</a></p>
    // const data9=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
    //   "Let Pinkfish be your way of life!"]
    
  return (
    <div>
      <NewNavbar />
       <div className="faq_main_container-main min-h-screen flex flex-col  text-white   ">
        <div className="md:w-[60vw] w-[80vw] self-center">
          <div className="flex  flex-col gap-6 pt-11 md:pb-24 pb-11">
            <h1 className="contact_text_header  self-center max-w-[90%] text-center">Frequently asked questions</h1>
          
          </div>
          <div className=" self-center">
          <AccordItem header="What is Pinkfish?" text={data0} no={"0"} />
              <hr className="hr_line_question " />
              <AccordItem header="What types of events does Pinkfish offers?" text={data1} no={"1"} />
              <hr className="hr_line_question " />
              <AccordItem header="Where are Pinkfish events held?" no={"2"} text={data2}  />
              <hr className="hr_line_question " />

              <AccordItem header="How can I stay updated on upcoming festivals?" no={"3"} text={data3} />

              <hr className="hr_line_question " />
              <AccordItem header="How can I become a vendor or sponsor?" no={"4"} text={data4} />

              <hr className="hr_line_question " />
              <AccordItem header="How can I purchase Pinkfish merchandise?" no={"5"} text={data5} />

              <hr className="hr_line_question " /> 
              <AccordItem header="How can I provide feedback or suggestions?" no={"6"} text={data6} />

              <hr className="hr_line_question " />
              <AccordItem header="Are there career opportunities with Pinkfish?" no={"7"} text={data7} />

              <hr className="hr_line_question " />
              <AccordItem header="Who can I contact for more information about Pinkfish?" no={"8"} text={data8} />

              <hr className="hr_line_question " />
          </div>

        </div>
      </div>
      <Footer />
      <img
        className=" md:block hidden right-[0] top-[70%]  fixed  "
        src="/fish.png"
      />  
      
    </div>
  );
};

export default Faq;
