function Footer() {
    return (
      <div style={footerStyles.footer}>
        <p>© 2026 Neel Dutta</p>
        <p>Email: nee.dutta0729@gmail.com</p>
      </div>
    );
  }
  
  const footerStyles = {
    footer: {
      textAlign: "center" as const,
      padding: "15px",
      background: "#222",
      color: "white",
      marginTop: "20px",
    },
  };
  
  export default Footer;