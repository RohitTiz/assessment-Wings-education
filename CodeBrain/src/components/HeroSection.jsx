import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.container}>
      {/* Left Content */}
      <div style={styles.leftContent}>
        <h1 style={styles.line}>
          Jiya i <span style={styles.ideal}>want</span>
        </h1>
        <h1 style={styles.line}>to, love</h1>
        <h1 style={styles.skillsLine}>you</h1>

        <p style={styles.description}>
          Welcome to EduAll, where learning begins for every professional and lifelong learner.
        </p>

        <div style={styles.buttonGroup}>
          <button style={styles.primary}>Browse Courses ↗</button>
          <button style={styles.secondary}>About Us ↗</button>
        </div>
      </div>

      {/* Image + Decorative Elements */}
      <div style={styles.imageWrapper}>
        <img src="/image/main.png" alt="Hero" style={styles.heroImage} />

        {/* Now nested under imageWrapper */}
        <img src="/heroimage/triangle.png" alt="Triangle" style={styles.triangleImage} />
        <img src="/heroimage/Button.png" alt="Decorative Button" style={styles.decorativeButton} />
        <img src="/heroimage/enrolledstudents.png" alt="Enrolled Students" style={styles.enrolledStudents} />
        <img src="/heroimage/curlyarrow.png" alt="Curly Arrow" style={styles.curlyArrow} />
        <img src="/heroimage/off.png" alt="20% Off" style={styles.discountBadge} />
        <img src="/heroimage/books.png" alt="Books" style={styles.booksIcon} />
        <img src="/heroimage/gird.png" alt="Grid" style={styles.gridIcon} />
      </div>
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '10px 40px 80px 40px',
    boxSizing: 'border-box',
    overflow: 'hidden',
  },

  leftContent: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
    padding: '40px 0',
  },

  line: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '48px',
    lineHeight: '1.2',
    color: '#3C475E',
    margin: 0,
  },

  skillsLine: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '48px',
    lineHeight: '1.2',
    color: '#2D82D2',
    marginBottom: '24px',
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
    flexWrap: 'wrap',
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
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    position: 'relative', // crucial for absolute children to follow this
  },

  heroImage: {
    maxWidth: '100%',
    height: 'auto',
    zIndex: 1,
  },

  triangleImage: {
    position: 'absolute',
    width: '64.1px',
    height: '46.6px',
    right: '10%',
    top: '10%',
    zIndex: 3,
  },

  decorativeButton: {
    position: 'absolute',
    width: '127px',
    height: '47px',
    right: '3%',
    top: '40%',
    zIndex: 5,
  },

  enrolledStudents: {
    position: 'absolute',
    width: '182.17px',
    height: '91.48px',
    left: '40%',
    top: '-10%',
    zIndex: 4,
  },

  curlyArrow: {
    position: 'absolute',
    width: '106.27px',
    height: '93.2px',
    left: '5%',
    top: '15%',
    zIndex: 4,
  },

  discountBadge: {
    position: 'absolute',
    width: '200px',
    height: '100px',
    left: '50%',
    top: '50%',
    zIndex: 6,
  },

  booksIcon: {
    position: 'absolute',
    width: '57.35px',
    height: '53.5px',
    left: '80%',
    bottom: '5%',
    zIndex: 4,
  },

  gridIcon: {
    position: 'absolute',
    width: '68px',
    height: '67px',
    left: '0%',
    bottom: '0%',
    zIndex: 8,
  },
};

export default HeroSection;
