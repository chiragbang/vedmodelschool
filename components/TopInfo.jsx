import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import "../styles/TopInfo.css";

const TopInfo = () => {
  return (
    <marquee className="top-marquee">
      <Link href="/results" className='top-link'>
        
          <span>VMTT Results are out Now!</span>
          <span>Click here to check RESULT</span>
          <span>VMTT Results are out Now!</span>
          <span>Click here to check RESULT</span>
          <span>VMTT Results are out Now!</span>
          <span>Click here to check RESULT</span>
          <span>VMTT Results are out Now!</span>
          <span>Click here to check RESULT</span>
          <span>VMTT Results are out Now!</span>
          <span>Click here to check RESULT</span>
          <span>VMTT Results are out Now!</span>
          <span>Click here to check RESULT</span>
          <span>VMTT Results are out Now!</span>
          <span>Click here to check RESULT</span>


      </Link>
    </marquee>
  );
}

export default TopInfo;

