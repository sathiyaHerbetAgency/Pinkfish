/* eslint-disable */

export const containerStyle = {
  position: "relative",
  minHeight: "80vh",
  background: "linear-gradient(180deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)",
  padding: "80px 16px",
}

  export const maxWidthStyle = {
    maxWidth: "1280px",
  margin: "0 auto",
}

export const headerStyle = {
  textAlign: "center",
  marginBottom: "30px",
}

export const titleStyle =(isMobile)=>( {
  fontSize: isMobile?"24px":"35px",
  fontFamily: "InterBlack",
  color: "white",
  marginBottom: "30px",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
})

export const sliderContainerStyle = {
  position: "relative",
  maxWidth: "1200px",
  margin: "0 auto",
  paddingBottom: "80px", // Space for dots
}

export const disclaimerStyle =(isMobile)=>( {
  textAlign: "center",
  color: "#fff",
  fontSize: "10px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  maxWidth: isMobile?"75%":"600px",
  margin: "0px auto 0",
  fontFamily:'InterRegular',
});

export const slickCustomStyles = `
  .slick-dots {
    bottom: -30px !important;
    display: flex !important;
    justify-content: center !important;
    gap: 12px !important;
    list-style: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  
  .slick-dots li {
    width: 12px !important;
    height: 12px !important;
    margin: 0 !important;
  }
  
  .slick-dots li button {
    display: none !important;
  }
  
  .custom-dot {
    width: 12px !important;
    height: 12px !important;
    border-radius: 50% !important;
    background: rgba(236, 72, 153, 0.3) !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
  }
  
  .slick-dots li.slick-active .custom-dot {
    background: #ec4899 !important;
    transform: scale(1.25) !important;
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.5) !important;
  }
  
  .slick-dots li:hover .custom-dot {
    background: rgba(236, 72, 153, 0.6) !important;
    transform: scale(1.1) !important;
  }
  
  .slick-track {
    display: flex !important;
    align-items: flex-start !important;
  }
  
  .slick-slide {
    height: auto !important;
  }
  
  .slick-slide > div {
    height: 100% !important;
  }
`
