import React from "react";
import { FaHeart } from "react-icons/fa";
import EndavaLogo from "../assets/EndavaLogo";

const Footer: React.FC = () => {
  return (
    <footer className="endava-bg text-light text-center py-3">
      <div className="container">
        <p className="mb-0">
          Made with <FaHeart color="red" /> for <EndavaLogo /> by{" "}
          <a href="mailto:dragos.roscut@endava.com">Dragoș</a>.
        </p>

        <p className="mb-0">
          All rights reserved &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
