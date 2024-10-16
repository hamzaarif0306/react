import React from 'react'
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";

const tl = gsap.timeline()
const navClose = () => {
    tl.to('.mobileMenu', {
        duration: 0.5,
        left: '-100%',
        display: 'none',
        ease: 'power1.out',
        opacity: 0,
    })
}

function mobileMenu({ scrollToSection }) {

    return (
        <>
            <div className='mobileMenu h-screen w-screen bg-[#444444] text-white left-[-100%] opacity-0 px-8 py-8 z-[995] fixed top-0'>
                <div className='w-full text-3xl mb-5'>
                    <IoClose className='ml-auto' onClick={() => navClose()} />
                </div>
                <div className='flex flex-col items-center w-full'>
                    <NavLink to='/' className='py-2 text-center w-full border-b-[2px] border-[#555555]' onClick={() => { navClose(), scrollToSection('section1') }}>
                        <span className='inline-block animate md:text-xl'>VIRTUAL TOUR</span>
                    </NavLink>
                    <NavLink to='/' className='py-2 text-center w-full border-b-[2px] border-[#555555]' onClick={() => { navClose(), scrollToSection('section2') }}>
                        <span className='inline-block animate md:text-xl'>SERVICES</span>
                    </NavLink>
                    <NavLink to='/' className='py-2 text-center w-full border-b-[2px] border-[#555555]' onClick={() => { navClose(), scrollToSection('section3') }}>
                        <span className='inline-block animate md:text-xl'>PRODUCTS</span>
                    </NavLink>
                    <NavLink to='/' className='py-2 text-center w-full border-b-[2px] border-[#555555]' onClick={() => { navClose(), scrollToSection('section4') }}>
                        <span className='inline-block animate md:text-xl'>CUSTOMERS</span>
                    </NavLink>
                    <NavLink to='/' className='py-2 text-center w-full border-b-[2px] border-[#555555]' onClick={() => { navClose(), scrollToSection('section5') }}>
                        <span className='inline-block animate md:text-xl'>SOCIAL</span>
                    </NavLink>
                    <NavLink to='/' className='py-2 text-center w-full border-b-[2px] border-[#555555]' onClick={() => { navClose(), scrollToSection('section6') }}>
                        <span className='inline-block animate md:text-xl'>COMPLIANCE</span>
                    </NavLink>
                    <NavLink to='/contact' className='py-2 text-center w-full border-b-[2px] border-[#555555]' >
                        <span className='inline-block animate md:text-xl'>CONTACT</span>
                    </NavLink>
                    <NavLink to='/career' className='py-2 text-center w-full border-b-[2px] border-[#555555]' >
                        <span className='inline-block animate md:text-xl'>CAREERS</span>
                    </NavLink>
                </div>
                <p className='text-[12px] md:text-[14px] tracking-wide leading-5 text-center mt-5 text '>© 2023 Klash Private Limited | last updated: August 2024</p>
            </div>
        </>
    )
}

export default mobileMenu