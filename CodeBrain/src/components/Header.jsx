import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    header: {
      backgroundColor: '#fff',
      borderBottom: '1px solid #e0e0e0',
      fontFamily: 'Roboto, sans-serif',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      flexWrap: 'wrap',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 600,
      fontSize: '24px',
      color: '#1b3a57',
    },
    logoImg: {
      height: '40px',
      marginRight: '10px',
    },
    nav: {
      display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '20px',
      alignItems: isMobile ? 'flex-start' : 'center',
      fontSize: '16px',
      fontWeight: 600,
      marginTop: isMobile ? '10px' : 0,
      width: isMobile ? '100%' : 'auto',
    },
    navItem: {
      textDecoration: 'none',
      color: '#1b3a57',
    },
    rightSide: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center',
      marginTop: isMobile ? '10px' : 0,
    },
    search: {
      padding: '8px 12px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      outline: 'none',
      minWidth: '140px',
    },
    button: {
      backgroundColor: '#4a6cf7',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      padding: '8px 16px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 600,
    },
    hamburger: {
      display: isMobile ? 'block' : 'none',
      fontSize: '24px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#1b3a57',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logo}>
          <img
            src="image/mainlogo.png"
            alt="Logo"
            style={styles.logoImg}
          />
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.hamburger}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav style={styles.nav}>
          <a href="#" style={styles.navItem}>Home</a>
          <a href="#" style={styles.navItem}>Courses</a>
          <a href="#" style={styles.navItem}>Specializations</a>
          <a href="#" style={styles.navItem}>Book a Demo</a>
          <a href="#" style={styles.navItem}>About Us</a>
        </nav>

        {/* Search and Button */}
        {!isMobile && (
          <div style={styles.rightSide}>
            <input type="text" placeholder="Search" style={styles.search} />
            <button style={styles.button}>Register/Login</button>
          </div>
        )}
      </div>

      {/* Show search/login under nav on mobile */}
      {isMobile && menuOpen && (
        <div style={{ ...styles.rightSide, padding: '0 24px 12px' }}>
          <input type="text" placeholder="Search" style={styles.search} />
          <button style={styles.button}>Register/Login</button>
        </div>
      )}
    </header>
  );
};

export default Header;
