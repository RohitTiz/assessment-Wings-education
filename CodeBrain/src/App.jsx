import React from 'react';

// Component Imports
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeatureSection from './components/FeatureSection.jsx';
import CourseCard from './components/CourseCard.jsx';
import FacultySection from './components/FacultySection.jsx';
import TestimonialSection from './components/TestimonialSection.jsx';
import MetricsSection from './components/MetricsSection.jsx';
import PartnerLogos from './components/PartnerLogos.jsx';
import SignupCTA from './components/SignupCTA.jsx';
import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';

// Data
import courses from './data/courses.json';

// CSS import for responsiveness
import './App.css';

const App = () => {
  const sectionStyle = {
    padding: '40px 20px',
    backgroundColor: '#fff',
    textAlign: 'center',
  };

  const buttonWrapperStyle = {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
  };

  const buttonStyle = {
    padding: '10px 24px',
    border: '1px solid #000',
    borderRadius: '8px',
    backgroundColor: '#fff',
    fontFamily: 'Tahoma',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.95rem',
  };

  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />

      <section style={sectionStyle}>
        <h2
          style={{
            fontSize: '2.3rem',
            fontWeight: 'bold',
            marginBottom: '30px',
            fontFamily: 'Tahoma',
          }}
        >
          Explore Course Categories
        </h2>

        {/* Responsive Course Card Grid */}
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div style={buttonWrapperStyle}>
          <button style={buttonStyle}>Explore Free Courses</button>
        </div>
      </section>

      <FacultySection />
      <TestimonialSection />
      <MetricsSection />
      <PartnerLogos />
      <SignupCTA />
      <FAQSection />
      <Footer />
    </>
  );
};

export default App;
