import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Effect to add/remove `overflow: hidden` on the body
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
    return () => {
      document.body.style.overflow = ""; // Cleanup in case of unmount
    };
  }, [menuOpen]);

  return (
    <header>
      <div className="navbar">
      {menuOpen ? <div className="over-lay"></div> : ""}
      
      {/* Hamburger menu toggle button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "" : <MenuIcon fontSize="large" />}
      </button>
      
      <div className="logo">
        <h1>Asia</h1>
      </div>
      
      <div className={`listItems ${menuOpen ? "active" : ""}`}>
        <button className="menu-toggle clone-btn" onClick={toggleMenu}>
          <CloseIcon fontSize="large" />
        </button>
        <div className="nav-links">
          <a href="#home" className="item">Home</a>
          <a href="#about" className="item">About</a>
          <a href="#skills" className="item">Skills</a>
          <a href="#projects" className="item">Portfolio</a>
          <a href="#contact" className="item">Contact Me</a>
        </div>
      </div>
    </div>
  </header>
    
  );
};

export default Navbar;
