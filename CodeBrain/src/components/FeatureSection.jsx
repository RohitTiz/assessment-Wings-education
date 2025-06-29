import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      image: 'feature/first.png',
      title: 'Daily Live',
      subtitle: 'Interactive classes',
    },
    {
      image: 'feature/second.png',
      title: '10 Million +',
      subtitle: 'Tests, sample papers & notes',
    },
    {
      image: 'feature/three.png',
      title: '24 x 7',
      subtitle: 'Doubt solving sessions',
    },
    {
      image: 'feature/four.png',
      title: '100 +',
      subtitle: 'Offline centres',
    },
  ];

  const styles = {
    section: {
      width: '100%',
      backgroundColor: '#ffffff',
      paddingTop: '100px',
      paddingBottom: '60px',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Roboto, sans-serif',
    },
    container: {
      marginTop: '-120px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      width: '1160px',
      maxWidth: '95%',
      background: '#FFFFFF',
      boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.05)',
      borderRadius: '12px',
      padding: '30px 20px',
      zIndex: 10,
      position: 'relative',
    },
    card: {
      flex: '1 1 220px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '12px',
      minWidth: '180px',
    },
    image: {
      width: '64px', // Increased size
      height: '64px',
      objectFit: 'contain',
      marginBottom: '14px',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 600,
      marginBottom: '6px',
      color: '#2D2D2D',
    },
    subtitle: {
      fontSize: '0.95rem',
      color: '#666',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {features.map((feature, index) => (
          <div key={index} style={styles.card}>
            <img src={feature.image} alt={feature.title} style={styles.image} />
            <div style={styles.title}>{feature.title}</div>
            <div style={styles.subtitle}>{feature.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
