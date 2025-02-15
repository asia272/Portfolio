import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Navbar/Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleMenu } from "../../features/active/activeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <header>
      <div className="navbar">
        
        {/* Hamburger menu toggle button */}
        <button className="menu-toggle" onClick={handleToggleMenu} aria-label="Toggle Menu">
          {!menuOpen && <MenuIcon fontSize="large" />}
        </button>

        <div className="logo">
          <h1>Asia</h1>
        </div>

        <div className={`listItems ${menuOpen ? "active" : ""}`}>
          <button className="menu-toggle clone-btn" onClick={handleToggleMenu}>
            <CloseIcon fontSize="large" />
          </button>
          <div className="nav-links">
            <a href="#home" className="item">Home</a>
            <a href="#about" className="item">About</a>
            <a href="#skills" className="item">Skills</a>
            <a href="#projects" className="item">Projects</a>
            <a href="#contact" className="item">Contact Me</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
