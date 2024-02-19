// components/VideoBackground.js
import React from 'react';
import { TbHandFinger } from "react-icons/tb";
import { MdSlowMotionVideo } from "react-icons/md";
import "../styles/HomeVideo.css"
import Link from 'next/link';
import Image from 'next/image';

const VideoBackground = () => {
  return (
    <div className="homeVideo-container">

      

<Image
  width={1540}
  height={100}
  className='school-img'
  src="/images/school-background.webp"
  alt="School Background"
/>

      {/* Overlay */}
      <div className="videoOverlay"></div>

      {/* WHOLE CONTENT */}
      <div className='video-Content'>

        {/* Heading */}
        <div>
          <h1 className='video-Heading'>Because your Child deserves to <span>SHINE.</span></h1>
        </div>

        {/* Content */}
        <div>
          <h3 className='video-content-info '>Admissions Open for 2024-25.</h3>
          <h3 className='video-content-info '>Limited Seats Available.</h3>
          <h3 className='video-content-info '>Claim your spot—enroll for a new admission ASAP!</h3>
        </div>

        {/* Buttons */}
        <div className='video-btn'>

          <Link href="https://ved.nexterp.in/nlp/nlp/admission-login" target='_blank' rel="noopener noreferrer">
            <button className='admsnn-Btn'>
              <TbHandFinger />
              New Admission
            </button>
          </Link>


          <Link href="https://youtu.be/FcJ8JA8ZlrQ?si=-K8rdysr-lUGBnYc" target="_blank" rel="noopener noreferrer">
            <button className='youtube-btn'>
              <MdSlowMotionVideo />
              Video Tour
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default VideoBackground;


