import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">AquaFlow</h2>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("hero")}>Home</li>
          <li onClick={() => scrollToSection("features")}>Why AquaFlow</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
