import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>HOME</li>
        </Link>
        <Link style={navStyle} to="/ourteam">
          <li>OUR TEAM</li>
        </Link>
        <Link style={navStyle} to="/training">
          <li>TRAINING</li>
        </Link>
        <Link style={navStyle} to="articles">
          <li>ARTICLES</li>
        </Link>
        <Link style={navStyle} to="portfolio">
          <li>PORTFOLIO</li>
        </Link>
        <Link style={navStyle} to="joinus">
          <li>JOIN US</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
