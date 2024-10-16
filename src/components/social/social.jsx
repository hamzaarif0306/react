import React, { useEffect, useRef } from 'react';
import { Collapse } from 'antd';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



// images
import Park from "./images/DJI_0079.jpg";
import School from "./images/school.jpg";

const items = [
  {
    key: '1',
    label: 'KLASH PARK',
    children: <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
      <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
        <p>Klash established a sports park in <strong>Millat Town</strong> in 2012, marking a significant contribution to the local environment. Since then, we've continued to enhance the park's facilities to better serve the community. In 2014, we upgraded the park with new lighting, a sophisticated irrigation system for the grass, and the addition of more plants to enrich the green space. These improvements have created a more vibrant and sustainable environment, making the park a cherished spot for recreation and relaxation.</p>
      </div>
      <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
        <img src={Park} className='h-full m-auto' alt="" />
      </div>
    </div>
  },
  {
    key: '2',
    label: 'KAMALPUR INTERCHANGE PARK',
    children: <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
      <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
        <p>KLASH management has spearheaded a sustainability initiative by developing <strong>“Kamalpur Interchange Park”</strong> near Motorway Sargodha Road. With an investment of 1.5 to 2 million PKR, this project represents a significant commitment to environmental stewardship. The park was inaugurated by Federal Minister of Climate Change, <strong>Ms. Zartaj Gul</strong>, who praised KLASH for its proactive role in combating climate change. This new green space not only enhances local biodiversity but also offers a refreshing recreational area for the community, reflecting KLASH's dedication to creating a sustainable future.</p>
      </div>
      <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
        <img src={Park} className='h-full m-auto' alt="" />
      </div>
    </div>
  },
  {
    key: '3',
    label: 'WATER PLANTS',
    children: <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
      <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
        <p>KLASH management has also undertaken a commendable initiative to enhance access to clean drinking water by establishing “Drinking Water Plants” at various locations both inside and outside the city. Each plant, costing 2 million PKR, serves as a vital resource for communities. The ongoing maintenance and operational costs for each plant are between 15,000 to 20,000 PKR. To date, KLASH has contributed 60 to 70 of these plants across different areas, significantly improving water accessibility and quality for numerous residents. This initiative underscores KLASH's commitment to community well-being and sustainable development.</p>
      </div>
      <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
        <img src={Park} className='h-full m-auto' alt="" />
      </div>
    </div>
  },
  {
    key: '4',
    label: 'CONTRIBUTION IN SCHOOLS',
    children: <div className='py-10 flex items-center justify-between gap-3 max-md:flex-col-reverse max-md:py-5 max-lg:px-5'>
      <div className='w-3/5 text-left max-md:w-full max-md:text-center max-md:h-3/5'>
        <p>KLASH management is actively supporting a local government school by providing essential resources such as science lab equipment, school furniture, and monthly teacher salaries. With a total investment of 1.5 to 2 million PKR, this ongoing project aims to enhance the educational environment and ensure better learning opportunities for students. Additionally, KLASH commits 400,000 to 500,000 PKR each month towards staff salaries, underscoring its dedication to educational development and community support. This initiative reflects KLASH's commitment to fostering educational growth and supporting local communities.</p>
      </div>
      <div className='w-2/5 max-md:h-2/5 max-md:w-full'>
      <img src={School} className='h-full m-auto' alt="" />
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
           end: 'bottom 90%',
          scrub: 1,
          anticipatePin: 1,
          markers: false
        }
      });
    }
  }, []);

  return (

    <div className='py-14 flex items-center justify-center flex-col min-h-[calc(100vh-100px)] max-md:min-h-[calc(80vh-100px)] max-md:p-0 '>
      <h4 className='mb-4 mediumFont text-[40px] tracking-widest max-md:text-[25px] '>SOCIAL</h4>
      <Collapse items={items} accordion style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', border: 'none', fontSize: '16px', letterSpacing: '.16em', }} ref={collapseRef} />
    </div>
  )
};
export default App;
