import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Navbar/Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleMenu } from "../../features/active/activeSlice";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';







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
            <a href="#home" className="item"> <HomeIcon fontSize="small" /> Home</a>
            <a href="#about" className="item"> <InfoIcon fontSize="small" /> About</a>
            <a href="#skills" className="item"><BuildIcon fontSize="small" />Skills</a>
            <a href="#projects" className="item"><WorkIcon fontSize="small" /> Projects</a>
            <a href="#contact" className="item"><PhoneIcon fontSize="small" />Contact Me</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
