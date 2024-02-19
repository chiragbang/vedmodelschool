

import React from 'react'
import '../styles/Criteria.css';
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

  <div className='criteria-container'>
    <h1 className='criteria-heading'>Admission Criteria</h1>
    {/* <hr/> */}

    <div className='criteria-grid'>
        <div className='criteria-grid-item'>
        <h3>Admission Process Overview: <br/>Join Ved Model Sr. Sec. School</h3>
        <hr/>
         <p>We welcome you to one of the most renowned schools in Haryana - Ved Model Sr. Sec. School, with a commitment to nurture and equip young learners with the uncommon ability of self exploration and development. Our aim is to nurture children to become confident, sensitive, socially committed and well rounded individuals, equipped to become young envoys of progress. Our children grow in the best of environment and under the guidance of competent faculty, elements indispensable today for gaining knowledge and understanding.</p>
       <p>The process of admission reflects sensitivity and ease. Post the submission of the Application Form, parents are given a guided tour of the school facilities. This is followed by an interaction of both the parents with the school Principal where a complete view of the philosophy, vision and methodology of the school is shared. Admission process is taken forward henceforth.</p>

        </div>
        <div className='criteria-grid-item'>
        <h3>Age Criteria</h3>
        <hr className='criteria-underline'/>
           <ul>
             <li>Pre Nursery : Minimum Age 2.5+ as on 31.03.2024</li>
             <li>Nursery : Minimum Age 3.5+ as on 31.03.2024</li>
             <li>KG : Minimum Age 4.5+ as on 31.03.2024</li>
             <li>UKG : Minimum Age 5.0+ as on 31.03.2024</li>
             <li>Class 1 : Minimum Age 2.5+ as on 31.03.2024</li>
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
