import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is a Payment Gateway?',
    answer: 'A payment gateway is a technology used to accept debit or credit card purchases from customers.',
  },
  {
    question: 'Do I need to pay to Instapay even when there is no transaction going on in my business?',
    answer: 'No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!',
  },
  {
    question: 'What platforms does ACME payment gateway support?',
    answer: 'ACME supports all major e-commerce platforms like Shopify, WooCommerce, and Magento.',
  },
  {
    question: 'Does ACME provide international payments support?',
    answer: 'Yes, ACME allows businesses to accept payments from international customers in multiple currencies.',
  },
  {
    question: 'Is there any setup fee or annual maintenance fee that I need to pay regularly?',
    answer: 'There are no setup or annual maintenance fees. You only pay per transaction.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // default active

  return (
    <section style={{
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: 'Roboto, sans-serif'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '40px'
      }}>
        Frequently Asked Questions
      </h2>

      <div style={{
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        {/* Left: Questions */}
        <div style={{
          flex: 1,
          minWidth: '320px',
          border: '1px solid #eee',
          borderRadius: '4px',
          backgroundColor: '#fff'
        }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'center',
                borderBottom: index !== faqs.length - 1 ? '1px solid #eee' : 'none',
                cursor: 'pointer',
                backgroundColor: activeIndex === index ? '#f9f9ff' : '#fff',
                transition: 'background-color 0.3s ease'
              }}
            >
              <span style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: activeIndex === index ? '#4338ca' : '#c7d2fe',
                marginRight: '16px',
                flexShrink: 0
              }}></span>
              <span style={{
                flex: 1,
                fontWeight: activeIndex === index ? '500' : '400',
                fontSize: '0.95rem',
                color: activeIndex === index ? '#1f1f1f' : '#333'
              }}>
                {faq.question}
              </span>
              <span style={{
                color: '#999',
                fontSize: '1rem'
              }}>›</span>
            </div>
          ))}
        </div>

        {/* Right: Answer (increased width by 40%) */}
        <div style={{
          flex: 1.4, // Increased width
          minWidth: '320px',
          padding: '30px',
          backgroundColor: '#f9f9ff',
          borderRadius: '12px',
          fontFamily: 'Inter, sans-serif'
        }}>
          <h4 style={{
            fontWeight: '600',
            fontSize: '1.1rem',
            marginBottom: '10px',
            color: '#1f1f1f'
          }}>
            {faqs[activeIndex].question}
          </h4>
          <p style={{
            color: '#444',
            lineHeight: '1.6',
            fontSize: '0.95rem'
          }}>
            {faqs[activeIndex].answer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
