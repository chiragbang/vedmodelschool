import React from 'react'
import "../styles/CBSE.css"
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '@/components/Whatsapp'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const cbse = () => {
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

    <h1 className='cbse-heading'>CBSE CORNER</h1>
    <div className="links-grid">
    <Link href="https://drive.google.com/file/d/1XAFJIJAK6SGSU3AL3taXYINm7Z5LKxvO/view" className="link-item" target="_blank">Mandatory Public Disclosure</Link>
    <Link href="https://drive.google.com/file/d/1Y0z5ARVGTo1a9D8tfmcEs5uDRE7o9rZ6/view" className="link-item" target="_blank">Society Registration</Link>
    <Link href="https://drive.google.com/file/d/177F1YLtsRfR05v6bv43SeNjwNZFzuvOJ/view?usp=drive_link" className="link-item" target="_blank">Board Results</Link>
    <Link href="https://drive.google.com/file/d/1dzLtVtjIez6PVQWusskVRpuGg7e821_q/view" className="link-item" target="_blank">Noc From State</Link>
    <Link href="https://drive.google.com/file/d/1TfX7b7cgcsYHX3p0aVaptzmRaNl6BQvV/view" className="link-item" target="_blank">Fire Safety Certificate</Link>
    <Link href="https://drive.google.com/file/d/12e_BwO7XuUNT4eaOQajZBAgaYlb4EeRe/view" className="link-item" target="_blank">Parent Teacher Association</Link>
    <Link href="https://drive.google.com/file/d/1af97clbKMsU8RZmgV5VHUildU1qVA4wg/view" className="link-item" target="_blank">School Managing Committe</Link>
    <Link href="https://drive.google.com/file/d/185no0yqTbRBlfmKIE25in7Ogs-UGLTnO/view" className="link-item" target="_blank">Recognition from State</Link>
    <Link href="https://drive.google.com/file/d/1oqwT2MFeZeuZJG5gZC2O4m4plhAxwd7r/view" className="link-item" target="_blank">Building Safety Certificate</Link>
    <Link href="https://drive.google.com/file/d/1h3Lz5kZdjyifIpU7TbcFo8D5Ro_stayd/view" className="link-item" target="_blank">Water and Sanitation Certificate</Link>
    <Link href="https://drive.google.com/file/d/1KIIfSbfhRq9kVR5--vLHxXtHToBvhLxQ/view" className="link-item" target="_blank">Affiliation Letter</Link>
</div>
<WhatsAppButton />
<Footer/>
    </>
  )
}

export default cbse