import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <header className="header">
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navigation menu */}
      <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={() => scrollToSection("hero")}>Home</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("blogs")}>Blogs</li>
        <li onClick={() => scrollToSection("certifications")}>Certifications</li>
        <li onClick={() => scrollToSection("contact")}>Contact Us</li>
      </ul>
    </header>
  );
};

export default Header;
