import React from 'react';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Header from '@/components/Header';
import School from '@/components/School';
import Video from '@/components/Video';
import Footer from '@/components/Footer';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Testimonials from '@/components/Testimonials';
import Testimonials2 from '@/components/Testimonials2';

import "../styles/Page.css"
import HomeGallery from '@/components/HomeGallery';
import News from '@/components/News';
import News2 from '@/components/News2';

import Marks from '@/components/Marks';
import TopInfo from '@/components/TopInfo';

// Home component definition
export default function Home() {
  const lineStyle = {
    maxWidth: '104px',
    minWidth: '45px',
    width: '100%',
    textAlign: 'left',
    marginLeft: 0,
    border: '1px solid #000', 
  };
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
      url: '/',
      dropdownLinks: [
        { label: 'Academic Achievement', url: '/achievements' },
        { label: 'Examinations', url: '/exams' },
        { label: 'Leave Rules', url: '/leaves' },
        { label: 'Parent Teachers Meet', url: '/ptm' },
      ],
    },
    {
      label: 'Admission',
      url: '/',
      dropdownLinks: [
        { label: 'Admission Rules', url: '/rules' },
        { label: 'Admission Criteria', url: '/criteria' },
        { label: 'Admission Procedure', url: '/procedure' },
        { label: 'Modernization in Education', url: '/modernization' },
        { label: 'News/Event', url: '/admission/events' },
        { label: 'School Uniform', url: '/admission/uniform' },
      ],
    },
    {
      label: 'Art & Culture',
      url: '/',
      dropdownLinks: [
        { label: 'Dance & Music', url: '/art-culture/dance-music' },
        { label: 'Activities', url: '/art-culture/activities' },
        { label: 'Painting', url: '/art-culture/painting' },
        { label: 'Robotics', url: '/art-culture/robotics' },
      ],
    },
    {
      label: 'CBSE Corner',
      url: '/',
      dropdownLinks: [
        { label: 'CBSE Corner', url: '/cbse' },
        { label: 'Mandatory Public Disclosure', url: 'https://drive.google.com/file/d/1XAFJIJAK6SGSU3AL3taXYINm7Z5LKxvO/view' },
        { label: 'SLC Download', url: '/slc' },
      ],
    },
    {
      label: 'Contact Us',
      url: '/',
      dropdownLinks: [
        { label: 'Enquiry', url: '/enquiry' },
        { label: 'Reach Us', url: '/reach' },
      ],
    },
    {
      label: 'Gallery',
      url: '/',
      dropdownLinks: [
        { label: 'Video Gallery', url: '/video' },
        { label: 'Photo Gallery', url: '/gallery' },
      ],
    },
    { label: 'Careers', url: '/careers' },
    { label: 'Facilities', url: '/' },
  ];

  const aboutData = [
    {
      icon: "/images/planet-earth.webp",
      title: "INTERNATIONAL SCHOOL",
      desc: "We are highly committed towards providing education based on the global standards."
    },
    {
      icon: "/images/touch.webp",
      title: "SMART CLASSES",
      desc: "Our school offers smart classes to make sure the students grasp the core concepts more easily"
    },
    {
      icon: "/images/leadership.webp",
      title: "TOP RESULTS",
      desc: "Our students consistently top CBSE rankings, demonstrating exceptional academic excellence and commitment to success."
    },
    {
      icon: "/images/membership.webp",
      title: "STUDENT CLUBS",
      desc: "We believe in cultivating curiosity among the students through STEM, IT, Science and various other clubs."
    },
  ];


  const testimonialsData = [


    {
      quote: "Words cannot explain my gratitude to the management and all teachers when I was at Ved Model Sr. Sec. School.",
      name: `Dr. Manjeet Kumar`,
      position: `Humboldt Fellow
      Bioinformatics Scientist`,
      avatar: "/images/Dr-Manjeet.webp",
    },
    {
      quote: "The school has good culture, a broad background and strong moral foundation.",
      name: `Dr. Bhushan Kathuria`,
      position: "ENT/Head and Neck Oncosurgeon",
      avatar: "/images/bhushan.webp",
    },
    {
      quote: "Ved Model Sr. Sec. School is more than just a school. Grateful for the unforgettable experiences and lifelong friendships forged here.",
      name: "Piyusha",
      position: "Student",
      avatar: "/images/Piyusha.webp",
    },
    {
      quote: "At Ved Model Sr. Sec. School, I found my passion, my purpose, and my people. Grateful for every moment.",
      name: "Nakul",
      position: "Student",
      avatar: "/images/Nakul.webp",
    },
    {
      quote: "At Ved Model Sr. Sec. School, I've found my second home, where learning is inspiring, friendships are cherished, and dreams take flight.",
      name: "Jiya",
      position: "Student",
      avatar: "/images/Jiya.webp",
    },

    {
      quote: "From day one, Ved Model Sr. Sec. School welcomed me into a family of learners and leaders. Grateful for the support and endless opportunities.",
      name: "Rahul",
      position: "Student",
      avatar: "/images/Rahul.webp",
    },

  ];

  return (
    <>

      <main className='main-container'>
        <TopInfo />
        <div className='container'>

          {/* <Header/> */}
          <Header navLinks={navLinks} />
          <School />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', marginTop: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%', justifyContent: 'center' }}>
              <hr style={lineStyle} />
              <h1 className='section__heading' style={{ fontSize: '32px' }}>Why Us</h1>
              <hr style={lineStyle} />
            </div>

            <div className='about-container'>

              <div className='about-area'>
                {aboutData.map((about, index) => (
                  <About key={index} icon={about.icon} title={about.title} desc={about.desc} />
                ))}
              </div>
            </div>
          </div>








          <Testimonials testimonialsData={testimonialsData} className="test-large" />
          <Testimonials2 />


          {/* <Reviews/> */}

          <Marks />
          <News />
          <News2 />
          <CTA />
          <HomeGallery />


          <Video />
          <Footer />

        </div>
      </main>
    </>
  );
}
