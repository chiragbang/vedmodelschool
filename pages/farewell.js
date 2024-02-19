import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import ImageModal from '@/components/ImageModal';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Gallery = () => {
  const numberOfImages = 20;
  const localImageUrls = Array.from({ length: numberOfImages }, (_, index) => `/images/Farewell/${index + 1}.webp`);

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyPress = (e) => {
    if (selectedImage) {
      if (e.key === 'ArrowRight') {
        navigateImage(1);
      } else if (e.key === 'ArrowLeft') {
        navigateImage(-1);
      } else if (e.key === 'Escape') {
        closeModal();
      }
    }
  };

  const navigateImage = (direction) => {
    const currentIndex = localImageUrls.indexOf(selectedImage);
    const newIndex = (currentIndex + direction + localImageUrls.length) % localImageUrls.length;
    setSelectedImage(localImageUrls[newIndex]);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress,selectedImage]);

  const navLinks = [
    { label: 'Home', url: '/' },
    // { label: 'Home', url: '/results' },
    {
      label: 'About Us',
      url: '#',
      dropdownLinks: [
        { label: 'Our Vision', url: '/vision' },
        { label: 'Our Mission', url: '/mission' },
        { label: 'Director Message', url: '/director' },
        { label: 'Principal Message', url: '/principal' },
        { label: 'Administrator Message', url: '/administrator' },
        { label: 'School Introduction', url: '/introduction' },
        { label: 'Instructions', url: '/instructions' },
        { label: 'International Outreach Programme', url: '/iop' },

      ],
    },
    {
      label: 'Academics',
      url: '#',
      dropdownLinks: [
        { label: 'Academic Achievement', url: '/achievements' },
        { label: 'Examinations', url: '/exams' },
        { label: 'Leave Rules', url: '/leaves' },
        { label: 'Parent Teachers Meet', url: '/ptm' },
        // Add more dropdown links as needed
      ],
    },
    {
      label: 'Admission',
      url: '#',
      dropdownLinks: [
        { label: 'Admission Rules', url: '/rules' },
        { label: 'Admission Criteria', url: '/criteria' },
        { label: 'Admission Procedure', url: '/procedure' },
        { label: 'Modernization in Education', url: '/modernization' },
        { label: 'News/Event', url: '/events' },
        { label: 'School Uniform', url: '/uniform' },
        // Add more dropdown links as needed
      ],
    },
    {
      label: 'Art & Culture',
      url: '#',
      dropdownLinks: [
        { label: 'Dance & Music', url: '/dance-music' },
        { label: 'Activities', url: '/activities' },
        { label: 'Painting', url: '/painting' },
        { label: 'Robotics', url: '/robotics' },
        // Add more dropdown links as needed
      ],
    },
    {
      label: 'CBSE Corner',
      url: '#',
      dropdownLinks: [
        { label: 'CBSE Corner', url: '/cbse' },
        { label: 'Mandatory Public Disclosure', url: 'https://drive.google.com/file/d/1XAFJIJAK6SGSU3AL3taXYINm7Z5LKxvO/view' },
        { label: 'SLC Download', url: '/slc' },
        // Add more dropdown links as needed
      ],
    },
    {
      label: 'Contact Us',
      url: '#',
      dropdownLinks: [
        { label: 'Enquiry', url: '/enquiry' },
        { label: 'Reach Us', url: '/reach' },
        // Add more dropdown links as needed
      ],
    },
    {
      label: 'Gallery',
      url: '#',
      dropdownLinks: [
        { label: 'Video Gallery', url: '/video' },
        { label: 'Photo Gallery', url: '/gallery' },
        // Add more dropdown links as needed
      ],
    },
    { label: 'Careers', url: '/careers' },
    { label: 'Facilities', url: '/facilities' },
  ];


  return (
    <>
    <div className='main'>

    <div className='header-director'>
            <Header navLinks={navLinks} />
          </div>

      <h1>Farewell 2024 : <span>A Gallery of Fond Farewell Memories.</span></h1>
      <div className='gallery'>
        {localImageUrls.map((imageUrl, index) => (
          <div className='img' key={index} onClick={() => openModal(imageUrl)}>
            <Image src={imageUrl} alt={`Image ${index + 1}`} width={1000} height={1000} priority={true}/>
          </div>
        ))}
      </div>

      {selectedImage && <ImageModal imageUrl={selectedImage} closeModal={closeModal} />}

    </div>
       <Footer/>
      </>
  );
};

export default Gallery;
