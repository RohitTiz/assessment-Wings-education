import React from 'react';

const CourseCard = ({ course }) => {
  const styles = {
    card: {
      boxSizing: 'border-box',
      border: '1px solid #E9EAF2',
      borderRadius: '16px',
      padding: '12px',
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '300px',
      height: '100%',
    },
    imageContainer: {
      borderRadius: '12px',
      overflow: 'hidden',
      width: '100%',
      marginBottom: '12px',
    },
    image: {
      width: '100%',
      display: 'block',
      objectFit: 'cover',
    },
    title: {
      fontSize: '1rem',
      fontWeight: 600,
      marginBottom: '4px',
      color: '#1a202c',
    },
    subtitle: {
      fontSize: '0.85rem',
      color: '#4a5568',
      marginBottom: '12px',
    },
    tagsContainer: {
      display: 'flex',
      gap: '8px',
      marginBottom: '12px',
      flexWrap: 'wrap',
    },
    tag: {
      fontSize: '0.75rem',
      padding: '4px 8px',
      borderRadius: '8px',
      backgroundColor: '#edf2f7',
      color: '#2d3748',
    },
    star: {
      color: '#f6ad55',
      marginRight: '4px',
    },
    ratingTag: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fffaf0',
      color: '#dd6b20',
      borderRadius: '8px',
      fontSize: '0.75rem',
      padding: '4px 8px',
    },
    ratingCount: {
      fontSize: '0.75rem',
      padding: '4px 8px',
      borderRadius: '8px',
      backgroundColor: '#edf2f7',
      color: '#2d3748',
    },
    price: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginTop: '8px',
      color: '#1a202c',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={course.image} alt={course.title} style={styles.image} />
      </div>
      <div style={styles.title}>{course.title}</div>
      <div style={styles.subtitle}>{course.instructors}</div>
      <div style={styles.tagsContainer}>
        <span style={styles.tag}>Course</span>
        <span style={styles.ratingTag}>
          <span style={styles.star}>★</span> {course.rating}
        </span>
        <span style={styles.ratingCount}>{course.totalRatings} ratings</span>
      </div>
      <div style={styles.price}>₹{course.price}</div>
    </div>
  );
};

export default CourseCard;
