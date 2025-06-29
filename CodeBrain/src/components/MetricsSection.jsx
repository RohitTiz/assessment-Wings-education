import React from 'react';

const metrics = [
  { value: '1M+', label: 'Happy Students' },
  { value: '5k+', label: 'Top Selections' },
  { value: '100+', label: 'Centers' },
  { value: '300+', label: 'Expert Teachers' },
];

const MetricsSection = () => {
  return (
    <section style={{ padding: '60px 20px', background: '#fff', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px' }}>
        {metrics.map((item, idx) => (
          <div
            key={idx}
            style={{
              width: '200px',
              padding: '30px 20px',
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
              transition: 'transform 0.2s',
            }}
          >
            <h2 style={{ color: '#ff6600', fontSize: '1.8rem', marginBottom: '10px' }}>{item.value}</h2>
            <p style={{ fontSize: '1rem', color: '#555' }}>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
