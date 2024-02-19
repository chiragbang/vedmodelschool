import React from 'react'
import "../styles/Introduction.css"
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/Whatsapp';
import Link from 'next/link';
import { FaArrowRight, FaFacebook, FaUser, FaYoutube } from 'react-icons/fa';


const intro = () => {
  const navLinks = [
    { label: 'Home', url: '/' },
    // { label: 'Home', url: '/results' },
    {
      label: 'About Us',
      url: '#',
      dropdownLinks: [
        { label: 'Our Vision', url: '/vision' },
        { label: 'Our Mission', url: '/mission' },
        { label: 'Director Message', url: '/intro' },
        { label: 'Principal Message', url: '/principal' },
        { label: 'Administrator Message', url: '/intro' },
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
      <div className='header-intro'>
        <Header navLinks={navLinks} />
      </div>
     <div className='school-introduction'>
      <Image
  width={1540}
  height={100}
  className='school-img-introduction'
  src="/images/school-background.webp"
  alt="School Background"
  priority={true}
/>


      {/* Overlay */}
      <div className="overlay-introduction"></div>

      <div className="intro-content">
        <div className='intro-content-info'>
       
          {/* Yellow Horizontal Row */}
         

          {/* School Title */}
          <h1 className='intro-title '>School <span>Introduction</span></h1>
          <div className="intro-yellow-line"></div>

          {/* School Description */}
          <p className='intro-description'>Ved Model Sr. Sec. School Sr. Sec. School is a center for co-educational excellence day-cum residential, one of the premier institutions of Haryana.The superby land scalped 12 acre Ved Model Sr. Sec. School campus located at Kalanaur(Rohtak) is comprised of 5 ergonomically constructed main building interspersed with playing fields, golf course, gardens, green space & flower plants.Ved Model Sr. Sec. School is established with the Vedic Concept of education by Ved Shiksha Samiti. However, according to the Ved Model Sr. Sec. School, purification & concentration of the mind are not merely intended for acquiring objective of knowledge.</p>

          
        </div>

       
      </div>
     </div>



      <div className='footer-intro'>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default intro



