import React, { useEffect, useRef } from 'react';
import { Collapse } from 'antd';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


import img1 from "../assets/img.png";
import img2 from "../assets/pngegg.png";
import img3 from "../assets/OEKOTEX.png";


const items = [
    {
        key: '1',
        label: 'CERTIFICATE',
        children: <div className='w-3/4 text-center mb-10 m-auto tracking-wide max-md:w-full'>
            <p>KLASH HAS GOT MANY AWARDS OF SOCIAL COMPLIANCE YEAR BY YEAR. CURRENTLY VALID AWARDS ARE MENTIONED BELOW:</p>
            <div className='flex items-center justify-between max-md:flex-col'>
                <img src={img3} className='h-[170px] max-md:h-[140px]' alt="OEKOTEX Certificate" />
                <div className='flex items-center justify-around w-full'>
                    <img src={img1} className='h-[100px] max-md:h-[90px]' alt="Certificate 1" />
                    <img src={img2} className='h-[100px] max-md:h-[90px]' alt="Certificate 2" />
                </div>
            </div>
        </div>
    },
    {
        key: '2',
        label: 'HUMAN RESOURCES',
        children: <div className='w-3/4 text-center mb-10 m-auto tracking-wide max-md:w-full'>
            <p>HR DEPARTMENT IS AN IMPORTANT DEPARTMENT FOR ANY ORGANIZATION. WHOSE MAIN TASK IS TO ARRANGE QUALITY WORK FORCE AND TO ARRANGE PROGRAMS FOR WORKERS TRAINING AND FOR IMPROVEMENT OF THEIR WORKING ABILITIES.</p>
        </div>
    },
    {
        key: '3',
        label: 'RECRUITMENT',
        children: <div className='w-3/4 text-center mb-10 m-auto tracking-wide max-md:w-full'>
            <p>KLASH HAS GOT MANY AWARDS OF SOCIAL COMPLIANCE YEAR BY YEAR. CURRENTLY VALID AWARDS ARE MENTIONED BELOW:</p>
            <div className='flex items-center justify-between max-md:flex-col'>
                <img src={img3} className='h-[170px] max-md:h-[140px]' alt="OEKOTEX Certificate" />
                <div className='flex items-center justify-around w-full'>
                    <img src={img1} className='h-[100px] max-md:h-[90px]' alt="Certificate 1" />
                    <img src={img2} className='h-[100px] max-md:h-[90px]' alt="Certificate 2" />
                </div>
            </div>
        </div>
    },
    {
        key: '4',
        label: 'OUR STORY',
        children: <div className='w-3/4 text-center mb-10 m-auto tracking-wide max-md:w-full'>
            <p><strong>The KLASH Group</strong> is a renowned vertical jersey wear clothing producer with a global reputation. The company's inspirational journey began with two visionary brothers, <strong>Mohammad Shafiq</strong> and <strong>Mohammad Ashfaq</strong>, who dreamed of establishing a textile industry. Their vision evolved into a leading textile exporter in Pakistan.</p>
            <p>Founded in <strong>1990</strong>, KLASH Group initiated its production activities in the United Kingdom. By <strong>2001</strong>, adapting to changing market conditions, the company established its first manufacturing facility in Faisalabad, Pakistan. This strategic move marked a significant milestone in its global expansion.</p>
            <p>The KLASH Group's success is built on a foundation of <strong>firmness</strong>, <strong>dedication</strong>, and <strong>teamwork</strong>, driving the company to achieve its ambitious goals. With a history of continuous development and success, KLASH Group now boasts yearly exports reaching <strong>30 million units</strong>. The company is committed to setting ethical standards in apparel manufacturing by providing high-quality jersey wear garments to its clients.</p>
            <p>KLASH Group remains devoted to excellence in manufacturing jersey knitwear, serving its clients with dignity and unwavering commitment.</p>

        </div>
    },
    {
        key: '5',
        label: 'OUR MISSION',
        children: <div className='w-3/4 text-center mb-10 m-auto tracking-wide max-md:w-full'>
            <p><strong>KLASH</strong> is dedicated to serving its clients with <strong>dignity</strong> and <strong>devotion</strong> by excelling in <strong>jersey knitwear manufacturing</strong>. Our mission is to drive <strong>innovation</strong> in the clothing industry through <strong>creative designs</strong> and the use of <strong>premium textile fabrics</strong>, all while adhering to our core ethics and principles.</p>
            <p>We strive to <strong>build and maintain an integrated manufacturing system</strong> that delivers <strong>high-quality fabrics</strong> for the clothing market. Our commitment extends to providing <strong>equal opportunities</strong> for our employees, fostering their <strong>personal and professional growth</strong> within a <strong>healthy and competitive working environment</strong>.</p>
            <p>KLASH is also focused on <strong>enhancing the skills</strong> of our employees, ensuring they become <strong>competent</strong> in their fields in an <strong>ethical</strong> and <strong>sustainable manner</strong>. We believe in <strong>continuous improvement</strong> and <strong>growth</strong>, both for our clients and our team, to achieve excellence in every aspect of our operations.</p>
        </div>
    },

];
const Social = () => {
    const collapseRef = useRef();

    useEffect(() => {
        const collapseItems = collapseRef.current?.querySelectorAll('.ant-collapse-item');
    
        if (collapseItems) {
          gsap.fromTo(collapseItems, {
            y: 100,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            stagger: .3,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: collapseRef.current,
              start: 'top 70%',
              end: '80% 90%',
              scrub: 1,
              anticipatePin: 1,
              markers: false
            }
          });
        }
      }, []);
    return (
        <div className='py-14 flex items-center justify-center flex-col min-h-[calc(100vh-100px)] max-md:min-h-[calc(80vh-100px)]'>
            <h4 className='mb-4 mediumFont text-[35px] tracking-widest max-md:text-[25px]'>COMPLIANCE</h4>
            <Collapse items={items} accordion style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', border: 'none', fontSize: '17px' }} ref={collapseRef} />
        </div>
    )
};
export default Social;

