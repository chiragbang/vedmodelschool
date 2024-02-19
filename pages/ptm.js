


import React from 'react'
import "../styles/PTM.css"
import Image from 'next/image'
import WhatsAppButton from '@/components/Whatsapp'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const achievements = () => {
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

    
    
    <section>

      <div className='heading'>
      <div className='header-director'>
        <Header navLinks={navLinks} />
      </div>
        <h1>Parents Teacher Meet</h1>

      </div>
      <div className='ptm-container'>
        <div className='ptm-hero-content'>
          <p>To establish a meaningful relationship between parent and school interactive sessions are held on almost third Saturday of every month for different wings. For L.K.G. and U.K.G. classes, Parents-Teacher Meet is held on last Saturday. Saturday will be off for Pre-KG and LKG.</p>

        </div>

        <div className='ptm-hero-image'>
          <Image width={600} height={400} src='/images/ptm.webp' alt='vision' className='img-1' />

        </div>

      </div>

      <div className='ptm-container'>


        <div className='ptm-hero-image'>
          <Image width={600} height={400} src='/images/ptm2.webp' alt='vision' className='img-2'/>

        </div>

        <div className='ptm-hero-content'>
          <p>Parents teachers meeting are very helpful in the sense that through these type of meeting and interactions, student qualities and weakness comes out in front of both teachers and parents. As a result, not only school but parents can also try to improvise their wards by improving in their weeknesses. Parents and teachers can take individual steps to achieve this. These types of meeting also let the parents to know the school, its environment and school newly added facilities better and in a positive approach and can also give their feedbacks to them.</p>
        </div>


      </div>
      <WhatsAppButton />
      <Footer />

    </section>
    
    </>

  )
}

export default achievements

