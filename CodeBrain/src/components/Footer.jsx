import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#0D1117',
    color: '#ffffff',
    padding: '60px 30px 20px', // removed bottom padding
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    // width: '100%',
  };

  const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '40px',
    marginBottom: '40px',
  };

  const columnTitleStyle = {
    fontWeight: 'bold',
    marginBottom: '12px',
    fontSize: '15px',
  };

  const linkStyle = {
    marginBottom: '8px',
    color: '#ccc',
    textDecoration: 'none',
    display: 'block',
    fontSize: '13px',
  };

  const bottomRowStyle = {
    borderTop: '1px solid #333',
    paddingTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '13px',
    color: '#888',
  };

  const leftBottomStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    alignItems: 'center',
  };

  const rightBottomStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  };

  const storeIconStyle = {
    height: '32px',
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        {/* Categories */}
        <div>
          <div style={columnTitleStyle}>Categories</div>
          <a href="#" style={linkStyle}>User Interface</a>
          <a href="#" style={linkStyle}>User Experience</a>
          <a href="#" style={linkStyle}>Digital Media</a>
          <a href="#" style={linkStyle}>Lifestyle</a>
        </div>

        {/* Product */}
        <div>
          <div style={columnTitleStyle}>Product</div>
          <a href="#" style={linkStyle}>Pricing</a>
          <a href="#" style={linkStyle}>Overview</a>
          <a href="#" style={linkStyle}>Browse</a>
          <a href="#" style={linkStyle}>
            Accessibility <span style={{ fontSize: '10px', background: '#e0d9ff', color: '#5b3cc4', padding: '2px 6px', borderRadius: '4px', marginLeft: '4px' }}>BETA</span>
          </a>
        </div>

        {/* Solutions */}
        <div>
          <div style={columnTitleStyle}>Solutions</div>
          <a href="#" style={linkStyle}>Brainstorming</a>
          <a href="#" style={linkStyle}>Ideation</a>
          <a href="#" style={linkStyle}>Wireframing</a>
          <a href="#" style={linkStyle}>Research</a>
        </div>

        {/* Resources */}
        <div>
          <div style={columnTitleStyle}>Resources</div>
          <a href="#" style={linkStyle}>Help Center</a>
          <a href="#" style={linkStyle}>Blog</a>
          <a href="#" style={linkStyle}>Tutorials</a>
          <a href="#" style={linkStyle}>FAQs</a>
        </div>

        {/* Support */}
        <div>
          <div style={columnTitleStyle}>Support</div>
          <a href="#" style={linkStyle}>Contact Us</a>
          <a href="#" style={linkStyle}>Developers</a>
          <a href="#" style={linkStyle}>Documentation</a>
          <a href="#" style={linkStyle}>Integrations</a>
        </div>

        {/* Company */}
        <div>
          <div style={columnTitleStyle}>Company</div>
          <a href="#" style={linkStyle}>About</a>
          <a href="#" style={linkStyle}>Press</a>
          <a href="#" style={linkStyle}>Events</a>
          <a href="#" style={linkStyle}>Request Demo →</a>
        </div>
      </div>

      {/* Bottom Row */}
      <div style={bottomRowStyle}>
        <div style={leftBottomStyle}>
          <div>@ 2023 Company</div>
          <a href="#" style={linkStyle}>Terms of Service</a>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Manage Cookies</a>
        </div>

        <div style={rightBottomStyle}>
          <img src="footer/youtube.png" alt="YouTube" height="18" />
          <img src="footer/facebook.png" alt="Facebook" height="18" />
          <img src="footer/twitter.png" alt="Twitter" height="18" />
          <img src="footer/instagram.png" alt="Instagram" height="18" />
          <img src="footer/linkedin.png" alt="LinkedIn" height="18" />
          <img src="footer/appstore.png" alt="App Store" style={storeIconStyle} />
          <img src="footer/googleplay.png" alt="Google Play" style={storeIconStyle} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
