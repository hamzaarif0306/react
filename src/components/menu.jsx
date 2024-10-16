import React, { useState, useRef } from 'react';
import ServicesMenu from './servicesMenu';
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import gsap from "gsap";

const Menu = ({ scrollToSection }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const submenuRef = useRef(null);

  const tl = gsap.timeline();

  const navOpen = () => {
    tl.to('.mobileMenu', {
      delay: 0,
      duration: 0.5,
      left: '0',
      display: 'block',
      ease: 'power1.out',
      opacity: 1
    })
      .fromTo('.animate', {
        x: 50,
        opacity: 0
      }, {
        delay: 0,
        x: 0,
        duration: 0.3,
        stagger: 0.08,
        opacity: 1,
        ease: 'power1.out'
      })
      .fromTo('.text', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        duration: 0.3,
        opacity: 1,
        ease: 'power1.out'
      });
  };

  return (
    <>
      <div className='fixed top-0 z-[990] w-full h-[100px] bg-white shadow-lg lg:px-5' >
        <div className='flex items-center justify-between h-full max-w-[1250px] mx-auto px-2 max-lg:justify-center'>
          {/* Desktop Navigation */}

          <div className='gap-4 flex items-center justify-between max-lg:hidden'>
            <NavLink
              to='/'
              className='navLink'
              onClick={() => {
                scrollToSection('section1')
              }}
              onMouseEnter={() => setShowSubMenu(false)}
            >
              VIRTUAL TOUR
            </NavLink>
            <div>
              <NavLink
                className='navLink'
                onMouseEnter={() => setShowSubMenu(true)}
                aria-label="Toggle Services Menu"
                onClick={() => scrollToSection('section2')}
              >
                SERVICES
              </NavLink>
              <div
                onMouseLeave={() => setShowSubMenu(false)}
                ref={submenuRef}
                className={`absolute w-screen left-0 top-[100px] submenu ${showSubMenu ? 'show' : ''} lg:hidden`}
              >
                {showSubMenu && <ServicesMenu />}
              </div>
            </div>
            <NavLink
              to='/'
              className='navLink'
              onClick={() => scrollToSection('section3')}
              onMouseEnter={() => setShowSubMenu(false)}
            >
              PRODUCTS
            </NavLink>
            <NavLink
              to='/'
              className='navLink'
              onClick={() => scrollToSection('section4')}
              onMouseEnter={() => setShowSubMenu(false)}
            >
              CUSTOMERS
            </NavLink>
          </div>

          {/* Mobile Menu */}
          <div className='lg:hidden text-2xl h-full flex px-5 w-full items-center justify-between flex-row-reverse'>
            <IoMenu onClick={navOpen} className='cursor-pointer' />
            <NavLink
              onMouseEnter={() => setShowSubMenu(false)}
              to='/'
              className='flex flex-col items-center'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <h1 className='mediumFont text-[16px] tracking-widest max-xs:text-[12px]'>
                KLASH PRIVATE LIMITED
              </h1>
              <span className='text-[12px] tracking-wider leading-none max-xs:text-[8px]'>
                A KNITTED GARMENTS COMPANY
              </span>
            </NavLink>
          </div>

          {/* Logo and Additional Desktop Links */}
          <NavLink
            onMouseEnter={() => setShowSubMenu(false)}
            to='/'
            className='flex flex-col items-center max-lg:hidden'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <h1 className='mediumFont text-[20px] tracking-widest lg:text-[17px] max-sm:text-[20px] max-xs:text-[16px]'>
              KLASH PRIVATE LIMITED
            </h1>
            <span className='text-[14px] tracking-wider lg:text-[12px] max-sm:text-[14px] max-xs:text-[10px]'>
              A KNITTED GARMENTS COMPANY
            </span>
          </NavLink>

          <div className='gap-4 flex items-center justify-between max-lg:hidden'>
            <NavLink
              to='/'
              className='navLink'
              onClick={() => scrollToSection('section5')}
            >
              SOCIAL
            </NavLink>
            <NavLink
              to='/'
              className='navLink'
              onClick={() => scrollToSection('section6')}
              onMouseEnter={() => setShowSubMenu(false)}
            >
              COMPLIANCE
            </NavLink>
            <strong>  <NavLink
              to='contact'
              className='navLink'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onMouseEnter={() => setShowSubMenu(false)}
            >
              CONTACT
            </NavLink></strong>
            <strong> <NavLink
              to='career'
              className='navLink'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onMouseEnter={() => setShowSubMenu(false)}
            >
              CAREERS
            </NavLink></strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
