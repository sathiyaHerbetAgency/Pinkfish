/* eslint-disable */
"use client";
import "../../styles/contact.css";
import { Footer, NewNavbar } from "../../components";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";
import Head from './../../components/head';
import LeftBanner from './../../components/Form/LeftBanner';
import FormFields from './../../components/Form/FormFields';
const initialState = {
  firstName: "",
  lastName:'',
  email: "",
  subject:'',
  othertext:'',
  message:'',
  phone:'',
  };
const Form = () => {
  const [{ firstName, email, lastName, subject,message,otherText,phone }, setState] = useState(initialState);
 let popupOverlayRef = useRef(null);
  let popupContainerRef = useRef(null);
  let closePopupButtonRef = useRef(null);
  const [disableBtn,setDisableBtn]=useState(false)
  const [check,setCheck]=useState(false)
  const form = useRef();
  const router = useRouter();
  const description="Discover the vibrant Pinkfish Music & Arts Festival, featuring live acts and art installations from local and international artists. Join us for a unique creative experience! "
  const title="Experience the Best Music Festival in Malaysia - Pinkfish "

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
    <div className="flex flex-col">
    <Head title={title} description={description} />
      <NewNavbar />
        <div className="md:max-w-[1550px] w-[100vw]  flex md:flex-row flex-col justify-center text-white self-center">
           
            <div className="w-full md:w-[55%] text-black">
                <FormFields />
            </div>

        </div>
      <img
        className=" md:block hidden right-[0] top-[70%]  fixed" src="/fish.png"/>
      <Footer />
    </div>
  );
};
export default Form;
