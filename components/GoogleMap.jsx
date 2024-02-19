import React from 'react';
import { FaSchool, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/GoogleMap.css';

const GoogleMap = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.5924477637172!2d76.39869777496382!3d28.821216675488277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912792db2aaf95f%3A0x49bf974ea9786835!2sVed%20Model%20-%20The%20International%20School%20Kalanaur%20%2CRohtak!5e0!3m2!1sen!2sin!4v1705469760495!5m2!1sen!2sin";

  return (
    <div className='google-map-container'>
      <iframe
        title="Google Map"
        src={mapUrl}
        width="100%"
        height="400"
        className="google-map-iframe"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer"
      ></iframe>

      {/* Displayed Information */}
      <div className="map-info-container">
        <h3 className="map-info-heading">Ved Model Sr. Sec. School</h3>

        <div className="map-info-section">
          <FaSchool className="map-icon" />
          <div>
            <p>Nigana Road, MDR 122,<br /> Kalanaur, Rohtak</p>
          </div>
        </div>

        <div className="map-info-section">
          <FaPhoneAlt className="map-icon" />
          <p>01258 222 648</p>
        </div>

        <div className="map-info-section">
          <FaEnvelope className="map-icon" />
          <p>Email: vedkalanaur@rediffmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
