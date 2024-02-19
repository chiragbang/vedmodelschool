import React from 'react'
import "../styles/Achievements.css"
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
        <h1>Academic Achievements</h1>

      </div>
      <div className='achievement-container'>
        <div className='hero-content'>
          <h2>Academics</h2>
          <p>Sahil Malik S/o Sh.Yashpal and Neha D/o Sh. Suresh Kumar topped Meham Sub-division with 91.2% and 90.8% marks in Science and commerce Streams respectively in the session 2009-10. Two students of our school:- Pankaj S/o Sh. Surender Goyal & Aman S/o Sh. Sunil Kumar got selected for IIT in 2010.</p>

        </div>

        <div className='hero-image'>
          <Image width={600} height={400} src='/images/achievement1.webp' alt='vision' className='img-1' />

        </div>

      </div>

      <div className='achievement-container'>


        <div className='hero-image'>
          <Image width={600} height={400} src='/images/achievement2.webp' alt='vision' className='img-2'/>

        </div>

        <div className='hero-content'>
          <h2>Extra Activities</h2>
          <p>Our students have excelled in extra activities also. Our school team including Babli D/o Sh. Satyawan and Ravi S/o Sh. Rohtas stood second in inter school quiz &apos;Bharat ko Jano&apos; conducted by Bharat Vikas parishad on November 20,2010. Our school student Neetu D/o Sh. Balraj brought honour to school with 2nd position in inter school ‘Hasya Kavi Sammelan’ and our dance team bagged 3rd position in inter school ‘Group Dance competition’. These both activities were conducted by Pathania Public School Rohtak on 10th August, 2010. Neetu of Xth –C of our school stood first in inter school ‘Mehandi’ competition conducted by Bharat Vikas Parishad, Meham in August,2010.</p>
        </div>


      </div>
      <WhatsAppButton />
      <Footer />

    </section>
    
    </>

  )
}

export default achievements

