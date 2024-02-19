import React from 'react'
import "../styles/Leaves.css"
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/Whatsapp';
import Link from 'next/link';
import { FaArrowRight, FaFacebook, FaUser, FaYoutube } from 'react-icons/fa';


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



            <div className='school-introduction'>




                <Image
                    width={1540}
                    height={100}
                    className='school-img-introduction'
                    src="/images/school-background.webp"
                    alt="School Background"
                />


                {/* Overlay */}
                <div className="overlay-introduction"></div>

                <div className="intro-content">
                    <div className='intro-content-info'>

                        {/* Yellow Horizontal Row */}


                        {/* School Title */}
                        <h1 className='intro-title '>Leave <span>Rules</span></h1>

                        <div className="intro-yellow-line"></div>

                        <ul>

                        <li>The students are not allowed to go home during the term.</li>
                        <li>Leave may be granted for special treatment on the advice of CMO.</li>
                         <li>The students may be allowed three days leave for the wedding of real brother and sister.</li>
                         <li>For all types of leave, a written request should be made to principal by the parent/guardian in advance.</li>
                         <li>No leave will be granted on student&apos;s request or request made through telephone.</li>
                         <li>A student detained due to some  disease has to produce medical certificate on return to the school.</li>
                         <li>Attendance is compulsory on the first and last day of the session.</li>
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




