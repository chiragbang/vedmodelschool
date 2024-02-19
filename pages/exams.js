import React from 'react'
import "../styles/Exams.css"
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
                        <h1 className='intro-title '>Examinations</h1>
                        <div className="intro-yellow-line"></div>

                        <ul>

                            <li>75% of the attendance is must for appearing in the annual examination.</li>
                            <li>If a student does not appear in any examination for any personal reason, he/she will not be given any compensation.</li>
                            <li>If a student fails in one subject or is absent in any examination, he/she will not be considered for the position in the class in that examination.</li>
                            <li>If a student is caught copying in the examination, he/she will be marked zero. However, the principal and the examination committee reserve the right to make amendments.</li>
                            <li>If a student is officially deputed by the school to participate in certain competition during the examination days, he/she will be given a chance to appear for a retest.</li>
                            <li>It is essential to participate in at least two different cultural activities by each student. Grading according to the CBSE will be given on the basis of performance in cultural activities.</li>
                            <li>Grading system will be introduced to award the students in the examination as per CBSE rules.</li>
                            <li>Absentees in the examination are required to submit a medical certificate.</li>
                            <li>C.C.E. will be introduced to assess the students&apos; learning level & to improve their performance.</li>
                            <li>Weightage of pass in the examination is 35%.</li>
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




