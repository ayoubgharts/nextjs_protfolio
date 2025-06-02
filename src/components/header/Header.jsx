"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Import header CSS
import "./Header.css";
import "./Header-Media.css";

// Import icon button
import ModeButton from "../mode-button/ModeButton";
// Menu icon button
import MobileMenuToggle from "../mobile-menu-toggle/MobileMenuToggle";
// Import WebMenu
import WebMenu from "../web-menu/WebMenu";
// Import images
import DarkLogo from "../../../public/logo/logo-light.png";
import LightLogo from "../../../public/logo/logo-dark.png";
//
import BacktoTop from "../buttons/back-to-top/BacktoTop";

export default function Header() {
  // State to manage the logo based on the mode
  const [logo, setLogo] = useState(DarkLogo);

  // Function to handle mode change
  const handleModeChange = (isDarkMode) => {
    setLogo(isDarkMode ? DarkLogo : LightLogo);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="ayoubgharts logo" width={180} height={22} />
          </Link>
        </div>
        <nav className="webMenu">
          <WebMenu />
        </nav>
        <div className="controls">
          <ModeButton onModeChange={handleModeChange} />
          <MobileMenuToggle />
        </div>
      </div>
        <BacktoTop />
    </header>
  );
}
