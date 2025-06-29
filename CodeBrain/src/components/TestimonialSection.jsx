import React from 'react'

const testimonials = [
  {
    quote:
      "The content is highly structured, with practical examples and resources. Whether you're new to the field or looking to sharpen your skills, this provides everything you need to become a confident digital marketer.",
    name: 'Sandeep H.',
    title:
      'Review from Digital Marketing Strategist. Unlock your career growth',
    avatar: '',
    initials: 'SH',
  },
  {
    quote:
      'Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world. It helped me sell myself to get a new role.',
    name: 'William Wachlin',
    title: 'Partner Account Manager at Amazon Web Services',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    quote:
      'Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.',
    name: 'Alvin Lim',
    title: 'Technical Co-Founder, CTO at Dimensional',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
]

const TestimonialSection = () => {
  const styles = {
    section: {
      backgroundColor: '#1f1d39',
      padding: '60px 20px',
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Roboto, sans-serif', // ✅ Apply Roboto font here
    },
    heading: {
      fontSize: '1.8rem',
      fontWeight: '600',
      marginBottom: '40px',
    },
    testimonialsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '24px',
    },
    card: {
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '16px',
      padding: '24px',
      maxWidth: '360px',
      textAlign: 'left',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      flex: '1 1 300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '320px',
    },
    quoteMark: {
      fontSize: '2rem',
      color: '#333',
      marginBottom: '12px',
    },
    quoteText: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: '20px',
    },
    avatarImg: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    avatarInitials: {
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      backgroundColor: '#333',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    },
    name: {
      fontWeight: '600',
      fontSize: '0.95rem',
    },
    title: {
      fontSize: '0.8rem',
      color: '#666',
    },
  }

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>What other learners are saying</h2>
      <div style={styles.testimonialsWrapper}>
        {testimonials.map((t, i) => (
          <div key={i} style={styles.card}>
            <div>
              <div style={styles.quoteMark}>“</div>
              <p style={styles.quoteText}>{t.quote}</p>
            </div>
            <div style={styles.profile}>
              {t.avatar ? (
                <img src={t.avatar} alt={t.name} style={styles.avatarImg} />
              ) : (
                <div style={styles.avatarInitials}>{t.initials}</div>
              )}
              <div>
                <div style={styles.name}>{t.name}</div>
                <div style={styles.title}>{t.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
