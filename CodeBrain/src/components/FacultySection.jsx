import React, { useEffect, useRef } from 'react';

const FacultySection = () => {
  // Faculty data with name, image, blur effect, and size
  const faculty = [
    {
      name: '',
      image: 'faculty/leftfac.png',
      blur: true,
      size: 'small',
    },
    {
      name: 'ANJALI MAM',
      image: 'faculty/mainfac.png',
      blur: false,
      size: 'large',
    },
    {
      name: '',
      image: 'faculty/rightfac.png',
      blur: true,
      size: 'small',
    },
  ];

  // Ref for the section container
  const sectionRef = useRef(null);

  // Animate cards when they come into view using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in'); // Add animation class
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    // Select all cards inside the section and observe them
    const cards = sectionRef.current.querySelectorAll('.faculty-card');
    cards.forEach(card => observer.observe(card));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  // Inline styles for layout and design
  const styles = {
    section: {
      textAlign: 'center',
      padding: '60px 20px',
      backgroundColor: '#fff',
      fontFamily: 'Roboto, sans-serif',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '40px',
      color: '#1b3a57',
    },
    facultyRow: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      flexWrap: 'wrap',
    },
    card: {
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: 'transform 0.5s ease, opacity 0.5s ease',
      opacity: 0,
      transform: 'translateY(20px)', // Initial hidden position
    },
    image: (blur, size) => ({
      width: size === 'large' ? '300px' : '180px',
      height: size === 'large' ? '200px' : '120px',
      objectFit: 'cover',
      filter: blur ? 'blur(3px)' : 'none',
      borderRadius: '12px',
      transition: 'filter 0.3s ease',
    }),
    name: {
      marginTop: '10px',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: '14px',
    },
  };

  return (
    <section style={styles.section} ref={sectionRef}>
      {/* Media query styles and animation class */}
      <style>{`
        @media (max-width: 600px) {
          .faculty-row {
            flex-direction: column;
            gap: 20px;
          }
        }

        .faculty-card.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      {/* Section Heading */}
      <h2 style={styles.heading}>OUR FACULTY</h2>

      {/* Faculty member cards */}
      <div style={styles.facultyRow} className="faculty-row">
        {faculty.map((member, index) => (
          <div key={index} className="faculty-card" style={styles.card}>
            {/* Faculty image with optional blur */}
            <img
              src={member.image}
              alt={member.name || 'Faculty'}
              style={styles.image(member.blur, member.size)}
            />
            {/* Show name only if blur is not applied */}
            {!member.blur && <div style={styles.name}>{member.name}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultySection;
