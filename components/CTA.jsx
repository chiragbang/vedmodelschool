"use client"
import React, { useState } from 'react';
import CTA_Form from './CTA_Form';
import GoogleMap from './GoogleMap';
import "../styles/CTA.css";

const CTA = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <div className='cta-container'>
      <div className='form'>
        {!formSubmitted && (
          <>
            <h1 className='title'>Request Admissions <br /><span>Information</span></h1>
            <hr />
            <p>Embark on an educational journey with Ved Model Sr. Sec. School, where we cultivate a vibrant tapestry of health and competition. Seize the opportunity to secure your child&apos;s admission by reaching out to us promptly. Let the adventure of learning commence!</p>
          </>
        )}

        {!formSubmitted ? (
          <CTA_Form onFormSubmit={handleFormSubmit} />
        ) : (
          <div className="success-message">
            <p>Form submitted successfully!</p>
          </div>
        )}
      </div>

      <div className='address-map'>
        <GoogleMap />
      </div>
    </div>
  );
}

export default CTA;
