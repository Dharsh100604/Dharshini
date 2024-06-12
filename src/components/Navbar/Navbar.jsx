import { useState } from "react";
import './Navbar.css';
import logo from '../../images/dharshini-logo.png';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
      setClicked(!clicked);
    }

    return(
        <nav className="navBar">
          <div className="nav-list-wrapper">
            <ul className={clicked ? "nav-list active" : "nav-list"}>
              <img src={logo} alt="logo" className="logo-pic"/>
              <li className="nav-links"><a onClick={handleClick} href="#home">Home</a></li>
              <li className="nav-links"><a onClick={handleClick} href="#about">About</a></li>
              <li className="nav-links"><a onClick={handleClick} href="#skills">Skills</a></li>
              <li className="nav-links"><a onClick={handleClick} href="#projects">Projects</a></li>
              <li className="nav-links"><a onClick={handleClick} href="#contact">Contact</a></li>
            </ul>
          </div>

          <div id="mobile" onClick={handleClick}>
            <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
      </nav>
    )
}
export default Navbar;