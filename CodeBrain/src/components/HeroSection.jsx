import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.container}>
      <div style={styles.leftContent}>
        <h1 style={styles.line}>
          Find Your <span style={styles.ideal}>Ideal</span>
        </h1>
        <h1 style={styles.line}>Course, Build</h1>
        <h1 style={styles.skillsLine}>Skills</h1>

        <p style={styles.description}>
          Welcome to EduAll, where learning begins for every professional and
          lifelong learner.
        </p>

        <div style={styles.buttonGroup}>
          <button style={styles.primary}>Browse Courses ↗</button>
          <button style={styles.secondary}>About Us ↗</button>
        </div>
      </div>

      {/* Main Hero Image */}
      <div style={styles.imageWrapper}>
        <img src="/image/main.png" alt="Hero" style={styles.heroImage} />
      </div>

      {/* Triangle Icon */}
      <img
        src="/heroimage/triangle.png"
        alt="Triangle"
        style={styles.triangleImage}
      />

      {/* Decorative Button Image */}
      <img
        src="public/heroimage/button.png"
        alt="Decorative Button"
        style={styles.decorativeButton}
      />

      {/* Enrolled Students Image */}
      <img
        src="/heroimage/enrolledstudents.png"
        alt="Enrolled Students"
        style={styles.enrolledStudents}
      />

      {/* Curly Arrow Image */}
      <img
        src="/heroimage/curlyarrow.png"
        alt="Curly Arrow"
        style={styles.curlyArrow}
      />

      {/* 20% Off Badge */}
      <img
        src="/heroimage/off.png"
        alt="20% Off"
        style={styles.discountBadge}
      />

      {/* Decorative Books Icon */}
      <img src="/heroimage/books.png" alt="Books" style={styles.booksIcon} />

      {/* Decorative Grid Icon */}
      <img src="/heroimage/gird.png" alt="Grid" style={styles.gridIcon} />
    </section>
  );
};

const styles = {
  container: {
  position: 'relative',
  width: '100%',
  minHeight: '700px',
  backgroundColor: '#FFFFFF',
  borderBottom: '1.5px solid #EEF0F3',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '10px 80px 80px 80px', // ← Updated padding here
  boxSizing: 'border-box',
  overflow: 'visible',
},


  leftContent: {
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    zIndex: 2,
    marginTop: '0',
    padding : '40px 0px 0px 0px '
  },

  line: {
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '64px',
    lineHeight: '77px',
    color: '#3C475E',
    margin: 0,
  },

  skillsLine: {
    fontFamily: 'Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '64px',
    lineHeight: '77px',
    color: '#2D82D2',
    margin: '0 0 24px 0',
  },

  ideal: {
    color: 'red',
  },

  description: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    color: '#666',
    lineHeight: '24px',
    marginBottom: '30px',
    maxWidth: '480px',
  },

  buttonGroup: {
    display: 'flex',
    gap: '15px',
  },

  primary: {
    backgroundColor: '#0072ff',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '14px',
    cursor: 'pointer',
  },

  secondary: {
    backgroundColor: '#fff',
    color: '#0072ff',
    border: '1px solid #0072ff',
    padding: '12px 20px',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '14px',
    cursor: 'pointer',
  },

  imageWrapper: {
    position: 'absolute',
    right: '257.38px',
    top: '-15px', // Image touches the top of the hero section
    zIndex:'-30px' ,
  },

  heroImage: {
    width: '484.11px',
    height: '526.41px',
    objectFit: 'contain',
  },

  triangleImage: {
    position: 'absolute',
    width: '64.1px',
    height: '46.6px',
    right: '146.05px',
    bottom: '450px',
    zIndex: 3,
  },

  decorativeButton: {
    position: 'absolute',
    width: '127px',
    height: '47px',
    left: '1190px',
    top: '250px',
    zIndex: 5,
    },
    

  enrolledStudents: {
  position: 'absolute',
  width: '182.17px',
  height: '91.48px',
  right: '660.52px',
  bottom: ' 600.92px',
  zIndex: 4,
  },

  curlyArrow: {
  position: 'absolute',
  width: '106.27px',
  height: '93.2px',
  right: '761.73px',
  bottom: '450.78px',
  zIndex: 4,
  },

  discountBadge: {
  position: 'absolute',
  width: '200px',
  height: '100px',
  left: '642px',
  bottom: '295px',
  zIndex: 6,
},

booksIcon: {
  position: 'absolute',
  width: '57.35px',
  height: '53.5px',
  right: '775.23px',
  bottom: '90.53px',
  zIndex: 4,
},

gridIcon: {
  position: 'absolute',
  width: '68px',
  height: '67px',
  left: '42px',
  top: '540px',
  zIndex: 8,
},







  
};

export default HeroSection;
