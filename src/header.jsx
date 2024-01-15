import React, { useState, useEffect } from 'react';
import './styles/header.css'; // CSSファイル名を変更

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`container ${isMobile ? 'mobile' : 'desktop'}`}>
      <div className="header">
        <div className="logo">
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
            yuumal.dev
          </a>
        </div>
        {isMobile ? (
          <div
            className={`mobile-menu hamburger-menu ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        ) : (
          <nav className={`pc-menu ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a href="/about" style={{ color: 'white' }}>
                  About
                </a>
              </li>
              <li>
                <a href="/Blog" style={{ color: 'white' }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" style={{ color: 'white' }}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {isMobile && (
        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <a href="/" className="menu-link" style={{ color: 'white' }}>
            Home
          </a>
          <a href="/about" className="menu-link" style={{ color: 'white' }}>
            About
          </a>
          <a href="/Blog" className="menu-link" style={{ color: 'white' }}>
            Blog
          </a>
          <a href="/contact" className="menu-link" style={{ color: 'white' }}>
            Contact
          </a>
        </nav>
      )}
    </div>
  );
};

export default Header;