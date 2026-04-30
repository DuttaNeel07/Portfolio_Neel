import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <h3>My Portfolio</h3>

      <div>
        <Link to="/" style={styles.link}>Projects</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#222",
    color: "white",
  },
  link: {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
  },
};

export default Navbar;