import React, { useEffect, useRef } from 'react';
import { Collapse } from 'antd';
import { Image } from "antd";
import './product.css'
import Men1 from "./images/men1.jpg";
import Men2 from "./images/men2.jpg";
import Men3 from "./images/men3.jpg";
import Men4 from "./images/men4.jpg";
import Men5 from "./images/men5.jpg";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    key: '1',
    label: 'MENS',
    children:
      <div className='element flex items-center justify-center flex-wrap gap-5 overflow-auto h-[300px]'>
        <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
        <Image src={Men2} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
        <Image src={Men3} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
        <Image src={Men4} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
        <Image src={Men5} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
        <Image src={Men2} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      </div>,
  },
  {
    key: '2',
    label: 'WOMENS',
    children: <div className='element flex items-center justify-center flex-wrap gap-5 overflow-auto h-[300px]'>
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
    </div>,
  },
  {
    key: '3',
    label: 'OLDER BOYS',
    children: <div className='element flex items-center justify-center flex-wrap gap-5 overflow-auto h-[300px]'>
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
    </div>,
  },
  {
    key: '4',
    label: 'YOUNGER BOYS',
    children: <div className='element flex items-center justify-center flex-wrap gap-5 overflow-auto h-[300px]'>
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
    </div>,
  },
  {
    key: '5',
    label: 'OLDER GIRLS',
    children: <div className='element flex items-center justify-center flex-wrap gap-5 overflow-auto h-[300px]'>
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
    </div>,
  },
  {
    key: '6',
    label: 'YOUNGER GIRLS',
    children: <div className='element flex items-center justify-center flex-wrap gap-5 overflow-auto h-[300px]'>
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
      <Image src={Men1} className='w-[250px] sm:w-[200px] md:w-[200px] xl:w-[350px] 2xl:w-[400px]' alt="" />
    </div>,
  },
];
const App = () => {
  const collapseRef = useRef();

  useEffect(() => {
    const collapseItems = collapseRef.current?.querySelectorAll('.ant-collapse-item');

    if (collapseItems) {
      gsap.fromTo(collapseItems, {
        y: 100,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: .8,
        stagger: .3,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: collapseRef.current,
          start: 'top 70%',
          end: '90% 90%',
          scrub: 1,
          anticipatePin: 1,
          markers: false
        }
      });
    }
  }, []);
  return (
    <div className='py-14 flex items-center justify-center flex-col min-h-[calc(100vh-100px)] max-md:min-h-[calc(80vh-100px)]'>
      <h4 className='mb-4 mediumFont text-[35px] tracking-widest max-md:text-[25px]'>PRODUCTS</h4>
      <Collapse items={items} accordion style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', border: 'none', fontSize: '17px' }} ref={collapseRef} />
    </div>
  )
};
export default App;
