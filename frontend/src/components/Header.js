import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };
  
  return (
    <header className="header">
      {/* Navigation menu */}
      <ul className="navbar">
      <li onClick={() => scrollToSection("hero")}>Home</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("blogs")}>Blogs</li>

          <li onClick={() => scrollToSection("certifications")}>Certifications</li>
          <li onClick={() => scrollToSection("contact")}>Contact Us</li>
          <li>
        </li>
      </ul>

    </header>
  );
};

export default Header;
