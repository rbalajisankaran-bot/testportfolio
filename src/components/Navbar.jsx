import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <a href="#" className="logo" aria-label="Balaji Sankaran - Home">
          Balaji<span className="logo-dot">.</span>
        </a>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#experience" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#education" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Education</a></li>
          <li><a href="#skills" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
