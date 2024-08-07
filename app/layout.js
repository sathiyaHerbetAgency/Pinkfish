'use client'
import { Footer, NewNavbar } from '../components';
import '../styles/globals.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
const RootLayout = ({ children }) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.GOOGLE_ANALYTICS });
}, []);
  return(
  <html lang="en">
    <head>
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
<link rel="stylesheet" href="photoswipe/dist/photoswipe.css"/>
    </head>
    <body>


      <div className="min-h-screen bg-black ">
      {/* <NewNavbar /> */}
    
    
     
       {children}
        {/* <Footer /> */}
      </div>
    </body>
  </html>
);
}
export default RootLayout;
