/* eslint-disable */
"use client";
import "../../styles/contact.css";
import  {Footer}   from "../../components";
import Link from "next/link";
// import AccordItem from './../../components/AccordItem';
import {NewNavbar}  from "../../components";
import AccordItem from "../../components/js/AccordItem";

const Faq = () => {
  const data0=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
    "Let Pinkfish be your way of life!"]
    const data1=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
      "Let Pinkfish be your way of life!"]
    const data2=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
      "Let Pinkfish be your way of life!"]
    const data3=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
      "Let Pinkfish be your way of life!"]
    const data4=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
      "Let Pinkfish be your way of life!"]
    const data5=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
      "Let Pinkfish be your way of life!"]
    const data6=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
      "Let Pinkfish be your way of life!"]
    const data7=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
      "Let Pinkfish be your way of life!"]
    const data8=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
      "Let Pinkfish be your way of life!"]
    const data9=["Pinkfish celebrates the best of dance, urban pop, and live music acts, all in one place. With a lineup of top-notch performers and artists, Pinkfish promises to be an unforgettable experience for music and art lovers alike. Whether you're a die-hard fan of your favourite performers or simply looking for a night of non-stop fun and entertainment, Pinkfish has something for everyone. It's more than just a festival - it's a celebration of creativity, expression, and community. Come and experience music, dance and art in new and exciting ways.",
      "Let Pinkfish be your way of life!"]
    
  return (
    <div>
      <NewNavbar />
       <div className="faq_main_container-main min-h-screen flex flex-col  text-white   ">
        <div className="md:w-[60vw] w-[80vw] self-center">
          <div className="flex  flex-col gap-6 pt-11 md:pb-24 pb-11">
            <h1 className="contact_text_header  self-center max-w-[90%] text-center">Frequently asked questions</h1>
          
          </div>
          <div className=" self-center">
          <AccordItem header="What is Pinkfish?" text={data1} no={"0"} />
              <hr className="hr_line_question " />
              <AccordItem header="What types of events does Pinkfish offers?" text={data2} no={"1"} />
              <hr className="hr_line_question " />
              <AccordItem header="Where are Pinkfish events held?" no={"2"} text={data3}  />
              <hr className="hr_line_question " />

              <AccordItem header="How can I stay updated on upcoming festivals?" no={"3"} text={data4} />

              <hr className="hr_line_question " />
              <AccordItem header="How can I become a vendor or sponsor?" no={"4"} text={data4} />

              <hr className="hr_line_question " />
              <AccordItem header="How can I purchase Pinkfish merchandise?" no={"5"} text={data4} />

              <hr className="hr_line_question " /> 
              <AccordItem header="How can I provide feedback or suggestions?" no={"6"} text={data4} />

              <hr className="hr_line_question " />
              <AccordItem header="Are there career opportunities with Pinkfish?" no={"7"} text={data4} />

              <hr className="hr_line_question " />
              <AccordItem header="Who can I contact for more information about Pinkfish?" no={"8"} text={data4} />

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
