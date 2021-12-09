import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="headContainer">
        <div className="left">
          <h1>YourLOGO</h1>
        </div>
        <div className="right">
          <nav>
            <ul className="navbar">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Article</Link>
              </li>
              <li>
                <Link to="/gallery">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <img className="githubLogo" src="img/github.svg" alt="github-logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
