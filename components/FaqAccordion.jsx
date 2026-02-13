'use client';

import React, { useState } from 'react';

const FaqAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div style={containerStyle}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} style={itemStyle}>
            <button
              type="button"
              onClick={() => toggle(index)}
              style={buttonStyle}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <img
                src={isOpen ? '/icons/faq-icon.svg' : '/icons/faq-car.svg'}
                alt=""
                style={iconStyle}
              />
            </button>

            {isOpen && (
              <div style={answerStyle}>
                <p style={{ margin: 0 }}>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const containerStyle = {
  width: '100%',
  maxWidth: '900px',
  margin: '0 auto',
  fontFamily: 'Segoe UI, Roboto, sans-serif'
};

const itemStyle = {
  borderBottom: '1px solid #e0e0e0'
};

const buttonStyle = {
  width: '100%',
  padding: '14px 0',
  background: 'none',
  border: 'none',
  textAlign: 'left',
  fontSize: '15px',
  fontWeight: 600,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const iconStyle = {
  width: '22px',
  height: '22px',
  flexShrink: 0
};

const answerStyle = {
  padding: '0 0 14px 0',
  fontSize: '14px',
  color: '#444'
};

export default FaqAccordion;
