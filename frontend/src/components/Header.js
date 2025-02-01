import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Hamburger menu (Visible in Mobile & Minimized Screens) */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Desktop Navigation (Visible only in large screens) */}
      <ul className="navbar">
        <li onClick={() => scrollToSection("hero")}><b>Home</b></li>
        <li onClick={() => scrollToSection("projects")}><b>Projects</b></li>
        <li onClick={() => scrollToSection("blogs")}><b>Blogs</b></li>
        <li onClick={() => scrollToSection("certifications")}><b>Certifications</b></li>
        <li onClick={() => scrollToSection("contact")}><b>Contact Me</b></li>
      </ul>

      {/* Mobile Navigation (Appears when hamburger is clicked) */}
      <ul className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("blogs")}>Blogs</li>
        <li onClick={() => scrollToSection("certifications")}>Certifications</li>
        <li onClick={() => scrollToSection("contact")}>Contact Me</li>
      </ul>
    </header>
  );
};

export default Header;
