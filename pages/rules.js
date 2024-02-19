import React from 'react'
import "../styles/Rules.css"
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
          <h1 className='rules-heading'>Admission Rules</h1>

        </div>
        <div className='ptm-container'>
          <div className='hero-content'>
         <p>The registration forms for admission to all classes will available from office along with the prospectus at a cost of Rs 200/- each. The duly filled forms will be deposited at the school office which will remain open from 8.00 a.m. to 2.00 pm.</p>


          </div>

          <div className='hero-image'>
            <Image width={600} height={400} src='/images/admission.webp' priority={true} alt='vision' className='img-1' />

          </div>

        </div>

        <div className='ptm-container'>




          <div className='hero-content'>
          <h2>Admission Rules</h2>
          <ul className='points'>
           <li>Registration fee is non-refundable, and registration is no guarantee for admission.</li>
           <li>Only the registered candidates will be called for an admission test/interview except the candidates of Nursery. The test will be held in the 1st week of April every year in English, Hindi & Maths subjects, of the standard of the class passed.</li>
           <li>The application for registration will be accepted up to 25th March every year.</li>
           <li>Admission will be made strictly on the basis of merit of the entrance test & interview that depends on the vacant seats.</li>
           <li>The candidate will be granted admission after depositing the school fee.</li>
          </ul>
          </div>


        </div>
        <WhatsAppButton />
        <Footer />

      </section>

    </>

  )
}

export default achievements


