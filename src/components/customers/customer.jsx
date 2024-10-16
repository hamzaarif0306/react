import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from './images/asda.jpg';
import img2 from './images/next.jpg';
import img3 from './images/fatface.jpg';
import img4 from './images/tesco.jpeg';
import img5 from './images/ca.jpg';
import img6 from './images/zara.jpeg';
import img7 from './images/car.jpg';
import img8 from './images/original.png';
import img9 from './images/mango.jpg';
import img10 from './images/f&f.jpg';
import img11 from './images/matalan.jpg';
import img12 from './images/morrisons.jpg';
import img13 from './images/billa.jpg';
import img14 from './images/quik.jpg';
import img15 from './images/bestseller.jpg';
import img16 from './images/river.jpg';
import img17 from './images/sting.jpg';
import img18 from './images/soliver.jpg';
import img19 from './images/Topman.jpg';
import img20 from './images/shoeby.jpg';
import img21 from './images/we.jpg';
import img22 from './images/topshop.jpg';

function Customers() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            '.customer',
            { scale: 0, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                stagger: 0.6,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.trigger',
                    start: 'top 70%',
                    end: 'bottom 80%',
                    scrub: 1,
                    anticipatePin: 1,
                    markers: false // Set to true to debug and see markers
                }
            }
        );
    }, []);

    return (
        <div className='text-center py-10 trigger'>
            <h4 className='mb-10 mediumFont text-[25px] tracking-widest max-md:text-[20px]'>CUSTOMERS</h4>
            <div className='flex items-center flex-wrap gap-5 justify-center w-3/4 m-auto max-lg:w-full'>
                {[
                    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
                    img11, img12, img13, img14, img15, img16, img17, img18, img19,
                    img20, img21, img22
                ].map((img, index) => (
                    <img
                        key={index}
                        className='customer lg:w-[200px] md:w-[150px] sm:w-[120px] max-xs:w-[90px] max-sm:rounded-xl shadow-xl rounded-2xl'
                        src={img}
                        alt={`customer-${index}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Customers;
