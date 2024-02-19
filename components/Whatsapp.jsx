"use client"
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import "../styles/Whatsapp.css"

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/7988636703', '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
     <p>Talk to Us!</p>  
     < FaWhatsapp className = "whatsapp-icon"/>
    </div>
  );
};

export default WhatsAppButton;
