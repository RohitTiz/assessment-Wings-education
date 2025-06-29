import React from 'react';

const FacultySection = () => {
  const faculty = [
    {
      name: '',
      image: 'faculty/leftfac.png',
      blur: true,
      size: 'small',
    },
    {
      name: 'KANIKA MAM',
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

  const styles = {
    section: {
      textAlign: 'center',
      padding: '60px 20px',
      backgroundColor: '#fff',
      fontFamily: 'Roboto, sans-serif', // ✅ Apply Roboto globally here
    },
    heading: {
      fontSize: '2rem',
      fontWeight: "4000", // ✅ True bold
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
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
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
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>OUR FACULTY</h2>
      <div style={styles.facultyRow}>
        {faculty.map((member, index) => (
          <div key={index}>
            <div style={styles.card}>
              <img
                src={member.image}
                alt={member.name || 'Faculty'}
                style={styles.image(member.blur, member.size)}
              />
            </div>
            {!member.blur && <div style={styles.name}>{member.name}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacultySection;
