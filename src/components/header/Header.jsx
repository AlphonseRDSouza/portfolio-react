import React from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "../../assets/alp/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alphonse R. D'souza</h1>
        <h5 className="text-light">
          Lead Frontend and mobile application developer
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
