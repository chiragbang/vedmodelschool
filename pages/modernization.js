import React from 'react'
import { FaUser, FaLanguage, FaChalkboard } from 'react-icons/fa';
import { LiaLanguageSolid } from "react-icons/lia";
import { MdCastForEducation, MdOutlineSportsBasketball, MdLibraryMusic   } from "react-icons/md";
import "../styles/Modernization.css"
import Image from 'next/image';
import WhatsAppButton from '@/components/Whatsapp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const modernization = () => {
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

        <h1>Modernization in Education</h1>
        <hr/>
      </div>


      <section>
      <div className='modernization-container'>
        <div className='modernization-hero-content'>
          <h2>Our Motto:<br/> Uncovering Hidden Gems</h2>
          <hr/>
          <p>As is evident from our motto itself, we strive to lay a sound foundation of the child so that he/she may acquire new heights through knowledge and take the country to its much deserved position to lead the world in the 21st century. Our earnest efforts are to develop innovative thinking by application of the latest technology in teaching-learning process so that the students can meet the intentional challenges.</p>
          
          {/* <p>To nurture children in a multidimensional & subtle manner right from their childhood to adulthood in a caring & enriched environment with the best qualified, accomplished, experienced & kind hearted human being around them.</p> */}
        </div>

        <div className='modernization-hero-image'>
        <Image width={600} height={400} src='/images/vision_img.webp' alt='vision' className='img-1' />

        </div>

        
        

      </div>

      
    </section>

    <section>
    <div className="sets-apart-section">
  <h2>What Sets Us Apart</h2>
  

  <div className="grid-item">
  
    <h3><FaUser /> <span>Personalized Attention</span> </h3>
    <p>Teachers at our school pay highly attention to every individual student, ensuring a tailored and effective learning experience.</p>
  </div>

  <div className="grid-item">
    <h3><LiaLanguageSolid /> <span>Multi Lingual Courses</span></h3>
    <p>Our school offers classes in English and Spanish, providing a diverse and inclusive educational environment for students of different language backgrounds.</p>
  </div>

  <div className="grid-item">
    <h3><FaChalkboard/> <span>Smart Classes</span></h3>
    <p>We have state-of-the-art smart classes equipped with the latest technology, enhancing the learning process and creating an interactive and engaging atmosphere for our students.</p>
  </div>
</div>

      
    </section>

    <div className='modernization-container'>
        <div className='modernization-hero-content'>
          <h2>Our Approach</h2>
          <hr/>
          <p>We strive to achieve continous improvement in the all round development of every ward in both academic as well as non academic context by our quality management system. A logistic approach is introduced to enable the child to consider and appreciate the beauty and wonders of the nature.</p>
          
          {/* <p>To nurture children in a multidimensional & subtle manner right from their childhood to adulthood in a caring & enriched environment with the best qualified, accomplished, experienced & kind hearted human being around them.</p> */}
        </div>

      </div>

    <section>
    <div className="sets-apart-section">

  <div className="grid-item">
  
    <h3><MdCastForEducation /> <span>Best Education</span> </h3>
    <p>Our school offers best education in town which is shown by the consistent best results in Rohtak</p>
  </div>

  <div className="grid-item">
    <h3><MdOutlineSportsBasketball /> <span>Student Clubs</span></h3>
    <p>We have a variety of student clubs bringing diversity to the knowledge of students</p>
  </div>

  <div className="grid-item">
    <h3><MdLibraryMusic/> <span>Co Curricular activities</span></h3>
    <p>Apart from academic courses, our school offers cuttid edge co curricular activities.</p>
  </div>
</div>

      
    </section>

    <div className='modernization-container'>
        <div className='modernization-hero-content'>
          <h2>Integrated Learning</h2>
          <hr/>
          <p>The school fosters a forward-thinking and practical atmosphere curated by a team of highly qualified and experienced educators, utilizing cutting-edge teaching tools and methods. We aim to integrate a nuanced and experiential approach into the educational journey, fostering a collaborative environment through parent-teacher meetings.</p>
          
          {/* <p>To nurture children in a multidimensional & subtle manner right from their childhood to adulthood in a caring & enriched environment with the best qualified, accomplished, experienced & kind hearted human being around them.</p> */}
        </div>

      </div>

      <WhatsAppButton />
      <Footer/>
    </>
  )
}

export default modernization

