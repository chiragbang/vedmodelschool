import React from 'react'
import "../styles/Footer.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer">
      <div className='top-footer'>
      <div className="footer__addr">
        <h1 className="footer__logo"><Image width={70}
          height={70} src='/images/logo.webp' alt='logo'/></h1>
        <h1 className='school-name'>Ved Model Sr. Sec. School</h1>

        <h2>Address</h2>

        <address>
          Nigana Road, MDR 122,
          Kalanaur, Rohtak<br />

          <Link className="footer__btn" href="mailto:vedkalanaur@rediffmail.com">Email Us</Link>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">About</h2>

          <ul className="nav__ul">
            <li>
              <Link href="/vision">Our Vision</Link>
            </li>

            <li>
              <Link href="/mission">Our Mission</Link>
            </li>

            <li>
              <Link href="/director">Director&apos;s Message</Link>
            </li>

            <li>
              <Link href="/principal">Principal&apos;s Message</Link>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Admissions</h2>

          <ul className="nav__ul">
            <li>
              <Link href="/rules">Admission Rules</Link>
            </li>

            <li>
              <Link href="#">Admission Criteria</Link>
            </li>

            <li>
              <Link href="#">Admission Procedure</Link>
            </li>


          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Quick Links</h2>

          <ul className="nav__ul">
            <li>
              <Link href="/exams">Examinations</Link>
            </li>

            <li>
              <Link href="#">Careers</Link>
            </li>

            <li>
              <Link href="/faqs">FAQs</Link>
            </li>


          </ul>
        </li>

      </ul>
      </div>
      

      <div className="legal">
        <p>&copy; 2024 - Ved Model Sr. Sec. School. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer