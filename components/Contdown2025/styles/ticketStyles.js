/* eslint-disable */

export const getButtonStyle = (status) => ({
  background:
    status === "available"
      ? "linear-gradient(135deg, #ec4899, #be185d)"
      : "linear-gradient(135deg, #6b7280, #4b5563)",
  border: "none",
  borderRadius: "25px",
  padding: "12px 12px",
  color: "white",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: status === "available" ? "pointer" : "not-allowed",
  opacity: status === "available" ? 1 : 0.6,
  transition: "all 0.3s ease",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "12px",
});

export const cardStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "0 16px",
  outline: "none",
};

export const contentStyle = {
  maxWidth: "300px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignSelf: "center",
  alignItems: "center",
};

export const ticketBgStyle = {
  position: "relative",
  marginBottom: "24px",
  alignSelf: "center",
  alignItems: "center",
};

export const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
  textAlign: "center",
};

export const titleStyle = (isMobile) => ({
  color: "#ec4899",
  fontSize: isMobile ? "16px" : "20px",
  fontFamily: "Manrope-Black",
  marginBottom: "8px",
  textTransform: "uppercase",
});

export const subtitleStyle = {
  color: "#fff",
  fontSize: "12px",
  lineHeight: "12px",
  letterSpacing: "1px",
  fontFamily: "Manrope-Black",
  textTransform: "uppercase",
};

export const priceStyle = (isMobile) => ({
  color: "white",
  fontSize: isMobile ? "30px" : "35px",
  lineHeight: isMobile ? "36px" : "42px",
  fontFamily: "Manrope-Black",
  marginBottom: "8px",
});

export const soonStyle = (isMobile) => ({
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: isMobile ? "30px" : "35px",
  lineHeight: isMobile ? "36px" : "42px",
  fontFamily: "Manrope-Black",
});

export const comingSoonStyle = (isMobile) => ({
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: isMobile ? "14px" : "18px",
  lineHeight: isMobile ? "18px" : "24px",
  fontFamily: "Manrope-Black",
});

export const belowContentStyle = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
  width: "70%",
};

export const featuresStyle = {
  color: "white",
  fontSize: "12px",
  lineHeight: "1.6",
  textAlign: "left",
};

export const descriptionStyle = {
  color: "#FFD900",
  fontSize: "14px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  textAlign: "left",
  fontFamily: "Manrope-Bold",
};
