/* eslint-disable */

import "../../styles/home.css";
import Marquee from "react-fast-marquee";
const Label1 = ({text}) => (
  // <div className="horizantal_pink_container_live_pff">
  //   <div class="relative marquee-container-pfc ">
  //     <div class="marquee-pfc flex justify-end   text-white gap-6">
  //       <div className="svg-gap">
  //         <svg className="svg-mob"
  //           width="68"
  //           height="59"
  //           viewBox="0 0 68 59"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
           
  //         >
  //           <g clip-path="url(#clip0_39_410)">
  //             <path
  //               d="M-8.09887 19.7983C0.533475 20.4971 0.910775 15.9152 9.54466 16.6142C18.1768 17.3144 17.7995 21.8963 26.4331 22.5969C35.067 23.2958 35.4443 18.7139 44.0766 19.4127C52.7105 20.1117 52.2008 22.8568 60.5077 25.3088C61.6681 25.6509 62.5212 25.4351 62.9096 25.8067L63.5564 25.8595L64.1951 18.1031L63.5482 18.0502C63.1599 17.6787 62.3052 17.8942 61.1463 17.5524C52.838 15.1002 53.3491 12.3552 44.7153 11.6563C36.0816 10.9557 35.7041 15.5392 27.0717 14.8404C18.4396 14.1402 18.8169 9.55826 10.1833 8.85774C1.54944 8.15875 1.17367 12.7409 -7.46021 12.0419C-16.0926 11.3432 -15.715 6.75975 -24.3489 6.06076C-25.0113 6.00691 -25.6181 5.9876 -26.191 5.99132L-26.6912 13.7468C-26.1599 13.7473 -25.5957 13.7675 -24.9875 13.8172C-16.3552 14.5159 -16.7328 19.0994 -8.10066 19.7996L-8.09887 19.7983Z"
  //               fill="#FF9BCB"
  //             />
  //             <path
  //               d="M-9.22038 33.4142C-0.588286 34.1145 -0.210732 29.531 8.42315 30.23C17.0552 30.9303 16.6779 35.5122 25.3116 36.2127C33.9454 36.9117 34.3212 32.3296 42.9551 33.0285C51.589 33.7275 51.0778 36.4725 59.3861 38.9247C60.5466 39.2668 61.3997 39.0509 61.788 39.4225L62.4349 39.4754L63.0736 31.719L62.4267 31.6661C62.0384 31.2945 61.1852 31.5104 60.0248 31.1683C51.7164 28.7161 52.2261 25.9709 43.5938 25.2721C34.9599 24.5731 34.5826 29.1551 25.9502 28.4563C17.3179 27.7576 17.6954 23.1741 9.06181 22.4736C0.429464 21.7749 0.0521633 26.3568 -8.58172 25.6578C-17.2141 24.9591 -16.8365 20.3756 -25.4701 19.6751C-26.0379 19.6289 -26.5675 19.6081 -27.0684 19.6047L-27.5691 27.3633C-27.1095 27.3694 -26.6241 27.3909 -26.1091 27.4331C-17.4767 28.1318 -17.8543 32.7152 -9.22216 33.4155L-9.22038 33.4142Z"
  //               fill="#FF9BCB"
  //             />
  //             <path
  //               d="M61.959 45.2758L61.3121 45.2229C60.9238 44.8513 60.0691 45.0669 58.9102 44.7251C50.6018 42.2729 51.113 39.5279 42.4792 38.8289C33.8453 38.13 33.4695 42.7121 24.8356 42.0131C16.2033 41.3144 16.5808 36.7309 7.94695 36.032C-0.68667 35.3314 -1.06269 39.9151 -9.69657 39.2162C-18.3289 38.5174 -17.9514 33.934 -26.585 33.2334C-27.0628 33.1942 -27.5122 33.1739 -27.9417 33.1664L-28.4427 40.9266C-28.0544 40.9367 -27.6519 40.9556 -27.2237 40.9899C-18.5913 41.6886 -18.9689 46.272 -10.3352 46.9726C-1.70289 47.6713 -1.32559 43.0894 7.30829 43.7884C15.9406 44.4871 15.5631 49.0706 24.1967 49.7711C32.8306 50.4701 33.2079 45.8882 41.8402 46.5869C50.4741 47.2859 49.9645 50.0311 58.2713 52.483C59.4317 52.8251 60.2849 52.6093 60.6732 52.9809L61.3201 53.0337L61.9587 45.2773L61.959 45.2758Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_410">
  //               <rect
  //                 width="94"
  //                 height="44"
  //                 fill="white"
  //                 transform="translate(-25.2007) rotate(9.37161)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //         <svg className="svg-mob"
  //           width="57"
  //           height="45"
  //           viewBox="0 0 57 45"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_415)">
  //             <path
  //               d="M14.7979 43.4676L39.2776 5.97314L56.5448 44.3598L14.7979 43.4676Z"
  //               fill="#FF9BCB"
  //             />
  //             <path
  //               d="M0.544922 24.1552L16.0794 0.359741L27.0379 24.7203L0.544922 24.1552Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_415">
  //               <rect
  //                 width="56"
  //                 height="44"
  //                 fill="white"
  //                 transform="translate(0.544922 0.359741)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>

  //         <svg className="svg-mob"
  //           width="55"
  //           height="55"
  //           viewBox="0 0 55 55"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_419)">
  //             <path
  //               d="M54.5449 21.0649C34.1795 21.3792 29.9756 18.7642 21.2501 0.359741C21.5644 20.7252 18.9494 24.929 0.544922 33.6546C20.9103 33.3403 25.1142 35.9553 33.8398 54.3597C33.5255 33.9943 36.1405 29.7904 54.5449 21.0649Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_419">
  //               <rect
  //                 width="54"
  //                 height="54"
  //                 fill="white"
  //                 transform="matrix(1 0 0 -1 0.544922 54.3597)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>

  //         <svg className="svg-mob"
  //           width="53"
  //           height="55"
  //           viewBox="0 0 53 55"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_422)">
  //             <path
  //               d="M36.4846 29.6754L45.6459 37.4482C48.2381 39.6481 48.4875 43.6251 46.1922 46.1456C43.8871 48.6778 39.9693 48.6912 37.6461 46.1758L29.4987 37.3559L27.5021 49.3876C26.9393 52.7773 23.7007 54.9806 20.4276 54.2003C17.1546 53.42 15.2006 49.98 16.1603 46.6859L19.5663 34.9898L8.4477 39.2202C5.27635 40.4268 1.76867 38.643 0.794132 35.3305C-0.177125 32.0314 1.76539 28.5763 5.04174 27.7759L16.6181 24.9433L7.44199 17.1588C4.85963 14.9689 4.61846 11.0053 6.91535 8.50501C9.20896 6.00805 13.0858 6.00134 15.386 8.49158L23.5793 17.3618L25.576 5.33012C26.1387 1.94043 29.3773 -0.262861 32.6504 0.517437C35.9235 1.29774 37.8775 4.73776 36.9177 8.03179L33.5117 19.7279L44.6943 15.474C47.8345 14.2792 51.3094 16.0361 52.2872 19.3134C53.2666 22.594 51.3389 26.0407 48.0757 26.8395L36.4813 29.6754H36.4846Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_422">
  //               <rect
  //                 width="52"
  //                 height="54"
  //                 fill="white"
  //                 transform="translate(0.544922 0.359741)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //       </div>
  //       <a className="horizantal_text_2_pff">{text}</a>
  //       <div className="flex gap-6">
  //         <svg className="svg-mob"
  //           width="68"
  //           height="59"
  //           viewBox="0 0 68 59"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_410)">
  //             <path
  //               d="M-8.09887 19.7983C0.533475 20.4971 0.910775 15.9152 9.54466 16.6142C18.1768 17.3144 17.7995 21.8963 26.4331 22.5969C35.067 23.2958 35.4443 18.7139 44.0766 19.4127C52.7105 20.1117 52.2008 22.8568 60.5077 25.3088C61.6681 25.6509 62.5212 25.4351 62.9096 25.8067L63.5564 25.8595L64.1951 18.1031L63.5482 18.0502C63.1599 17.6787 62.3052 17.8942 61.1463 17.5524C52.838 15.1002 53.3491 12.3552 44.7153 11.6563C36.0816 10.9557 35.7041 15.5392 27.0717 14.8404C18.4396 14.1402 18.8169 9.55826 10.1833 8.85774C1.54944 8.15875 1.17367 12.7409 -7.46021 12.0419C-16.0926 11.3432 -15.715 6.75975 -24.3489 6.06076C-25.0113 6.00691 -25.6181 5.9876 -26.191 5.99132L-26.6912 13.7468C-26.1599 13.7473 -25.5957 13.7675 -24.9875 13.8172C-16.3552 14.5159 -16.7328 19.0994 -8.10066 19.7996L-8.09887 19.7983Z"
  //               fill="#FF9BCB"
  //             />
  //             <path
  //               d="M-9.22038 33.4142C-0.588286 34.1145 -0.210732 29.531 8.42315 30.23C17.0552 30.9303 16.6779 35.5122 25.3116 36.2127C33.9454 36.9117 34.3212 32.3296 42.9551 33.0285C51.589 33.7275 51.0778 36.4725 59.3861 38.9247C60.5466 39.2668 61.3997 39.0509 61.788 39.4225L62.4349 39.4754L63.0736 31.719L62.4267 31.6661C62.0384 31.2945 61.1852 31.5104 60.0248 31.1683C51.7164 28.7161 52.2261 25.9709 43.5938 25.2721C34.9599 24.5731 34.5826 29.1551 25.9502 28.4563C17.3179 27.7576 17.6954 23.1741 9.06181 22.4736C0.429464 21.7749 0.0521633 26.3568 -8.58172 25.6578C-17.2141 24.9591 -16.8365 20.3756 -25.4701 19.6751C-26.0379 19.6289 -26.5675 19.6081 -27.0684 19.6047L-27.5691 27.3633C-27.1095 27.3694 -26.6241 27.3909 -26.1091 27.4331C-17.4767 28.1318 -17.8543 32.7152 -9.22216 33.4155L-9.22038 33.4142Z"
  //               fill="#FF9BCB"
  //             />
  //             <path
  //               d="M61.959 45.2758L61.3121 45.2229C60.9238 44.8513 60.0691 45.0669 58.9102 44.7251C50.6018 42.2729 51.113 39.5279 42.4792 38.8289C33.8453 38.13 33.4695 42.7121 24.8356 42.0131C16.2033 41.3144 16.5808 36.7309 7.94695 36.032C-0.68667 35.3314 -1.06269 39.9151 -9.69657 39.2162C-18.3289 38.5174 -17.9514 33.934 -26.585 33.2334C-27.0628 33.1942 -27.5122 33.1739 -27.9417 33.1664L-28.4427 40.9266C-28.0544 40.9367 -27.6519 40.9556 -27.2237 40.9899C-18.5913 41.6886 -18.9689 46.272 -10.3352 46.9726C-1.70289 47.6713 -1.32559 43.0894 7.30829 43.7884C15.9406 44.4871 15.5631 49.0706 24.1967 49.7711C32.8306 50.4701 33.2079 45.8882 41.8402 46.5869C50.4741 47.2859 49.9645 50.0311 58.2713 52.483C59.4317 52.8251 60.2849 52.6093 60.6732 52.9809L61.3201 53.0337L61.9587 45.2773L61.959 45.2758Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_410">
  //               <rect
  //                 width="94"
  //                 height="44"
  //                 fill="white"
  //                 transform="translate(-25.2007) rotate(9.37161)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //         <svg className="svg-mob"
  //           width="57"
  //           height="45"
  //           viewBox="0 0 57 45"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_415)">
  //             <path
  //               d="M14.7979 43.4676L39.2776 5.97314L56.5448 44.3598L14.7979 43.4676Z"
  //               fill="#FF9BCB"
  //             />
  //             <path
  //               d="M0.544922 24.1552L16.0794 0.359741L27.0379 24.7203L0.544922 24.1552Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_415">
  //               <rect
  //                 width="56"
  //                 height="44"
  //                 fill="white"
  //                 transform="translate(0.544922 0.359741)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>

  //         <svg className="svg-mob"
  //           width="55"
  //           height="55"
  //           viewBox="0 0 55 55"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_419)">
  //             <path
  //               d="M54.5449 21.0649C34.1795 21.3792 29.9756 18.7642 21.2501 0.359741C21.5644 20.7252 18.9494 24.929 0.544922 33.6546C20.9103 33.3403 25.1142 35.9553 33.8398 54.3597C33.5255 33.9943 36.1405 29.7904 54.5449 21.0649Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_419">
  //               <rect
  //                 width="54"
  //                 height="54"
  //                 fill="white"
  //                 transform="matrix(1 0 0 -1 0.544922 54.3597)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>

  //         <svg className="svg-mob"
  //           width="53"
  //           height="55"
  //           viewBox="0 0 53 55"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_422)">
  //             <path
  //               d="M36.4846 29.6754L45.6459 37.4482C48.2381 39.6481 48.4875 43.6251 46.1922 46.1456C43.8871 48.6778 39.9693 48.6912 37.6461 46.1758L29.4987 37.3559L27.5021 49.3876C26.9393 52.7773 23.7007 54.9806 20.4276 54.2003C17.1546 53.42 15.2006 49.98 16.1603 46.6859L19.5663 34.9898L8.4477 39.2202C5.27635 40.4268 1.76867 38.643 0.794132 35.3305C-0.177125 32.0314 1.76539 28.5763 5.04174 27.7759L16.6181 24.9433L7.44199 17.1588C4.85963 14.9689 4.61846 11.0053 6.91535 8.50501C9.20896 6.00805 13.0858 6.00134 15.386 8.49158L23.5793 17.3618L25.576 5.33012C26.1387 1.94043 29.3773 -0.262861 32.6504 0.517437C35.9235 1.29774 37.8775 4.73776 36.9177 8.03179L33.5117 19.7279L44.6943 15.474C47.8345 14.2792 51.3094 16.0361 52.2872 19.3134C53.2666 22.594 51.3389 26.0407 48.0757 26.8395L36.4813 29.6754H36.4846Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_422">
  //               <rect
  //                 width="52"
  //                 height="54"
  //                 fill="white"
  //                 transform="translate(0.544922 0.359741)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //       </div>

        
  //       </div>
        
  //       {/* <div class="marquee-pfc marquee2-pfc flex justify-end  min-w-[100vw] text-white ">
  //       <a className="horizantal_text_2_pff">{text}</a>
  //       <div className="flex gap-6">
  //         <svg className="svg-mob"
  //           width="68"
  //           height="59"
  //           viewBox="0 0 68 59"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_410)">
  //             <path
  //               d="M-8.09887 19.7983C0.533475 20.4971 0.910775 15.9152 9.54466 16.6142C18.1768 17.3144 17.7995 21.8963 26.4331 22.5969C35.067 23.2958 35.4443 18.7139 44.0766 19.4127C52.7105 20.1117 52.2008 22.8568 60.5077 25.3088C61.6681 25.6509 62.5212 25.4351 62.9096 25.8067L63.5564 25.8595L64.1951 18.1031L63.5482 18.0502C63.1599 17.6787 62.3052 17.8942 61.1463 17.5524C52.838 15.1002 53.3491 12.3552 44.7153 11.6563C36.0816 10.9557 35.7041 15.5392 27.0717 14.8404C18.4396 14.1402 18.8169 9.55826 10.1833 8.85774C1.54944 8.15875 1.17367 12.7409 -7.46021 12.0419C-16.0926 11.3432 -15.715 6.75975 -24.3489 6.06076C-25.0113 6.00691 -25.6181 5.9876 -26.191 5.99132L-26.6912 13.7468C-26.1599 13.7473 -25.5957 13.7675 -24.9875 13.8172C-16.3552 14.5159 -16.7328 19.0994 -8.10066 19.7996L-8.09887 19.7983Z"
  //               fill="#FF9BCB"
  //             />
  //             <path
  //               d="M-9.22038 33.4142C-0.588286 34.1145 -0.210732 29.531 8.42315 30.23C17.0552 30.9303 16.6779 35.5122 25.3116 36.2127C33.9454 36.9117 34.3212 32.3296 42.9551 33.0285C51.589 33.7275 51.0778 36.4725 59.3861 38.9247C60.5466 39.2668 61.3997 39.0509 61.788 39.4225L62.4349 39.4754L63.0736 31.719L62.4267 31.6661C62.0384 31.2945 61.1852 31.5104 60.0248 31.1683C51.7164 28.7161 52.2261 25.9709 43.5938 25.2721C34.9599 24.5731 34.5826 29.1551 25.9502 28.4563C17.3179 27.7576 17.6954 23.1741 9.06181 22.4736C0.429464 21.7749 0.0521633 26.3568 -8.58172 25.6578C-17.2141 24.9591 -16.8365 20.3756 -25.4701 19.6751C-26.0379 19.6289 -26.5675 19.6081 -27.0684 19.6047L-27.5691 27.3633C-27.1095 27.3694 -26.6241 27.3909 -26.1091 27.4331C-17.4767 28.1318 -17.8543 32.7152 -9.22216 33.4155L-9.22038 33.4142Z"
  //               fill="#FF9BCB"
  //             />
  //             <path
  //               d="M61.959 45.2758L61.3121 45.2229C60.9238 44.8513 60.0691 45.0669 58.9102 44.7251C50.6018 42.2729 51.113 39.5279 42.4792 38.8289C33.8453 38.13 33.4695 42.7121 24.8356 42.0131C16.2033 41.3144 16.5808 36.7309 7.94695 36.032C-0.68667 35.3314 -1.06269 39.9151 -9.69657 39.2162C-18.3289 38.5174 -17.9514 33.934 -26.585 33.2334C-27.0628 33.1942 -27.5122 33.1739 -27.9417 33.1664L-28.4427 40.9266C-28.0544 40.9367 -27.6519 40.9556 -27.2237 40.9899C-18.5913 41.6886 -18.9689 46.272 -10.3352 46.9726C-1.70289 47.6713 -1.32559 43.0894 7.30829 43.7884C15.9406 44.4871 15.5631 49.0706 24.1967 49.7711C32.8306 50.4701 33.2079 45.8882 41.8402 46.5869C50.4741 47.2859 49.9645 50.0311 58.2713 52.483C59.4317 52.8251 60.2849 52.6093 60.6732 52.9809L61.3201 53.0337L61.9587 45.2773L61.959 45.2758Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_410">
  //               <rect
  //                 width="94"
  //                 height="44"
  //                 fill="white"
  //                 transform="translate(-25.2007) rotate(9.37161)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //         <svg className="svg-mob"
  //           width="57"
  //           height="45"
  //           viewBox="0 0 57 45"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_415)">
  //             <path
  //               d="M14.7979 43.4676L39.2776 5.97314L56.5448 44.3598L14.7979 43.4676Z"
  //               fill="#FF9BCB"
  //             />
  //             <path
  //               d="M0.544922 24.1552L16.0794 0.359741L27.0379 24.7203L0.544922 24.1552Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_415">
  //               <rect
  //                 width="56"
  //                 height="44"
  //                 fill="white"
  //                 transform="translate(0.544922 0.359741)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>

  //         <svg className="svg-mob"
  //           width="55"
  //           height="55"
  //           viewBox="0 0 55 55"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_419)">
  //             <path
  //               d="M54.5449 21.0649C34.1795 21.3792 29.9756 18.7642 21.2501 0.359741C21.5644 20.7252 18.9494 24.929 0.544922 33.6546C20.9103 33.3403 25.1142 35.9553 33.8398 54.3597C33.5255 33.9943 36.1405 29.7904 54.5449 21.0649Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_419">
  //               <rect
  //                 width="54"
  //                 height="54"
  //                 fill="white"
  //                 transform="matrix(1 0 0 -1 0.544922 54.3597)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>

  //         <svg className="svg-mob"
  //           width="53"
  //           height="55"
  //           viewBox="0 0 53 55"
  //           fill="none"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <g clip-path="url(#clip0_39_422)">
  //             <path
  //               d="M36.4846 29.6754L45.6459 37.4482C48.2381 39.6481 48.4875 43.6251 46.1922 46.1456C43.8871 48.6778 39.9693 48.6912 37.6461 46.1758L29.4987 37.3559L27.5021 49.3876C26.9393 52.7773 23.7007 54.9806 20.4276 54.2003C17.1546 53.42 15.2006 49.98 16.1603 46.6859L19.5663 34.9898L8.4477 39.2202C5.27635 40.4268 1.76867 38.643 0.794132 35.3305C-0.177125 32.0314 1.76539 28.5763 5.04174 27.7759L16.6181 24.9433L7.44199 17.1588C4.85963 14.9689 4.61846 11.0053 6.91535 8.50501C9.20896 6.00805 13.0858 6.00134 15.386 8.49158L23.5793 17.3618L25.576 5.33012C26.1387 1.94043 29.3773 -0.262861 32.6504 0.517437C35.9235 1.29774 37.8775 4.73776 36.9177 8.03179L33.5117 19.7279L44.6943 15.474C47.8345 14.2792 51.3094 16.0361 52.2872 19.3134C53.2666 22.594 51.3389 26.0407 48.0757 26.8395L36.4813 29.6754H36.4846Z"
  //               fill="#FF9BCB"
  //             />
  //           </g>
  //           <defs>
  //             <clipPath id="clip0_39_422">
  //               <rect
  //                 width="52"
  //                 height="54"
  //                 fill="white"
  //                 transform="translate(0.544922 0.359741)"
  //               />
  //             </clipPath>
  //           </defs>
  //         </svg>
  //       </div>
  //       <a className="horizantal_text_2_pff">{text}</a>
  //     </div> */}
      
  //   </div>
  // </div>
  <div className="horizantal_pink_container_live_pff">
<Marquee direction="right" >
  <div className="flex justify-around min-w-[120vw] gap-6 px-6">
    <div className="svg-gap">
          <svg className="svg-mob"
            width="68"
            height="59"
            viewBox="0 0 68 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
           
          >
            <g clip-path="url(#clip0_39_410)">
              <path
                d="M-8.09887 19.7983C0.533475 20.4971 0.910775 15.9152 9.54466 16.6142C18.1768 17.3144 17.7995 21.8963 26.4331 22.5969C35.067 23.2958 35.4443 18.7139 44.0766 19.4127C52.7105 20.1117 52.2008 22.8568 60.5077 25.3088C61.6681 25.6509 62.5212 25.4351 62.9096 25.8067L63.5564 25.8595L64.1951 18.1031L63.5482 18.0502C63.1599 17.6787 62.3052 17.8942 61.1463 17.5524C52.838 15.1002 53.3491 12.3552 44.7153 11.6563C36.0816 10.9557 35.7041 15.5392 27.0717 14.8404C18.4396 14.1402 18.8169 9.55826 10.1833 8.85774C1.54944 8.15875 1.17367 12.7409 -7.46021 12.0419C-16.0926 11.3432 -15.715 6.75975 -24.3489 6.06076C-25.0113 6.00691 -25.6181 5.9876 -26.191 5.99132L-26.6912 13.7468C-26.1599 13.7473 -25.5957 13.7675 -24.9875 13.8172C-16.3552 14.5159 -16.7328 19.0994 -8.10066 19.7996L-8.09887 19.7983Z"
                fill="#FF9BCB"
              />
              <path
                d="M-9.22038 33.4142C-0.588286 34.1145 -0.210732 29.531 8.42315 30.23C17.0552 30.9303 16.6779 35.5122 25.3116 36.2127C33.9454 36.9117 34.3212 32.3296 42.9551 33.0285C51.589 33.7275 51.0778 36.4725 59.3861 38.9247C60.5466 39.2668 61.3997 39.0509 61.788 39.4225L62.4349 39.4754L63.0736 31.719L62.4267 31.6661C62.0384 31.2945 61.1852 31.5104 60.0248 31.1683C51.7164 28.7161 52.2261 25.9709 43.5938 25.2721C34.9599 24.5731 34.5826 29.1551 25.9502 28.4563C17.3179 27.7576 17.6954 23.1741 9.06181 22.4736C0.429464 21.7749 0.0521633 26.3568 -8.58172 25.6578C-17.2141 24.9591 -16.8365 20.3756 -25.4701 19.6751C-26.0379 19.6289 -26.5675 19.6081 -27.0684 19.6047L-27.5691 27.3633C-27.1095 27.3694 -26.6241 27.3909 -26.1091 27.4331C-17.4767 28.1318 -17.8543 32.7152 -9.22216 33.4155L-9.22038 33.4142Z"
                fill="#FF9BCB"
              />
              <path
                d="M61.959 45.2758L61.3121 45.2229C60.9238 44.8513 60.0691 45.0669 58.9102 44.7251C50.6018 42.2729 51.113 39.5279 42.4792 38.8289C33.8453 38.13 33.4695 42.7121 24.8356 42.0131C16.2033 41.3144 16.5808 36.7309 7.94695 36.032C-0.68667 35.3314 -1.06269 39.9151 -9.69657 39.2162C-18.3289 38.5174 -17.9514 33.934 -26.585 33.2334C-27.0628 33.1942 -27.5122 33.1739 -27.9417 33.1664L-28.4427 40.9266C-28.0544 40.9367 -27.6519 40.9556 -27.2237 40.9899C-18.5913 41.6886 -18.9689 46.272 -10.3352 46.9726C-1.70289 47.6713 -1.32559 43.0894 7.30829 43.7884C15.9406 44.4871 15.5631 49.0706 24.1967 49.7711C32.8306 50.4701 33.2079 45.8882 41.8402 46.5869C50.4741 47.2859 49.9645 50.0311 58.2713 52.483C59.4317 52.8251 60.2849 52.6093 60.6732 52.9809L61.3201 53.0337L61.9587 45.2773L61.959 45.2758Z"
                fill="#FF9BCB"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_410">
                <rect
                  width="94"
                  height="44"
                  fill="white"
                  transform="translate(-25.2007) rotate(9.37161)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg className="svg-mob"
            width="57"
            height="45"
            viewBox="0 0 57 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_39_415)">
              <path
                d="M14.7979 43.4676L39.2776 5.97314L56.5448 44.3598L14.7979 43.4676Z"
                fill="#FF9BCB"
              />
              <path
                d="M0.544922 24.1552L16.0794 0.359741L27.0379 24.7203L0.544922 24.1552Z"
                fill="#FF9BCB"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_415">
                <rect
                  width="56"
                  height="44"
                  fill="white"
                  transform="translate(0.544922 0.359741)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg className="svg-mob"
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_39_419)">
              <path
                d="M54.5449 21.0649C34.1795 21.3792 29.9756 18.7642 21.2501 0.359741C21.5644 20.7252 18.9494 24.929 0.544922 33.6546C20.9103 33.3403 25.1142 35.9553 33.8398 54.3597C33.5255 33.9943 36.1405 29.7904 54.5449 21.0649Z"
                fill="#FF9BCB"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_419">
                <rect
                  width="54"
                  height="54"
                  fill="white"
                  transform="matrix(1 0 0 -1 0.544922 54.3597)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg className="svg-mob"
            width="53"
            height="55"
            viewBox="0 0 53 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_39_422)">
              <path
                d="M36.4846 29.6754L45.6459 37.4482C48.2381 39.6481 48.4875 43.6251 46.1922 46.1456C43.8871 48.6778 39.9693 48.6912 37.6461 46.1758L29.4987 37.3559L27.5021 49.3876C26.9393 52.7773 23.7007 54.9806 20.4276 54.2003C17.1546 53.42 15.2006 49.98 16.1603 46.6859L19.5663 34.9898L8.4477 39.2202C5.27635 40.4268 1.76867 38.643 0.794132 35.3305C-0.177125 32.0314 1.76539 28.5763 5.04174 27.7759L16.6181 24.9433L7.44199 17.1588C4.85963 14.9689 4.61846 11.0053 6.91535 8.50501C9.20896 6.00805 13.0858 6.00134 15.386 8.49158L23.5793 17.3618L25.576 5.33012C26.1387 1.94043 29.3773 -0.262861 32.6504 0.517437C35.9235 1.29774 37.8775 4.73776 36.9177 8.03179L33.5117 19.7279L44.6943 15.474C47.8345 14.2792 51.3094 16.0361 52.2872 19.3134C53.2666 22.594 51.3389 26.0407 48.0757 26.8395L36.4813 29.6754H36.4846Z"
                fill="#FF9BCB"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_422">
                <rect
                  width="52"
                  height="54"
                  fill="white"
                  transform="translate(0.544922 0.359741)"
                />
              </clipPath>
            </defs>
          </svg>
        
    </div>
    <a className="horizantal_text_2_pff">{text}</a>
    <div className="svg-gap">
          <svg className="svg-mob"
            width="68"
            height="59"
            viewBox="0 0 68 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
           
          >
            <g clip-path="url(#clip0_39_410)">
              <path
                d="M-8.09887 19.7983C0.533475 20.4971 0.910775 15.9152 9.54466 16.6142C18.1768 17.3144 17.7995 21.8963 26.4331 22.5969C35.067 23.2958 35.4443 18.7139 44.0766 19.4127C52.7105 20.1117 52.2008 22.8568 60.5077 25.3088C61.6681 25.6509 62.5212 25.4351 62.9096 25.8067L63.5564 25.8595L64.1951 18.1031L63.5482 18.0502C63.1599 17.6787 62.3052 17.8942 61.1463 17.5524C52.838 15.1002 53.3491 12.3552 44.7153 11.6563C36.0816 10.9557 35.7041 15.5392 27.0717 14.8404C18.4396 14.1402 18.8169 9.55826 10.1833 8.85774C1.54944 8.15875 1.17367 12.7409 -7.46021 12.0419C-16.0926 11.3432 -15.715 6.75975 -24.3489 6.06076C-25.0113 6.00691 -25.6181 5.9876 -26.191 5.99132L-26.6912 13.7468C-26.1599 13.7473 -25.5957 13.7675 -24.9875 13.8172C-16.3552 14.5159 -16.7328 19.0994 -8.10066 19.7996L-8.09887 19.7983Z"
                fill="#FF9BCB"
              />
              <path
                d="M-9.22038 33.4142C-0.588286 34.1145 -0.210732 29.531 8.42315 30.23C17.0552 30.9303 16.6779 35.5122 25.3116 36.2127C33.9454 36.9117 34.3212 32.3296 42.9551 33.0285C51.589 33.7275 51.0778 36.4725 59.3861 38.9247C60.5466 39.2668 61.3997 39.0509 61.788 39.4225L62.4349 39.4754L63.0736 31.719L62.4267 31.6661C62.0384 31.2945 61.1852 31.5104 60.0248 31.1683C51.7164 28.7161 52.2261 25.9709 43.5938 25.2721C34.9599 24.5731 34.5826 29.1551 25.9502 28.4563C17.3179 27.7576 17.6954 23.1741 9.06181 22.4736C0.429464 21.7749 0.0521633 26.3568 -8.58172 25.6578C-17.2141 24.9591 -16.8365 20.3756 -25.4701 19.6751C-26.0379 19.6289 -26.5675 19.6081 -27.0684 19.6047L-27.5691 27.3633C-27.1095 27.3694 -26.6241 27.3909 -26.1091 27.4331C-17.4767 28.1318 -17.8543 32.7152 -9.22216 33.4155L-9.22038 33.4142Z"
                fill="#FF9BCB"
              />
              <path
                d="M61.959 45.2758L61.3121 45.2229C60.9238 44.8513 60.0691 45.0669 58.9102 44.7251C50.6018 42.2729 51.113 39.5279 42.4792 38.8289C33.8453 38.13 33.4695 42.7121 24.8356 42.0131C16.2033 41.3144 16.5808 36.7309 7.94695 36.032C-0.68667 35.3314 -1.06269 39.9151 -9.69657 39.2162C-18.3289 38.5174 -17.9514 33.934 -26.585 33.2334C-27.0628 33.1942 -27.5122 33.1739 -27.9417 33.1664L-28.4427 40.9266C-28.0544 40.9367 -27.6519 40.9556 -27.2237 40.9899C-18.5913 41.6886 -18.9689 46.272 -10.3352 46.9726C-1.70289 47.6713 -1.32559 43.0894 7.30829 43.7884C15.9406 44.4871 15.5631 49.0706 24.1967 49.7711C32.8306 50.4701 33.2079 45.8882 41.8402 46.5869C50.4741 47.2859 49.9645 50.0311 58.2713 52.483C59.4317 52.8251 60.2849 52.6093 60.6732 52.9809L61.3201 53.0337L61.9587 45.2773L61.959 45.2758Z"
                fill="#FF9BCB"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_410">
                <rect
                  width="94"
                  height="44"
                  fill="white"
                  transform="translate(-25.2007) rotate(9.37161)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg className="svg-mob"
            width="57"
            height="45"
            viewBox="0 0 57 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_39_415)">
              <path
                d="M14.7979 43.4676L39.2776 5.97314L56.5448 44.3598L14.7979 43.4676Z"
                fill="#FF9BCB"
              />
              <path
                d="M0.544922 24.1552L16.0794 0.359741L27.0379 24.7203L0.544922 24.1552Z"
                fill="#FF9BCB"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_415">
                <rect
                  width="56"
                  height="44"
                  fill="white"
                  transform="translate(0.544922 0.359741)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg className="svg-mob"
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_39_419)">
              <path
                d="M54.5449 21.0649C34.1795 21.3792 29.9756 18.7642 21.2501 0.359741C21.5644 20.7252 18.9494 24.929 0.544922 33.6546C20.9103 33.3403 25.1142 35.9553 33.8398 54.3597C33.5255 33.9943 36.1405 29.7904 54.5449 21.0649Z"
                fill="#FF9BCB"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_419">
                <rect
                  width="54"
                  height="54"
                  fill="white"
                  transform="matrix(1 0 0 -1 0.544922 54.3597)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg className="svg-mob"
            width="53"
            height="55"
            viewBox="0 0 53 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_39_422)">
              <path
                d="M36.4846 29.6754L45.6459 37.4482C48.2381 39.6481 48.4875 43.6251 46.1922 46.1456C43.8871 48.6778 39.9693 48.6912 37.6461 46.1758L29.4987 37.3559L27.5021 49.3876C26.9393 52.7773 23.7007 54.9806 20.4276 54.2003C17.1546 53.42 15.2006 49.98 16.1603 46.6859L19.5663 34.9898L8.4477 39.2202C5.27635 40.4268 1.76867 38.643 0.794132 35.3305C-0.177125 32.0314 1.76539 28.5763 5.04174 27.7759L16.6181 24.9433L7.44199 17.1588C4.85963 14.9689 4.61846 11.0053 6.91535 8.50501C9.20896 6.00805 13.0858 6.00134 15.386 8.49158L23.5793 17.3618L25.576 5.33012C26.1387 1.94043 29.3773 -0.262861 32.6504 0.517437C35.9235 1.29774 37.8775 4.73776 36.9177 8.03179L33.5117 19.7279L44.6943 15.474C47.8345 14.2792 51.3094 16.0361 52.2872 19.3134C53.2666 22.594 51.3389 26.0407 48.0757 26.8395L36.4813 29.6754H36.4846Z"
                fill="#FF9BCB"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_422">
                <rect
                  width="52"
                  height="54"
                  fill="white"
                  transform="translate(0.544922 0.359741)"
                />
              </clipPath>
            </defs>
          </svg>
        
    </div>
    <a className="horizantal_text_2_pff">{text}</a>
    </div>
</Marquee>
</div>

);
export default Label1;
