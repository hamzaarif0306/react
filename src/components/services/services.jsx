import React, { useEffect, useRef } from 'react';
import { Collapse } from 'antd';
import './service.css'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


import yarnStore from "./images/yarnStore.jpg"
import yarnDyeing from "./images/yarnDyeing.jpg"
import knitting from "./images/knitting.jpg"
import dyeingFinishing from "./images/fabricDyeing.jpg"
import qualityControl from "./images/qualityLab.jpg"
import cutting from "./images/cutting.jpg"
import printing from "./images/printing.jpg"
import embroidery from "./images/embroidery.jpg"
import swingThread from "./images/cutting.jpg"
import stitching from "./images/stitching.jpg"
import wareHouse from "./images/wareHouse.jpg"



const items = [
  {
    key: '1',
    label: 'YARN STORE',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>In KLASH Private Limited yarn store, Yarn Stocked with a large Capacity of <strong>Ecru Yarn</strong>, <strong>Melange Yarn</strong> and <strong>Sewing Threads</strong>.</p>
          <br />
          <p>Our daily capacity of Yarn Store is 50,000 KG and monthly capacity is about 1.5M KG</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={yarnStore} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
  {
    key: '2',
    label: 'YARN DYEING',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>Within the yarn dyeing department, there are several subdivisions: <strong>Soft Winding</strong>, <strong>Dyeing</strong>, <strong>Hard Winding</strong>, <strong>Dryer</strong>, and <strong>HYDRO</strong>. Each of these departments houses machines with varying daily and monthly capacities.</p>
          <br />
          <p>Our yarn dyeing daily capacity is 6700 KG and monthly we have capacity is about 200,000 KG.</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={yarnDyeing} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
  {
    key: '3',
    label: 'KNITTING',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>In order to create top-tier knitted fabric, it's crucial to obtain high-quality raw materials and latest machines. KLASH ensuring to produce superior fabric as per requirement.</p>
          <br />
          <p>The Knitting department subdivides into four additional departments: <strong>Twill Tape</strong>, <strong>Draw Card</strong>, <strong>Flat Knitting</strong>, and <strong>Circular Knitting</strong>.</p>
          <br />
          <p>We have the capability to produce around 1.1 million kilograms of the finest quality fabric per month through knitting.</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={knitting} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
  {
    key: '4',
    label: 'FABRIC DYEING & FINISHING',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>The fabric dyeing section at Klash dye house boasts a range of advanced machinery including <strong>Sclavos Venus (HT-1, HT-6, HT-3)</strong>, <strong>Sclavos Athena (HT-1, HT-3, HT-6, HT-2)</strong>, and <strong>Airflow (HT-4)</strong> dyeing machines. These machines are adept at dyeing both 100% cotton and blended fabrics.</p>
          <br />
          <p>Our daily dyeing and finishing capacity is 40,000 KG, while on a monthly basis, we can handle up to 1.2 M kilograms of fabric dyeing and finishing.</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={dyeingFinishing} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
  {
    key: '5',
    label: 'QUALITY CONTROL LAB',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>Our quality control laboratory holds accreditation for serving clients such as <strong>Next</strong>, <strong>C & A</strong>, <strong>Marks & Spencer</strong>, <strong>Flyers Group</strong>, <strong>Tesco</strong>, and <strong>Brand Alliance</strong>. Moreover, we are actively pursuing certifications to cater to additional customers.</p>
          <br />
          <p>The current testing capabilities of our quality control lab include handling colorfastness, washing, water, etc., conducting physical tests such as fabric weight, and assessing garment appearance after wash.</p>
          <br />
          <p>Quality checks are implemented at each phase of production, beginning with Yarn, Fabric, Processing, Cutting, Stitching, and Packing. Prior to cutting the fabric, thorough assessments are made to ensure it meets the customer's criteria.</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={qualityControl} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
  {
    key: '6',
    label: 'CUTTING',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>Our cutting units boast advanced machinery such as the <strong>Gerber Plotter</strong>, <strong>Auto Spreader</strong>, <strong>Auto Cutter</strong>, <strong>Band Knife</strong>, <strong>Spreader</strong>, and <strong>Bierrebi</strong>.</p>
          <br />
          <p>The cutting department utilizes <strong>CAD/CAM</strong> systems for pattern design and grading. Its cutting-edge auto lay marking and plotting technology minimizes fabric wastage and maximizes fabric efficiency.</p>
          <br />
          <p>To maintain a steady supply of cut panels, manual laying and cutting production operate concurrently to meet stitching requirements.</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={cutting} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
  {
    key: '7',
    label: 'PRINTING',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>Our printing department is equipped with state of the art automatic printing machines which runs through the different color scheme to ensure the desired look and quality.</p>
          <br />
          <p>With a daily output of approximately 70,000 garment prints and a monthly capacity reaching 1.8 M pieces.</p>
          <br />
          <p>KLASH operates three distinct printing departments, each equipped with varying numbers of auto and manual machines, curing stations, embossing units, printing tables, exposing cameras, framing setups, mixing stations, heat beds, and flocking equipment.</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={printing} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
  {
    key: '8',
    label: 'EMBROIDERY',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>The Embroidery division at KLASH comprises two sections, each equipped with <strong>distinct machines</strong>, each with its own capacity as outlined below.</p>
          <br />
          <p>We can embroider approximately 11,500 pieces daily, and on a monthly basis, our range for garment embroidery extends to 299,000 pieces.</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={embroidery} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
  {
    key: '9',
    label: 'SEWING THREAD',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>The sewing thread production line comprises 17 dyeing machines with a combined capacity exceeding 450 kilograms.</p>
          <br />
          <p>Additionally, there are 20 machines including <strong>Hydro Extractors</strong>, Automatic <strong>High-Speed Cross Cone Winders</strong>, <strong>Cone Winding Machines</strong>, and <strong>Reeling Machines</strong>, each equipped with a capacity of 136 spindles.</p>
          <br />
          <p> Sewing Thread Daily Capacity of 7,000 Cones (5000 Meter Each) and the Capacity of per month of 182,000 Cones</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={swingThread} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
  {
    key: '10',
    label: 'STITCHING',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>We have overall 216 flows in all stitching units fully equipped with 6,000 machines such as <strong>Lock Stitch</strong>, <strong>Over Lock</strong>, <strong>Flat Lock</strong>, <strong>Button Attach</strong>, <strong>Button Hole Bar Tack</strong>, <strong>Eyelet Tipping and Cliping</strong>. This gives us flexibility and speed to produce many types of garments simultaneously.</p>
          <br />
          <p>We have the experienced and technical team in production and quality which ensure the tailoring art of stitching. A crucial element contributing to our growth and ensuring customer satisfaction</p>
          <br />
          <p>Our combined monthly capacity for complete stitching production is roughly three million pieces, with a daily output of one lakh pieces across all stitching units.</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={stitching} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
  {
    key: '11',
    label: 'WEARHOUSE PACKING-FINISHING',
    children:
      <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
        <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
          <p>The KLASH warehouse racking systems implemented in these environments are designed to efficiently arrange and store products of various sizes and types.</p>
          <br />
          <p>Our warehouse has the capability to pack 100000 pieces per day and 2.6 million pieces per month. Additionally, our storage capacity ranges from 1.2 M to 1.5 M pieces.</p>
        </div>
        <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
          <img src={wareHouse} className='w-full m-auto' alt="" />
        </div>
      </div>
  },
];
const App = () => {
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

    <div className='py-14 flex items-center justify-center flex-col min-h-[calc(100vh-100px)] max-md:min-h-[calc(80vh-100px)] max-md:py-14 '>
      <h4 className='mb-4 mediumFont text-[40px] tracking-widest max-md:text-[25px] '>SERVICES</h4>
      <Collapse items={items} accordion style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', border: 'none', fontSize: '16px', letterSpacing: '.16em', }} ref={collapseRef} />
    </div>
  )
};
export default App;
