import React from 'react';

// CourseCard Component - displays a single course in card format
const CourseCard = ({ course }) => {
  // Inline styles for various card elements
  const styles = {
    // Card container styling
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
      flex: '1 1 300px',
      minWidth: '0',
    },

    // Container for course image
    imageContainer: {
      borderRadius: '12px',
      overflow: 'hidden',
      width: '100%',
      marginBottom: '12px',
    },

    // Course image styling
    image: {
      width: '100%',
      display: 'block',
      objectFit: 'cover',
    },

    // Course title styling
    title: {
      fontSize: '1rem',
      fontWeight: 600,
      marginBottom: '4px',
      color: '#1a202c',
    },

    // Course instructors subtitle
    subtitle: {
      fontSize: '0.85rem',
      color: '#4a5568',
      marginBottom: '12px',
    },

    // Container for course tags (Course, Rating, etc.)
    tagsContainer: {
      display: 'flex',
      gap: '8px',
      marginBottom: '12px',
      flexWrap: 'wrap',
    },

    // General tag styling
    tag: {
      fontSize: '0.75rem',
      padding: '4px 8px',
      borderRadius: '8px',
      backgroundColor: '#edf2f7',
      color: '#2d3748',
    },

    // Star icon styling for rating
    star: {
      color: '#f6ad55',
      marginRight: '4px',
    },

    // Rating tag styling (background + star)
    ratingTag: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fffaf0',
      color: '#dd6b20',
      borderRadius: '8px',
      fontSize: '0.75rem',
      padding: '4px 8px',
    },

    // Total ratings count tag
    ratingCount: {
      fontSize: '0.75rem',
      padding: '4px 8px',
      borderRadius: '8px',
      backgroundColor: '#edf2f7',
      color: '#2d3748',
    },

    // Price tag styling
    price: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      marginTop: '8px',
      color: '#1a202c',
    },
  };

  // Component rendering
  return (
    <div style={styles.card} className="course-card">
      {/* Course image */}
      <div style={styles.imageContainer}>
        <img src={course.image} alt={course.title} style={styles.image} />
      </div>

      {/* Course title */}
      <div style={styles.title}>{course.title}</div>

      {/* Course instructor(s) */}
      <div style={styles.subtitle}>{course.instructors}</div>

      {/* Tags section: Course type, rating, and total ratings */}
      <div style={styles.tagsContainer}>
        <span style={styles.tag}>Course</span>
        <span style={styles.ratingTag}>
          <span style={styles.star}>★</span> {course.rating}
        </span>
        <span style={styles.ratingCount}>{course.totalRatings} ratings</span>
      </div>

      {/* Course price */}
      <div style={styles.price}>₹{course.price}</div>
    </div>
  );
};

export default CourseCard;
