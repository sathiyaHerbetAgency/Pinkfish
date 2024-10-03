'use client'
import '../styles/globals.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const RootLayout = ({ children }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.GOOGLE_ANALYTICS });
}, []);
  return(
  <html lang="en">
    <head>
    <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
{/* 
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-HSJLQGS3FG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HSJLQGS3FG');
</script> */}

<script src="https://smtpjs.com/v3/smtp.js">
</script> 

      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
{/* <link rel="stylesheet" href="photoswipe/dist/photoswipe.css"/> */}
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    </head>
    <body className="bg-black max-w-[100vw] m-0 p-0 mr-[-16px]">
      <div className="min-h-screen max-w-[100vw] bg-black "> 
       {children}
      </div>
    </body>
  </html>
);
}
export default RootLayout;
