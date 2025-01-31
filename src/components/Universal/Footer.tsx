import React from "react";
import { FaHeart } from "react-icons/fa";
import EndavaSymbol from "../../assets/logos/Endava_Symbol.svg";

const Footer: React.FC = () => {
  return (
    <footer className="endava-bg text-light text-center py-1">
      <div className="container">
        <p className="mb-0">
          Made with <FaHeart className="endava-color" /> for{" "}
          <img src={EndavaSymbol} className="endava-symbol" alt="Endava" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
