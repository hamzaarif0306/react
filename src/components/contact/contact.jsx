import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Contact from "./images/arlington-research-kN_kViDchA0-unsplash.jpg";
import PkOffice from "./images/adolfo-felix-PG8NyM_Mcts-unsplash.jpg";
import UkOffice from "./images/campaign-creators-qCi_MzVODoU-unsplash.jpg";
import Mail from "./images/stephen-phillips-hostreviews-co-uk-3Mhgvrk4tjM-unsplash.jpg";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import MobileMenu from "../mobileMenu";

gsap.registerPlugin(ScrollTrigger);

const Context = () => {


    useEffect(() => {
        gsap.fromTo('.move', {
            y: 100,
            scale: 0,
            opacity: 0
        }, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: .8,
            stagger: .3,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.abc',
                start: 'top 90%',
                end: 'bottom 90%',
                scrub: 1,
                anticipatePin: 1,
                markers: false
            }
        });

    }, []);

    return (
        <>
            <MobileMenu />

                <div className='h-[50vh] mt-[100px] w-full mb-10 flex items-center justify-center relative'>
                    <img
                        src={Contact}
                        className='h-full w-full object-cover'
                        alt='Contact Us'
                    />
                    <div className='bg-black w-full h-full absolute opacity-[50%]'></div>
                    <span className='absolute text-5xl font-bold z-40 text-white max-md:text-2xl'>CONTACT</span>
                </div>
            <div className='max-w-[1200px]'>
                <Link to='/' className='bg-[#3d3d3d] text-white py-2 px-2 rounded-md cursor-pointer max-md:ml-5'>Go Back</Link>

                <div className='flex flex-col items-center justify-between py-14 max-md:py-5 move'>
                    <h3 className='text-3xl mb-10 mediumFont tracking-wide max-md:text-[20px] '>PAKISTAN OFFICE</h3>
                    <div className='flex items-center justify-between max-md:flex-col-reverse '>
                        <div className="w-3/5 max-md:w-full">
                            <div className='inline-block ml-auto p-4'>
                                {/* <h4 className="mediumFont text-[20px] max-md:text-[16px] mb-5">ADDRESS</h4> */}
                                <span className="max-md:text-[17px] block py-[4px]">Klash (Pvt) Ltd</span>
                                <span className="max-md:text-[17px] block py-[4px]">117 J.B Paharang Drainage, Millat Town, Millat Road</span>
                                <span className="max-md:text-[17px] block py-[4px]">Dhanola, Faisalabad, Pakistan</span>
                                <Link className="max-md:text-[17px] block py-[4px]" href="tel:+9241111552741">Phone: +(92)-41-111-552-741</Link>
                                <Link className="max-md:text-[17px] block py-[4px]" href="mailto:info@klashpvt.com">info@klashpvt.com</Link>
                            </div>
                        </div>
                        <div className='w-2/5 max-md:w-full'>
                            <img src={PkOffice} alt="" />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-between py-20 max-md:py-5 move'>
                    <h3 className='text-3xl mb-10 mediumFont tracking-wide max-md:text-[20px] '>UK OFFICE</h3>
                    <div className='flex items-center justify-between flex-row-reverse max-md:flex-col-reverse '>
                        <div className="w-3/5 flex justify-end max-md:w-full max-md:block">
                            <div className='p-4'>
                                {/* <h4 className="mediumFont text-[20px] max-md:text-[16px] mb-5">ADDRESS</h4> */}
                                <span className="max-md:text-[17px] block py-[4px]">Klash Clothing Co.Ltd</span>
                                <span className="max-md:text-[17px] block py-[4px]">Unit M, Westwood Industrial Estate Arkwright</span>
                                <span className="max-md:text-[17px] block py-[4px]">Street Oldham OL9 9LZ (UK)</span>
                                <Link className="max-md:text-[17px] block py-[4px]" href="tel:+9241111552741">Phone: +(44)-161-624-1892</Link>
                                <Link className="max-md:text-[17px] block py-[4px]" href="mailto:info@klashpvt.com">info@klashpvt.com</Link>
                            </div>
                        </div>

                        <div className='w-2/5 max-md:w-full'>
                            <img src={UkOffice} alt="" />
                        </div>
                    </div>
                </div>

                <div className="w-5/6 h-[calc(100vh-100px)] max-md:w-full mx-auto move max-md:min-h-[30vh]">
                    <div className="text-center max-md:px-4">
                        <h3 className="mediumFont text-[25px] tracking-widest max-md:text-[20px] ">CONTACT US</h3>
                        <span className="text-[17px] max-md:text-[14px] py-3 block">
                            GET IN TOUCH WITH US BY USING THE ADDRESS BELOW OR FILLING OUT THE CONTACT FORM
                        </span>
                    </div>
                    <div className='flex items-center justify-between max-md:flex-col h-[100%]'>
                        <div className='w-1/3 max-md:w-full h-[70%] max-md:hidden'>
                            <img src={Mail} alt="" className='h-full w-full object-cover' />
                        </div>
                        <div className="w-1/2 max-md:w-full max-md:px-4">
                            <form className="flex flex-col w-full max-md:w-full">
                                <label className="mt-4" htmlFor="name">NAME</label>
                                <input className="py-1 rounded-md border border-[#9c9c9c]" type="text" name="name" id="name" required />

                                <label className="mt-4" htmlFor="email">EMAIL</label>
                                <input className="py-1 rounded-md border border-[#9c9c9c]" type="email" name="email" id="email" required />

                                <label className="mt-4" htmlFor="phone">PHONE</label>
                                <input className="py-1 rounded-md border border-[#9c9c9c]" type="tel" name="phone" id="phone" required />

                                <label className="mt-4" htmlFor="message">MESSAGE</label>
                                <textarea className="rounded-md border border-[#9c9c9c]" name="message" id="message" cols="30" rows="10"></textarea>

                                <button className="bg-[#3d3d3d] text-white px-10 py-3 w-1/2 flex items-center justify-center tracking-wide max-md:text-[16px] mt-6 rounded-md">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Context;
