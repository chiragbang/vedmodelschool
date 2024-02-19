



import React from 'react'
import '../styles/Principal.css';
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/Whatsapp';


const principal = () => {
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
      <div className='header-principal'>
        <Header navLinks={navLinks} />
      </div>

      <div className='principal-hero'>
        <div className='left-principal'>
          <h1>Principal&apos;s Message</h1>
          <h2>Principal&apos;s Perspective: Inspiring Growth and Leading with Purpose</h2>
         

          <hr className='underline' />

         
<p>At Ved Model Sr. Sec. School, our philosophy is deeply rooted in the belief that every child is a precious gift bestowed with unique talents awaiting discovery. We prioritize the creation of nurturing and authentic learning environments, moving beyond traditional instruction methods. Our goal is to cultivate an atmosphere where students are encouraged to explore their potential through self-assessment and continuous growth. </p>
  <p>In our community, we emphasize the importance of fostering a supportive environment free from unnecessary competition and comparisons. Instead, we strive to empower students to evaluate their own progress and celebrate their individual achievements. We encourage open communication with the principal to address any concerns, ensuring a collaborative approach to resolving issues.</p>
  <p>Furthermore, we advocate for a focused academic environment by discouraging non-academic leave requests. This commitment aims to maintain students&apos; dedication to their studies and their overall success.</p>
        </div>
        <div className='principal-image'>
          <Image
            width={600}
            height={200}
            src='/images/principal.webp'
            alt='principal'
            className='principal-img'
            priority={true}
          />
           <h2>Mrs. Usha Rani Goswami</h2>
       <h3>(Principal)</h3>

        </div>
      </div>

      <div className='footer-principal'>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default principal


