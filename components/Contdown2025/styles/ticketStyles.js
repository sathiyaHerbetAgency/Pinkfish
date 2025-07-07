/* eslint-disable */
export const getButtonStyle = (status) => ({
  background:
    status === "available" ? "linear-gradient(135deg, #ec4899, #be185d)" : "linear-gradient(135deg, #6b7280, #4b5563)",
  border: "none",
  borderRadius: "25px",
  padding: "12px 32px",
  color: "white",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: status === "available" ? "pointer" : "not-allowed",
  opacity: status === "available" ? 1 : 0.6,
  transition: "all 0.3s ease",
  textTransform: "uppercase",
  letterSpacing: "1px",
  marginBottom: "12px",
})

export const cardStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "0 16px",
  outline: "none",
}

export const contentStyle = {
  maxWidth: "300px",
  width: "100%",
   display: "flex",
  flexDirection: "column",
  justifyContent:"center",
    alignSelf:"center",
  alignItems:"center"


}

export const ticketBgStyle = {
  position: "relative",
  marginBottom: "24px",
  alignSelf:"center",
  alignItems:"center"
  
}

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
}

export const titleStyle = {
  color: "#ec4899",
  fontSize: "16px",
  fontWeight: "bold",
  marginBottom: "4px",
  letterSpacing: "2px",
  textTransform: "uppercase",
}

export const subtitleStyle = {
  color: "#ec4899",
  fontSize: "12px",
  marginBottom: "12px",
  letterSpacing: "1px",
  textTransform: "uppercase",
}

export const priceStyle = {
  color: "white",
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "8px",
}

export const comingSoonStyle = {
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "24px",
  fontWeight: "bold",
  lineHeight: "1.2",
}

export const belowContentStyle = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent:"center",
  gap: "16px",
  width:'70%',
}

export const featuresStyle = {
  color: "white",
  fontSize: "12px",
  lineHeight: "1.6",
  textAlign:'left'
}

export const descriptionStyle = {
  color: "#FFD900",
  fontSize: "14px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  textAlign: "left",
  fontFamily:'InterBold'
}
