import React from 'react'
import "../styles/Reach.css"
import Image from 'next/image'
import WhatsAppButton from '@/components/Whatsapp'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const reach = () => {
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
      <div className='heading'>
        <div className='header-director'>
          <Header navLinks={navLinks} />
        </div>

        <h1 className=''>Reach Us</h1>
        <hr />
      </div>

      <div className='map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.5924477637172!2d76.39869777496382!3d28.821216675488277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912792db2aaf95f%3A0x49bf974ea9786835!2sVed%20Model%20-%20The%20International%20School%20Kalanaur%20%2CRohtak!5e0!3m2!1sen!2sin!4v1705469760495!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="map-iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <Image width={50} height={50} src='/images/address.webp' alt='address' />
          <div>

            <h3>Address</h3>
            <p>Nigana Road, MDR 122
              <br />Kalanaur, Rohtak</p>
          </div>
        </div>

        <div className="grid-item">
          <Image width={50} height={50} src='/images/phone.webp' alt='phone' />
          <div>

            <h3>Phone</h3>
            <p>01258 222 648</p>
          </div>
        </div>

        <div className="grid-item">
          <Image width={50} height={50} src='/images/gmail.webp' alt='mail' />
          <div>

            <h3>Email</h3>
            <p>vedkalanaur@rediffmail.com</p>
          </div>
        </div>



      </div>
      <WhatsAppButton />
      <Footer />
    </>

  )
}

export default reach