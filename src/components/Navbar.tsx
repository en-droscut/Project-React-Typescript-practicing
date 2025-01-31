import React from "react";
import { Link } from "react-router-dom";
import endavaBigLogo from "../assets/logos/endava_logo_neg_RGB.svg";
// import menuIcon from "../assets/icons/menu.svg";

const NavigationBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark endava-bg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={endavaBigLogo} width={200} alt="Endava" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-expanded="false"
        >
          <div className="endava-toggler-icon menu-icon"></div>
          <div className="endava-toggler-icon close-icon"></div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
