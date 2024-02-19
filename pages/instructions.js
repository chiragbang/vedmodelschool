

import React from 'react'
import "../styles/Instructions.css"
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/Whatsapp';
import Link from 'next/link';
import { FaArrowRight, FaFacebook, FaUser, FaYoutube } from 'react-icons/fa';


const director = () => {
  const instructionsData = [
      "Uniform cover for notebooks.",
      "Index-initial it dates wise.",
      "Day and date format like Friday, 24 April 2015.",
      "Writing of Title (CH) subtitle (in all CAPS).",
      "Demarcation between HW and CW.",
      "Ensure follow up work of mistakes or indicate review of the work done.",
      "Put your signature with date.",
      "Ask students to learn the significance of proper spacing and format with margin.",
      "Two meetings of presence/absence have to be marked for each day in the attendance register.",
      "Compile all the details of child's name, parents' (both father and mother) name and the complete address with (mobile No.) in the attendance register of each class.",
      "Report to your class in time.",
      "Regulate the movement of your students in corridors when going to the prayer ground and after the prayer or during recess.",
      "The class teachers shall be required to take their lunch along with the students in their respective classes.",
      "The class teachers shall also oversee and ensure the safe boarding of students in their respective bus routes.",
      "Only one boy and two girls shall be allowed for water/toilet purpose from each class by the concerned teacher in that class.",
      "Teachers are instructed to not allow the use of local dialect because it hampers the growth of the appropriate accent of English and Hindi. However, they need to strengthen and promote the use of English in day-to-day use by students.",
      "Please ensure proper shut down of multimedia setup before the final bell of the school daily in your respective classes. Any lapse in this regard shall be viewed seriously.",
      "Teachers are strictly prohibited from using derogatory words for students and their parents while assessing their performance, etc.",
      "Teachers and other members of staff are hereby informed that corporal punishment is strictly banned in our school. Any teacher or member of staff violating these instructions would do it at his/her own risk, and the school management shall not be held responsible for such an act."
    ];
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
          <h1 className='intro-title '>School <span>Instructions</span></h1>
          <div className="intro-yellow-line"></div>

          <ul>
           {instructionsData.map((instruction, index) => (
             <li key={index}>{instruction}</li>
           ))}
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




