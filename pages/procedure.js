import React from 'react'
import '../styles/Procedure.css';
import Header from '@/components/Header';
import Image from 'next/image';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/Whatsapp';
import Link from 'next/link';


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

            <div className='procedure-container'>
                <h1>Admission Procedure</h1>
                {/* <hr/> */}

                <div className='procedure-grid'>
                    <div className='procedure-grid-item'>
                        <h3>Admission Procedure Overview: <br />Join Ved Model Sr. Sec. School</h3>
                        <hr className='underline' />
                        <h2>Registration for Admission:</h2>
                        <p>Collection of the Application Form from the school front desk on payment of Rs. 2000/-.
                            Submission of the duly filled Application Form/Prospectus, with necessary documents as detailed in Application form, within three days from the date of purchase.
                        </p>
                        <hr className='underline' />
                        <h2>On Grant of Admission:</h2>
                        <p>Completion of Admission formalities including payment of fee within three working days.
                        </p>


                        <p>Classes I onwards, complete academic transcripts of the previous two completed classes of the student must accompany the application form.
                            For the benefit of parents, the valid registrations shall be invited for an interaction with the Principal to share the vision, mission and philosophy of the school and define expectations of each other.
                        </p>
                    </div>
                    <div className='procedure-grid-item'>
                        <h3>Age Criteria</h3>
                        <hr className='procedure-underline' />
                        <ul>
                            <li>Pre Nursery : Minimum Age 2.5+ as on 31.03.2024</li>
                            <li>Nursery : Minimum Age 3.5+ as on 31.03.2024</li>
                            <li>KG : Minimum Age 4.5+ as on 31.03.2024</li>
                            <li>UKG : Minimum Age 5.0+ as on 31.03.2024</li>
                            <li>Class 1 : Minimum Age 2.5+ as on 31.03.2024</li>
                        </ul>

                        <Link href = "https://ved.nexterp.in/nlp/nlp/admission-login">

                        <button className='procedure-button'>
                            Proceed Now!
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='procedure-2'>
                <h1>Documents Required</h1>
                <div className='procedure-documents'>
                    <div className='procedure-grid-items'>
                    <h2>Documents Required:- [At the time of Registration]</h2>
               <ul>
                     <li>Self Attested copy of Birth Certificate.</li>
                     <li>Original Documents for verification.</li>
                     <li>One passport size photograph each of the Child and the Parent.</li>
                     <li>Complete academic transcripts of the previous two classes attended by the student (for classes II and above).</li>

                 </ul>
                    </div>
                    <div className='procedure-grid-items'><h2>Documents Required:- [At the time of Admission]</h2>
             <ul>
                     <li>Latest Residence Proof</li>
                     <li>PPP(Pariwar Pehchan Patra)</li>
                     <li>AADHAR ID of Parents and Students</li>
                     <li>Blood Group Report (in case not mentioned on the vaccination card).</li>
                     <li>Vaccination Record/Chart For Class II and above, Transfer Certificate (Original).</li>
                     <li>In case of interstate students, the TC should be counter signed by the education officer.</li>
                     <li>Caste Certificate - In case caste belongs to OBC/SC/ST.</li>
                     <li>Medical Form.</li>
                     <li>I-Card Form.</li>
                     <li>Detailed Marks Certificate of Class X issued by the education board (For Class XI).</li>
                     <li>Character Certificate (For Classes X onwards)</li>
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
