"use client"
import React, { useState } from 'react'
import '../styles/Careers.css';
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/Whatsapp';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Link from 'next/link';


const Careers = () => {
  const [expandedTeachingDescriptions, setExpandedTeachingDescriptions] = useState([]);
  const [expandedNonTeachingDescriptions, setExpandedNonTeachingDescriptions] = useState([]);

  const toggleTeachingDescription = (index) => {
    const newExpandedTeachingDescriptions = [...expandedTeachingDescriptions];
    newExpandedTeachingDescriptions[index] = !newExpandedTeachingDescriptions[index];
    setExpandedTeachingDescriptions(newExpandedTeachingDescriptions);
  };

  const toggleNonTeachingDescription = (index) => {
    const newExpandedNonTeachingDescriptions = [...expandedNonTeachingDescriptions];
    newExpandedNonTeachingDescriptions[index] = !newExpandedNonTeachingDescriptions[index];
    setExpandedNonTeachingDescriptions(newExpandedNonTeachingDescriptions);
  };

  const [salutation, setSalutation] = useState('');

  const handleSalutationChange = (event) => {
      setSalutation(event.target.value);
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };


  const teachingStaffPositions = [
    { 
      title: 'English Teacher', 
      description: 'Join our team as an English Teacher at Ved Model Sr. Sec. School! We are seeking a passionate educator to inspire students in the art of language and literature. As an English Teacher, you will create engaging lesson plans, facilitate dynamic classroom discussions, and provide personalized instruction to promote language fluency and critical thinking skills. Ideal candidates will have a strong command of the English language, excellent communication skills, and a commitment to fostering a supportive learning environment. If you are dedicated to empowering students and igniting a love for learning, we invite you to apply!' 
    },
    { 
      title: 'Mathematics Teacher', 
      description: 'Join our team as a Mathematics Teacher at Ved Model Sr. Sec. School! We are seeking a passionate educator to inspire students in the world of numbers and problem-solving. As a Mathematics Teacher, you will develop innovative teaching strategies, engage students in hands-on learning experiences, and foster a deep understanding of mathematical concepts. Ideal candidates will have a strong mathematical background, excellent communication skills, and a dedication to nurturing students\' mathematical abilities. If you are ready to make a difference in students\' lives through the power of mathematics, we encourage you to apply!' 
    },
    { 
      title: 'Science Teacher', 
      description: 'Join our team as a Science Teacher at Ved Model Sr. Sec. School! We are seeking a dynamic educator to spark curiosity and exploration in the realm of science. As a Science Teacher, you will design captivating experiments, facilitate scientific inquiries, and inspire students to discover the wonders of the natural world. Ideal candidates will have a passion for science, excellent communication skills, and a commitment to fostering inquiry-based learning. If you are eager to ignite a love for science in students, we welcome you to apply!' 
    },
    { 
      title: 'History Teacher', 
      description: 'Join our team as a History Teacher at Ved Model Sr. Sec. School! We are seeking a dedicated educator to bring history to life for students. As a History Teacher, you will delve into the past, engage students in critical analysis, and inspire a deep appreciation for historical events and figures. Ideal candidates will have a passion for history, excellent communication skills, and a commitment to fostering historical literacy. If you are ready to make history meaningful and relevant to students, we encourage you to apply!' 
    },
    { 
      title: 'Art Teacher', 
      description: 'Join our team as an Art Teacher at Ved Model Sr. Sec. School! We are seeking a creative and enthusiastic educator to nurture artistic talent in students. As an Art Teacher, you will explore various art forms, inspire self-expression, and foster a love for creativity and aesthetics. Ideal candidates will have a passion for the arts, excellent communication skills, and a commitment to fostering artistic growth. If you are ready to inspire the next generation of artists, we invite you to apply!' 
    }
  ];
  

  const nonTeachingStaffPositions = [
    { 
      title: 'Administrative Assistant', 
      description: 'Join our team as an Administrative Assistant at Ved Model Sr. Sec. School! We are seeking a detail-oriented individual to provide administrative support and ensure the smooth operation of our school\'s administrative processes. As an Administrative Assistant, you will assist with clerical tasks, organize documents, and coordinate communication between staff, students, and parents. Ideal candidates will have strong organizational skills, proficiency in office software, and a friendly demeanor. If you are ready to contribute to the efficient functioning of our school\'s administrative department, we welcome you to apply!' 
    },
    { 
      title: 'IT Support Specialist', 
      description: 'Join our team as an IT Support Specialist at Ved Model Sr. Sec. School! We are seeking a knowledgeable professional to provide technical support and maintain our school\'s information technology infrastructure. As an IT Support Specialist, you will troubleshoot hardware and software issues, install and configure computer systems, and ensure network security. Ideal candidates will have strong problem-solving skills, experience with IT systems, and a passion for technology. If you are ready to support our school\'s IT needs and enhance our technological capabilities, we encourage you to apply!' 
    },
    { 
      title: 'Janitorial Staff', 
      description: 'Join our team as a Janitorial Staff member at Ved Model Sr. Sec. School! We are seeking a dedicated individual to maintain cleanliness and sanitation throughout our school facilities. As a member of the Janitorial Staff, you will perform cleaning duties, such as sweeping, mopping, and disinfecting surfaces, to ensure a safe and healthy environment for students and staff. Ideal candidates will have attention to detail, the ability to work independently, and a commitment to maintaining high standards of cleanliness. If you are ready to contribute to the upkeep of our school environment, we invite you to apply!' 
    },
    { 
      title: 'Cafeteria Staff', 
      description: 'Join our team as a Cafeteria Staff member at Ved Model Sr. Sec. School! We are seeking enthusiastic individuals to assist with food preparation, serving, and cleanup in our school cafeteria. As a member of the Cafeteria Staff, you will help ensure that students receive nutritious meals in a welcoming dining environment. Ideal candidates will have a passion for food service, the ability to work efficiently in a fast-paced environment, and a commitment to food safety standards. If you are ready to contribute to the well-being of our students through nutritious meals, we encourage you to apply!' 
    },
    { 
      title: 'Security Guard', 
      description: 'Join our team as a Security Guard at Ved Model Sr. Sec. School! We are seeking vigilant individuals to ensure the safety and security of our school premises. As a Security Guard, you will monitor activity on school grounds, patrol the premises, and respond to security incidents as needed. Ideal candidates will have strong observational skills, the ability to remain calm under pressure, and a commitment to maintaining a secure environment for students and staff. If you are dedicated to ensuring the safety of our school community, we welcome you to apply!' 
    }
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
      <div className='header-vision'>
        <Header navLinks={navLinks} />
      </div>



      <div className='careers-container'>
        <h1>Careers at <span>VED MODEL</span></h1>
        <p>Explore Opportunities to Shape Futures and Ignite Passion in Education. Join our dedicated team of educators, administrators, and support staff as we strive for excellence in nurturing young minds. Discover rewarding career paths that align with our commitment to fostering a dynamic and inclusive learning environment. At VED MODEL, we believe in empowering individuals to make a profound impact on the future generation. Join us on this exciting journey of education, growth, and inspiration.</p>

        <div className='careers-why'>
          <div className='careers-why-item'>
            <h2>Why choose Ved Model Sr. Sec. School?</h2>
            <ul>
              <li>Holistic learning environment blending functionality and aesthetics.</li>
              <li>State-of-the-art facilities: IT-enabled classrooms, well-equipped labs, libraries, and activity rooms.</li>
              <li>Focus on safety and security with CCTV, fire prevention, and medical facilities.</li>
              <li>Professional development opportunities for career advancement.</li>
              <li>Community support through counseling centers and day-boarding facilities.</li>
              <li>Emphasis on creativity and innovation in teaching.</li>
              <li>Collaborative and inclusive culture fostering teamwork and diversity.</li>
            </ul>
          </div>

          <div className='careers-why-item'>
            <Image width={300} height={300} src="/images/careers.webp" alt='careers' className='careers-img' />
          </div>

        </div>

        <h1><span>Current</span> Openings</h1>
        <div className='open-positions-grid'>
          <div className='positions-grid-item'>
            <h2>Teaching Staff Positions</h2>
            <ul>
              {teachingStaffPositions.map((position, index) => (
                <li key={index}>
                  <div>
                    <h3>{position.title}</h3>
                    <p>
                      {expandedTeachingDescriptions[index] || position.description.length <= 130
                        ? position.description
                        : `${position.description.slice(0, 130)}.......`}
                      <br />
                      {position.description.length > 130 && (
                        <span className='description-toggle'>
                        <span className='read-more' onClick={() => toggleTeachingDescription(index)}>
                          {expandedTeachingDescriptions[index] ? 'Read less' : 'Read more'}
                        </span>
                        <button className='apply-now-btn'>Apply Now</button>

                        </span>
                      )}
                    </p>
                   
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='positions-grid-item'>
            <h2>Non-Teaching Staff Positions</h2>
            <ul>
              {nonTeachingStaffPositions.map((position, index) => (
                <li key={index}>
                  <div>
                    <h3>{position.title}</h3>
                    <p>
                      {expandedNonTeachingDescriptions[index] || position.description.length <= 130
                        ? position.description
                        : `${position.description.slice(0, 130)}.......`}
                      {position.description.length > 130 && (
                        <span className='description-toggle'>
                        <span className='read-more' onClick={() => toggleNonTeachingDescription(index)}>
                          {expandedNonTeachingDescriptions[index] ? 'Read less' : 'Read more'}
                        </span>
                        <button className='apply-now-btn'>Apply Now</button>

                        </span>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

          </div>
        </div>


       <div className='careers-form'>
        <div className='careers-form-info'>

        <h1>Express your <span>Interest</span></h1>

       <p>Thank you for considering a career with us. We invite you to express your interest in joining our team by completing the form below. Even if you don&apos;t find relevant openings at the moment, your submission will provide valuable insights into your skills, experience, and career aspirations. This information will enable us to better understand how you might contribute to our organization and may lead to future opportunities that align with your interests and qualifications. We appreciate your interest in our company and look forward to the possibility of working together in the future.</p>

       <h2>Email us for any querry or information : </h2>
       <h3>
        <Link href="mailto:director@vedmsss.co.in" style={{color: '#e3a72f'}}>
          director@vedmsss.co.in
        </Link>
      </h3>
      <h3>
        <Link href="mailto:principal@vedmsss.co.in" style={{color: '#e3a72f'}}>
          principal@vedmsss.co.in
        </Link>
      </h3>
      <h3>
        <Link href="mailto:administrator@vedmsss.co.in" style={{color: '#e3a72f'}}>
          administrator@vedmsss.co.in
        </Link>
      </h3>
      <h3>
        <Link href="mailto:hr@vedmsss.co.in" style={{color: '#e3a72f'}}>
          hr@vedmsss.co.in
        </Link>
      </h3>
        </div>

        <div className='careers-form-info'>

       <form onSubmit={handleSubmit}>
                <FormControl fullWidth className="careers-form-control">
                    <InputLabel id="salutation-label">Salutation</InputLabel>
                    <Select
                    labelId="salutation-label"
                    id="salutation"
                    value={salutation}
                    onChange={handleSalutationChange}
                    label="Salutation"
                >
                        <MenuItem value="Mr">Mr</MenuItem>
                        <MenuItem value="Mrs">Mrs</MenuItem>
                        <MenuItem value="Miss">Miss</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="firstName"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    className="careers-form-control"
                />
                <TextField
                    id="lastName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    className="careers-form-control"
                />
                <TextField
                    id="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                    className="careers-form-control"
                />
                <TextField
                    id="position"
                    label="Position Interested In"
                    variant="outlined"
                    fullWidth
                    required
                    className="careers-form-control"
                />
                <div className="careers-form-control careers-file-input-container">
                    <label htmlFor="cv" className="careers-file-input-label">Upload CV:</label>
                    <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required />
                </div>
                <Button variant="contained" color="primary" type="submit" className="careers-submit-btn">
                    Submit
                </Button>
            </form>
       </div>
</div>
      </div>


      <div className='footer-vision'>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default Careers
