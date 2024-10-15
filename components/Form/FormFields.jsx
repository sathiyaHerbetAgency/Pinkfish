/* eslint-disable */
"use client";
import React,{useState,useRef,useEffect} from 'react'
import "../../styles/contact.css";
import axios from "axios";
const initialState = {
  Name: "",
  Phone:'',
  Email: "",
  TableNumber:'',
  DrinkType:'',
  }
const FormFields = () => {
  const text="text-white text-[14px] leading-[24px] md:text-[14px] md:leading-[24.66px] font-[Sofia] font-[400] ";
  const textSmall="text-white text-[8px] leading-[14px] md:text-[10px] md:leading-[16.66px] font-[Sofia] font-[400] ";
  const heading= "self-center text-white text-[24px] leading-[28px] md:text-[28px] md:leading-[36.66px] font-[Sofia] font-[700] mb-6 ";


    const [{ Name,Phone, Email,TableNumber, DrinkType}, setState] = useState(initialState);
    const [loading,setLoading]=useState(false)
    let popupOverlayRef = useRef(null);
    let popupContainerRef = useRef(null);
    let closePopupButtonRef = useRef(null);
    const [resultText, setResultText]=useState("")
    const formRef = useRef(null);
    const urlForm="https://script.google.com/macros/s/AKfycbwkMdM2su79hkYKcopWBAcJu2t_C0kmqNcMSojCIXEYgfMWCLOtnVOPz8R0trFplogZ/exec"
    const clearState = () => {
      setState({ ...initialState });
    };

    const onChange = (e) => {
      const { name, value } = e.target;
      
      setState((prevState) => ({ ...prevState, [name]: value }));
   }
   function formSubmit(e) {
    setLoading(true)
    openPopup()

    e.preventDefault();
    const formData = new FormData(formRef.current);
        // axios.post(urlForm, formData)
    // axios.post(urlForm, formData)
    const data={
      Name,
      Email,
      Phone,
      TableNumber,
      DrinkType,
    };
    axios.post(urlForm, formData).then((res)=>{
      if(res.data.result==="success"){
        setResultText(" Your Response Recorded Successfully")
        setLoading(false)

      }else{
        setResultText("Sorry Try Again")
        setLoading(false)
      }
    })

    // axios.post(urlForm, formData)
    // .then(function (response) {
    //   console.log('Data sent successfully:', response.data);
    // })
    // .catch(function (error) {
    //   console.error('Error Message:', error);  // Logs the error message
    // });
  
   }

   function openPopup(e) {
    popupOverlayRef.current.style.display = "flex";
   setTimeout(() => {
      popupContainerRef.current.style.opacity = "1";
      popupContainerRef.current.style.transform = "scale(1)";
    }, 100);
  }
  function closePopup() {
    formRef.current.reset();
    setTimeout(() => {
      popupOverlayRef.current.style.display = "none";
      popupContainerRef.current.style.opacity = "0";
      popupContainerRef.current.style.transform = "scale(0.8)";
    }, 300);
   
  }
  return (
    <div>
      <div className="flex flex-col justify-center w-[100%] md:h-[620px] my-6 md:my-0 bg-black">
        <h2 className={heading}>Beverage Selection for #PFC2024</h2>
        <form ref={formRef}  
  onSubmit={formSubmit}
 className="flex flex-col  lg:w-[468px] w-[90%] max-w-[300px] md:max-w-[468px] self-center gap-3">
                    <input name='Name'     className="bg-white rounded-md text-black p-2 pl-6 w-full font-[Sofia]" type="text" placeholder="Name"/>
                    <input name='Phone'   className="bg-white rounded-md text-black p-2 pl-6" type="tel" placeholder="Phone Number"/>
                    <input name='Email'    className="bg-white rounded-md text-black p-2 pl-6 w-full" type="text" placeholder="Email"/>
                    <div class="relative">
                    <select  name="TableNumber"  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="" disabled selected>Select Table Number</option>
                      <option value="Gold 1-8" >Gold 1-8</option>
                      <option value="Silver 1-11">Silver 1-11</option>
                      <option value="Bronze 1-14">Bronze 1-14</option>
                    </select>

                  </div>
                    <div class="relative">
                    <select  name="DrinkType"  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="" disabled selected>Select Drink</option>
                      <option value="Gin" >Gin</option>
                      <option value="Whisky">Whisky</option>
                      <option value="Vodka">Vodka</option>
                    </select>
                    <p className={textSmall}>*Beverage brands are subject to change without prior notice.
                    </p>
                    {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1805_2483)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1.74846e-07V15H7V0L9 1.74846e-07Z" fill="#111111"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 16L0 8.35198L1.4142 7L7.99998 13.296L14.5858 7L16 8.35198L7.99998 16Z" fill="#111111"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1805_2483">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                    </div> */}
                  </div>
                  <div  className="bg-[#FF0086] w-[100px] flex justify-center rounded-md p-1 border py-2 border-[#2D29D7]">
                    <button type="submit" className={text}>Submit</button>
                  </div>
                  </form>
        </div>
        <div ref={popupOverlayRef} className="popup-overlay">
          <div ref={popupContainerRef} className="popup-container">
            {loading?<div className="popup-card"><img className="w-[100px] h-[50px] self-center" src="./Svg/spinner-form.svg" alt="" />  </div>:
            <div className="popup-card  mt-6">
              <p className="thanks_text mb-6">
              Your Response Recorded Successfully
              </p>
              <button
                id="close-popup"
                onClick={() => {closePopup()}}
              >
                Close
              </button>
            </div>
}
          </div>
        </div>
    </div>
  )
}

export default FormFields