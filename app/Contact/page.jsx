/* eslint-disable */
"use client";
import "../../styles/contact.css";
import { Footer, NewNavbar } from "../../components";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
const initialState = {
  firstName: "",
  lastName:'',
  email: "",
  subject:'',
  othertext:'',
  message:'',
  phone:'',
  };
const Contact = () => {
  const [{ firstName, email, lastName, subject,message,otherText,phone }, setState] = useState(initialState);
 let popupOverlayRef = useRef(null);
  let popupContainerRef = useRef(null);
  let closePopupButtonRef = useRef(null);
  const [disableBtn,setDisableBtn]=useState(false)
  const [check,setCheck]=useState(false)
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  // const [otherText, setOtherText] = useState("");
  const form = useRef();
  const router = useRouter();
const clearState = () => {
    setState({ ...initialState });
  };
  const onChangeRadio = (e) => {
    const { name, value } = e.target;
   setState((prevState) => ({ ...prevState, [name]: value }));
    setState((prevState) => ({ ...prevState, otherText: "" }));
};
 const onChangeOtherText = (e) => {
    const { name, value } = e.target;
  if(!subject || subject!=='Other'){
    setState((prevState) => ({ ...prevState, subject: "Other" }));
   
 }
  setState((prevState) => ({ ...prevState, [name]: value }));
 };
 const onChange = (e) => {
    const { name, value } = e.target;
    
    setState((prevState) => ({ ...prevState, [name]: value }));
 }
  function openPopup(e) {
    popupOverlayRef.current.style.display = "flex";
   setTimeout(() => {
      popupContainerRef.current.style.opacity = "1";
      popupContainerRef.current.style.transform = "scale(1)";
    }, 100);
  }
  function closePopup() {
    clearState()  
    setDisableBtn(false)
    setCheck(false)
    setTimeout(() => {
      popupOverlayRef.current.style.display = "none";
      popupContainerRef.current.style.opacity = "0";
      popupContainerRef.current.style.transform = "scale(0.8)";
    }, 300);
   
  }
  function formSubmit(e) {
    e.preventDefault();
    emailjs.init("LG7J2OXSLLOa5pKI9");
    let params = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      subject: subject === "Other" ? otherText : subject,
      message: message,
    };
    if(!check){
      setCheck(true)
   emailjs.send("service_2qisjeo","template_nfb2e2p",params )
    .then(()=>{
      openPopup()
    },()=>{
      alert("something wrong try again")
      clearState()
    })
   }
 }
  function checkSubject(e) {
    if (e !== "Other") {
      setOtherText("");
    }
    setSubject(e);
  }
  return (
    <>
      <NewNavbar />
      <div className="contact_main_container min-h-screen  text-white">
        <div className="hidden md:block">
          <div className="flex flex-col gap-6 pt-11 pb-24 ">
            <h1 className="contact_text_header self-center">contact us</h1>
            <h1 className="contact_sub_text self-center">
              Get in touch with us now for any inquiries and issues! Sit tight
              as we get back to you.
            </h1>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="  flex flex-col md:flex-row bg-contact pb-6 pt-11 md:w-[70%] min-w-[70vw]  self-center">
            <div className="md:basis-2/5  flex justify-center ">
              <div className="md:w-[60%] w-[70vw] gap-3 flex flex-col justify-center">
                <h1 className="contact_header hidden md:block">
                  reach out to us
                </h1>
                <h1 className="contact_text_header_mob md:hidden ">
                  contact us
                </h1>
                <h1 className="contact_sub_text_mob self-center md:hidden">
                  Get in touch with us now for any inquiries and issues! Sit
                  tight as we get back to you.
                </h1>
                <div className="flex flex-row  md:gap-3 gap-4 mt-6 ">
                  <a href="mailto:info@pinkfishfestival.com">
                    <img className=" md:w-8  " src="/email_contact.svg" />
                  </a>
                  <a
                    href="https://www.instagram.com/pinkfishfestival/"
                    target="_blank"
                    className="flex gap-2 items-center"
                  >
                    <img className="md:w-6 " src="/ig_contact.svg" />
                  </a>
                  <a
                    href="https://www.youtube.com/@Pinkfishfestival"
                    target="_blank"
                    className="flex gap-2 items-center"
                  >
                    <img className="md:w-6 w-8" src="/yt_contact.svg" />
                  </a>
                  <a
                    href="https://www.facebook.com/pinkfishfestival/"
                    target="_blank"
                    className="flex gap-2 items-center"
                  >
                    <img className="md:w-6 w-8" src="/fb_contact.svg" />
                  </a>
                  <a
                    href=" https://www.tiktok.com/@pinkfishfestival"
                    target="_blank"
                    className="flex gap-2 items-center"
                  >
                    <img className="md:w-6 w-8" src="/tt_contact.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:ml-0   md:w-[100%] w-[100vw] mt-11 md:mt-0 ">
              <form
                ref={form}
                onSubmit={(e) => {formSubmit(e),setDisableBtn(true)}}
                className="flex flex-col  w-[70vw] md:pr-6 md:w-[100%] self-center   gap-8"
              >
                <div className="flex md:flex-row   flex-col gap-6">
                  <div className="flex flex-col  md:w-[50%] ">
                    <label className="contact_label">First Name</label>
                    <input
                      className="contact_input"
                      required
                      name='firstName'
                      onChange={onChange}
                      value={firstName}
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col  md:w-[50%]">
                    <label className="contact_label">Last Name</label>
                    <input
                      className="contact_input"
                      required
                      name='lastName'
                      onChange={onChange}
                      value={lastName}
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row  flex-col gap-6">
                  <div className="flex flex-col  md:w-[50%] ">
                    <label className="contact_label">Email</label>
                    <input
                      className="contact_input"
                      required
                      name='email'
                      value={email}
                      onChange={onChange}
                      type="text"/>
                      </div>
                  <div className="flex flex-col md:w-[50%]">
                    <label className="contact_label" >
                      Phone Number
                    </label>
                    <input
                      name='phone'
                      onChange={onChange}
                      required
                      value={phone}
                      className="contact_input"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="flex flex-col  gap-2">
                  <label className="contact_label">Select Subject?</label>
                  <div class="flex md:flex-row flex-col gap-3">
                    <div class="flex items-center  ">
                      <input
                        id="inline-checked-radio"
                        type="radio"
                        value="General Inquiry"
                        checked={subject==="General Inquiry"}
                        name="subject"
                        onChange={onChangeRadio}
                        class="w-4 h-4 text-[#F33288] bg-[#f8cbdf]"
                      />
                      <label
                        for="inline-checked-radio"
                        class="ml-2  text-[12px] font-[Sofia] font-[400] text-[#F33288] "
                      >
                        General Inquiry
                      </label>
                    </div>
                    <div class="flex items-center  ">
                      <input
                        id="inline-2-radio"
                        type="radio"
                        value="Carrer"
                        checked={subject==="Carrer"}
                        name="subject"
                        onClick={onChangeRadio}
                        class="w-4 h-4 text-[#F33288] bg-[#f8cbdf]"
                      />
                      <label
                        for="inline-2-radio"
                        class="ml-2 text-[12px] font-[Sofia] font-[400] text-[#F33288] "
                      >
                        Career
                      </label>
                    </div>
                    <div class="flex items-center  ">
                      <input
                        id="inline-2-radio"
                        type="radio"
                        value="Other"
                        name="subject"
                        checked={subject==="Other"}
                        onClick={onChangeRadio}
                        class="w-4 h-4 text-[#F33288] bg-[#f8cbdf]"
                      />
                      <label
                        for="inline-2-radio"
                        class="ml-2 text-[12px] font-[Sofia] font-[400] text-[#F33288] "
                      >
                        Other
                      </label>
                      <input
                        className="contact_input mb-3 w-full  md:hidden "
                        value={otherText}
                        name='otherText'
                        onChange= {onChangeOtherText}
                        type="text"
                      />
                    </div>
                    <input
                      className="contact_input mb-3 w-full hidden md:block "
                      onkeydown="return false"
                      value={otherText}
                      name='otherText'
                     type="none"
                      readonly
                      onChange= {onChangeOtherText}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col  gap-2">
                    <label className="contact_label">Message</label>
                    <textarea
                    name='message'
                    value={message}
                      onChange={onChange}
                      className="contact_input"
                      rows="2"
                      cols="50"
                      type="text"
                    />
                  </div>
                </div>
                <div className="contact_submit self-center md:self-start items-center">
                  <button className="flex " type="submit" disabled={disableBtn}>
                    Send Message
                    {/* <svg className="mt-2 ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
            </svg> */}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div ref={popupOverlayRef} class="popup-overlay">
          <div ref={popupContainerRef} class="popup-container">
            <div class="popup-card mt-6">
              <p className="thanks_text mb-6">
                Thank you for reaching out. We will contact you soon
              </p>
              <button
                id="close-popup"
                onClick={() => {closePopup()}}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className=" md:block hidden right-[0] top-[70%]  fixed" src="/fish.png"/>
      <Footer />
    </>
  );
};
export default Contact;
