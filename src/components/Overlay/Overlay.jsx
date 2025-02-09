import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../features/active/activeSlice"; // Import the action to toggle the menu
import "./Overlay.css";

const Overlay = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen); // Get menuOpen from Redux

  // Handle screen resize to close menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 765 && menuOpen) {
        dispatch(toggleMenu()); // Close the menu if screen is wider than 765px
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen, dispatch]);

  // Body overflow control based on menuOpen state
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when menu is closed
    }
  }, [menuOpen]); // Run whenever menuOpen changes

  return (
    <div>
      {menuOpen && <div className="over-lay"></div>} {/* Show overlay only if menu is open */}
    </div>
  );
};

export default Overlay;
