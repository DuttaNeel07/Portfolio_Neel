import { Link } from "react-router-dom";


<Link to="/contact">Contact</Link>
function Navbar() {
    return (
      <div style={navStyles.nav}>
        <h3>My Portfolio</h3>
        <div>
          <a href="/">Projects</a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
  
  const navStyles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#222",
      color: "white",
    },
  };
  
  export default Navbar;