"use client"
import { useState } from 'react';
import { useEffect } from 'react';
import "../styles/Header.css"
import { FaAngleDown } from 'react-icons/fa'
import Link from 'next/link';
import Image from 'next/image';
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = ({ navLinks }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const mediaSize = 991;

  useEffect(() => {

    function handleResize() {
      if (window.innerWidth > mediaSize) {
        setIsNavOpen(false);
        setActiveMenuItem(null);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle("hidden-scrolling");
    if (!isNavOpen) {
      setActiveMenuItem(null);
    }
  };

  const handleMenuItemClick = (event, link) => {
    if (window.innerWidth <= mediaSize && link.dropdownLinks) {
      event.preventDefault();
      setActiveMenuItem(activeMenuItem === link.label ? null : link.label);
    }
  };
  const handleMenuItemClick2 = (event, link) => {
    event.preventDefault();
    setActiveMenuItem(link.label === activeMenuItem ? null : link.label);
  };


  return (
    <header className="header">
      <div className="container">
        <div className="header-main">
          <div className="logo">
            <Link href="/"><Image width={70} height={70} src='/images/logo.webp' alt='logo' /></Link>
          </div>
          <div className="open-nav-menu" onClick={toggleNav}>
            <span></span>
          </div>
          <div className={`menu-overlay ${isNavOpen ? "active" : ""}`} onClick={toggleNav}></div>
          {/* navigation menu start */}
          <nav className={`nav-menu ${isNavOpen ? "open" : ""}`}>
            <div className="close-nav-menu" onClick={toggleNav}>
              {/* <Image width={25} height={25} style={{ height: 'auto' }} src="/images/delete.webp" alt="close" /> */}
              <IoCloseCircleSharp className = "close-icon"/>
            </div>
            <ul className="menu">
              {navLinks.map((link, index) => (
                <li key={index} className={`menu-item ${link.dropdownLinks ? 'menu-item-has-children' : ''} ${activeMenuItem === link.label ? 'active' : ''}`} onClick={(event) => handleMenuItemClick(event, link)}>
                  <Link href={link.url}>{link.label}
                    {link.dropdownLinks && <FaAngleDown className="dropdown-icon" />}
                  </Link>
                  {link.dropdownLinks && (
                    <ul className="sub-menu">
                      {link.dropdownLinks.map((subLink, subIndex) => (
                        <li key={subIndex}  className="menu-item">
                          <Link  href={subLink.url}>
                            {subLink.label}
                            {/* <FaArrowRightLong className="submenu-arrow" /> */}

                            </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <ul className="menu-mobile">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className={`menu-item ${link.dropdownLinks ? 'menu-item-has-children' : ''} ${activeMenuItem === link.label ? 'active' : ''
                    }`}
                  onClick={(event) => handleMenuItemClick2(event, link)}
                >
                  <Link className='link-mobile' href={link.url}>
                    {link.label} {link.dropdownLinks && <FaAngleDown className="dropdown-icon" />}
                  </Link>
                  {link.dropdownLinks && activeMenuItem === link.label && (
                    <ul className="sub-menu">
                      {link.dropdownLinks.map((subLink, subIndex) => (
                        <li key={subIndex} className="menu-item">
                          <Link className='sub-link-mobile' href={subLink.url}>
                            {subLink.label}
                            <FaArrowRightLong className="submenu-arrow" />
                            <hr className='sub-menu-hr' />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;





