import React from "react";
import { FaHeart } from "react-icons/fa";
import EndavaSymbol from "../assets/logos/Endava_Symbol.svg";

const Footer: React.FC = () => {
  return (
    <footer className="endava-bg text-light text-center py-3">
      <div className="container">
        <p className="mb-0">
          Made with <FaHeart className="endava-color" /> for{" "}
          <img src={EndavaSymbol} className="endava-symbol" alt="Endava" />
        </p>

        <p className="mb-0">
          All rights reserved &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
