/* eslint-disable */
"use client";
import React,{useState,useRef} from 'react'
import "../../styles/contact.css";
import axios from "axios";
const initialState = {
  name: "",
  phone:'',
  email: "",
  tableNumber:'',
  drinkType:'',
  }
const FormFields = () => {
  const text="text-white text-[14px] leading-[24px] md:text-[14px] md:leading-[24.66px] font-[Sofia] font-[400] ";
    const [{ name,phone, email, tableNumber, drinkType }, setState] = useState(initialState);
    let popupOverlayRef = useRef(null);
    let popupContainerRef = useRef(null);
    let closePopupButtonRef = useRef(null);
    const [resultText, setResultText]=useState("")
    const clearState = () => {
      setState({ ...initialState });
    };

    const onChange = (e) => {
      const { name, value } = e.target;
      
      setState((prevState) => ({ ...prevState, [name]: value }));
   }
   function formSubmit(e) {
    e.preventDefault();
    console.log(name,email,phone,tableNumber,drinkType)
    const data={
      Name:name,
      Email:email,
      Phone:phone,
      TableNumber:tableNumber,
      DrinkType:drinkType,
    };
    axios.post('https://api.sheetbest.com/sheets/b66b75ad-a1e3-451e-97ac-7b5005ea2b45',data).then((res)=>{
      console.log(res)
      if(res.status===200){
        setResultText(" Your Response Recorded Successfully")
        openPopup()

      }else{
        setResultText("Sorry Try Again")
        openPopup()
      }
    })
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
    setTimeout(() => {
      popupOverlayRef.current.style.display = "none";
      popupContainerRef.current.style.opacity = "0";
      popupContainerRef.current.style.transform = "scale(0.8)";
    }, 300);
   
  }

  return (
    <div>
      <div className="flex flex-col justify-center w-[100%] md:h-[620px] my-6 md:my-0 bg-black">
        <form onSubmit={formSubmit} className="flex flex-col  lg:w-[468px] w-[90%] max-w-[300px] md:max-w-[468px] self-center gap-3">
                    <input name='name'  onChange={onChange} value={name}  className="bg-white rounded-md text-black p-2 pl-6 w-full font-[Sofia]" type="text" placeholder="Name"/>
                    <input name='phone' onChange={onChange} value={phone}  className="bg-white rounded-md text-black p-2 pl-6" type="tel" placeholder="Phone Number"/>
                    <input name='email' onChange={onChange} value={email}  className="bg-white rounded-md text-black p-2 pl-6 w-full" type="text" placeholder="Email"/>
                    <input name='tableNumber' onChange={onChange} value={tableNumber}  className="bg-white rounded-md text-black p-2 pl-6" type="tel" placeholder="Table Number"/>
                    <div class="relative">
                    <select onChange={onChange} name="drinkType" value={drinkType} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option value="" disabled selected>Select Drink</option>
                      <option value="first" >First</option>
                      <option value="second">Second</option>
                    </select>
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
            <div className="popup-card mt-6">
              <p className="thanks_text mb-6">
               {resultText}
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
  )
}

export default FormFields