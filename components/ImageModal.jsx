// ImageModal.js
import React from 'react';
import '../styles/ImageModal.css';
import Image from 'next/image';

const ImageModal = ({ imageUrl, closeModal }) => {
  return (
    <div className="image-modal" onClick={closeModal}>
     <Image layout="fill" src={imageUrl} alt="Selected Image" className="modal-image" />
    </div>
  );
};

export default ImageModal;
