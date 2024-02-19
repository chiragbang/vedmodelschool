import Image from 'next/image';
import React from 'react';
import { FaUser, FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "../styles/School.css"
import Link from 'next/link';
const School = () => {
  
  return (
    <>
    <div className="school-container">
      <Image
        width={1540}
        height={100}
        className='school-img'
        src="/images/school-background.webp"
        alt="School Background"
        priority={true}
      />


      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="content">
        <div className='content-info'>
          {/* <div className="admssn-marquee">
  <span>Admission Open for 2024-25</span>
</div> */}
          {/* Yellow Horizontal Row */}
          <div className="yellow-line"></div>

          {/* School Title */}
          <h1 className='title '>Ved Model<br /> The International School.</h1>

          {/* School Description */}
          <p className='description'>We strive to provide the highest quality education, bridging your child&apos;s success with a well-formed infrastructure of knowledge and resources.</p>

          {/* Action Buttons */}
          <div className='action-buttons'>
            <Link href="https://ved.nexterp.in/nlp/nlp/admission-login" >
              <button className='btn-1'>
                <FaUser />
                New Admission
              </button>
            </Link>

            <Link href="/results">
              <button className='btn-2'>
                Check VMTT Results <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

        <div className='social-icons'>
          <Link href='https://www.facebook.com/people/Ved-Model-The-International-School-Kalanaur-Rohtak/100057498457526/' className='icon'><FaFacebook /></Link>
          <Link href='https://www.youtube.com/@KalanaurBestSchoolVedModel' className='icon'><FaYoutube /></Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default School;






