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


<script src="https://smtpjs.com/v3/smtp.js">
</script> 
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
     
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
