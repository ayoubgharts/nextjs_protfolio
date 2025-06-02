"use client"; // Ensure this is a client-side component

import { useState } from "react";
import "./MobileMenuToggle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import MobileMenu from "../mobile-menu/MobileMenu";

export default function MobileMenuToggle() {
  // State to manage whether the mobile menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="menu-toggle-btn">
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>
      <nav className={`mobileMenu ${isMenuOpen ? "open" : ""}`}>
        <MobileMenu />
      </nav>
    </>
  );
}
