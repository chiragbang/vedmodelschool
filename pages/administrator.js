import React from 'react'
import '../styles/Administrator.css';
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/Whatsapp';


const administrator = () => {
  const navLinks = [
    { label: 'Home', url: '/' },
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
      <div className='header-administrator'>
        <Header navLinks={navLinks} />
      </div>

      <div className='administrator-hero'>
        <div className='left-administrator'>
          <h1>Administrator&apos;s Message</h1>
           <h2>Administrator&apos;s Insight: Guiding Principles and Vision for Excellence</h2>



          <hr className='underline' />

         
            
          <p>Continuing to evolve, I maintain an unwavering dedication to learning, recognizing that those who actively seek knowledge elevate themselves. It&apos;s humanity&apos;s duty to progress in the pursuit of knowledge.</p>
          <p>At Ved Model Sr. Sec. School, we foster academic prowess, refine aesthetic sensibilities, and cherish each student&apos;s uniqueness. Our approach prioritizes joyful learning over rote methods, emphasizing research-based education with personalized plans tailored to individual potential.</p>
          <p>Within our nurturing environment, we cultivate lifelong learners, encouraging students to develop as critical thinkers and well-rounded individuals. Grounded in values yet reaching for the stars, we aim to nurture global citizens committed to peace and unity. Education, to us, is a lifelong journey filled with joy and discovery.
          </p>

        </div>
        <div className='administrator-image'>
          <Image
            width={600}
            height={200}
            src='/images/administrator.webp'
            alt='administrator'
            className='administrator-img'
            priority={true}
          />
          <h2>Mrs. Urmil Bondwal</h2>
          <h3>(Administrator)</h3>

        </div>
      </div>

      <div className='footer-administrator'>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default administrator



