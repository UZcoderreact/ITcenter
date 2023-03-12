import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Dilshodbek</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
               UY
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
               Kuraslar
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Tajriba
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Ma`lumotlar
              </Link>
            </li>
          </ul>
        </div>
        
        <button className="button n-button">Aloqa</button>
        
      </div>
    </div>
  );
};

export default navbar;
