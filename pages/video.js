"use client"
import React, { useState } from 'react';
import "../styles/Video.css"
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VideoGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');

  const playVideo = (videoId) => {
    setCurrentVideoId(videoId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentVideoId('');
    setModalOpen(false);
  };

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
    <div>
      <div className='header-director'>
        <Header navLinks={navLinks} />
      </div>

      <h1 className='video-heading-gallery'>Video Gallery</h1>
      <div className="gallery">
        <div className="video" onClick={() => playVideo('M9hN8-tDhY0')}>
          <Image width={300} height={200} src="/images/video1.webp" alt="Video 1" />
        </div>
        <div className="video" onClick={() => playVideo('M5-q5j2p-0s')}>
          <Image width={300} height={200} src="/images/video2.webp" alt="Video 1" />
        </div>
        <div className="video" onClick={() => playVideo('OMOS6jriMvY')}>
          <Image width={300} height={200} src="/images/video3.webp" alt="Video 1" />
        </div>
        <div className="video" onClick={() => playVideo('sAPL_uxqOic')}>
          <Image width={300} height={200} src="/images/video4.webp" alt="Video 1" />
        </div>
        {/* Add more video items as needed */}
      </div>

      {/* Modal for video playback */}
      {modalOpen && (
        <div className="popup-overlay" onClick={closeModal}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${currentVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}


      <style jsx>{`
        /* Your existing CSS styles remain the same */


       
          
          
          .popup-container .close {
           
          }



        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .popup-container {

            
            margin: 200px; /* Add margin for spacing from all sides */
            

          position: relative;
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .popup-container video {
          width: 100%;
          height: auto;
        }

        .popup-container .close {


          position: absolute;
          top: 3px;
          right: 5px;
          font-size: 24px;
          cursor: pointer;
          color: #333;
        }
      `}</style>

      <Footer/>
    </div>
  );
};

export default VideoGallery;
