"use client"
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import "../styles/CTA_Form.css";

const CTA_Form = ({ onFormSubmit }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsFormSubmitted(true);
      onFormSubmit();
    }, 1000);
  };

  return (
    <div className='cta-form'>
    {!isFormSubmitted ? (
      <form className='cta-form-content' onSubmit={handleSubmit}>
        <div className="cta-form-fields">
          <TextField
            fullWidth
            id="email"
            name="email" 
            label="Email"
            variant="standard"
            autoComplete='name'
            required
          />
        </div>
        <div className="cta-form-fields">
          <TextField
            fullWidth
            id="name"
            name="name" 
            label="Name"
            variant="standard"
            autoComplete='name'
            required
          />

        </div>
        <div className="cta-form-fields">
          <TextField
            fullWidth
            id="message"
            name="message" 
            label="Message or Query"
            multiline
            rows={4}
            variant="standard"
            autoComplete='name'
            required
          />
        </div>
        <div className='form-btn'>
          <button type="submit" className="button-24" role="button">Submit</button>
        </div>
      </form>
    ) : (
      <div className="success-message">
        <p>Form submitted successfully!</p>
      </div>
    )}
  </div>
  
  );
}

export default CTA_Form;
