import { useState } from 'react';

const Navbar = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
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
        <button 
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
