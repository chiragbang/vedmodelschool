import React from 'react'
import '../styles/IOP.css';
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/Whatsapp';


const director = () => {
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
      <div className='header-director'>
        <Header navLinks={navLinks} />
      </div>

  <div className='iop-container'>
    <h1>International Outreach Programme</h1>
    {/* <hr/> */}

    <div className='iop-grid'>
        <div className='iop-grid-item'>
        <h2>1. Attention Overseas Students</h2>
        <hr/>
                   <p>Calling Overseas students from UK, USA, NEPAL, BHUTAN, SIKKAM and the North Eastern States of India for a fifteen to 45 days Bridge course in Maths, Physics, Chemistry, Biology, Aloha/Vedic Mathematics, Soft Skills, Numerology, and Astrology beginning 25th June 2022.</p>
                    <ul className='points'>
                    <li>Boarding & Lodging Facilities available</li>
                        <li>Exceptionally qualified and experienced members of faculty</li>
                        <li>Reasonable Fee</li>
                      <li>Holistic growth ensured</li>
                      <li>Evening discourse and Yoga Classes</li>
                       <li>Facilities for outdoor and indoor games</li>
                       <li>Age Group 11 Years to 18 Years</li>
                      <li>Multimedia Library</li>
                      <li>Fee is € 500 to € 1500</li>
                      <li>Contact Email for Registration : vedkalanaur@rediffmail.com</li>
                  </ul>
        </div>
        <div className='iop-grid-item'>
        <h2>2. International Outreach Programme</h2>
        <hr/>
                     <p>
                         &quot;Ved Model Sr. Sec. School School : 15-45 day Bridge Course for ages 11-18. Boost academics in Science, Maths, Social Science, PSA, and communication skills. Enjoy nature-based learning with excellent boarding facilities. Enroll for a competitive edge!&quot
                     </p>
                     <ul className='points'>
                        <li>Fee is € 500 to € 1500</li>
 <li>Contact Email for Registration : vedkalanaur@rediffmail.com</li>
                     </ul>
        </div>
    </div>
  </div>

      <div className='footer-director'>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default director
