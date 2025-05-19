import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import LanguageSelect from "./LangugeSelect";

import logo from "../images/onycom-logo.svg";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const ticking = useRef(false);

  const handleScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setIsSticky(scrollY > 0);
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <h1 className="logo">
          <Link to="/">
            <img src={logo} alt="onycom logo" />
          </Link>
        </h1>
        <div className="nav-area">
          <Navbar />
          <LanguageSelect />
          <button type="button" className="contact">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
