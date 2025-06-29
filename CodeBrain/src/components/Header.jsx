import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    borderBottom: '1px solid #e0e0e0',
    fontFamily: 'Roboto, sans-serif',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    boxSizing: 'border-box',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: '24px', // Increased from 20px
    color: '#1b3a57',
  };

  const navStyle = {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
    fontSize: '16px',
    color: '#1b3a57',
    fontWeight: 600,
  };

  const navItemStyle = {
    textDecoration: 'none',
    color: '#1b3a57',
  };

  const rightSideStyle = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  };

  const searchStyle = {
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    width: '180px',
    fontFamily: 'Roboto, sans-serif',
  };

  const buttonStyle = {
    backgroundColor: '#4a6cf7',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 600,
    fontFamily: 'Roboto, sans-serif',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <div style={logoStyle}>
          <img
            src="image/mainlogo.png"
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }} // Increased logo height
          />
          
        </div>

        {/* Navigation */}
        <nav style={navStyle}>
          <a href="#" style={navItemStyle}>Home</a>
          <a href="#" style={navItemStyle}>Courses</a>
          <a href="#" style={navItemStyle}>Specializations</a>
          <a href="#" style={navItemStyle}>Book a Demo</a>
          <a href="#" style={navItemStyle}>About Us</a>
        </nav>

        {/* Search and Button */}
        <div style={rightSideStyle}>
          <input type="text" placeholder="Search" style={searchStyle} />
          <button style={buttonStyle}>Register/Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
