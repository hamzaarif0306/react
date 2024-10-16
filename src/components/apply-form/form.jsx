import Form from './form1';
import React from 'react';
import MobileMenu from '../mobileMenu';
import careerImg from './images/arlington-research-kN_kViDchA0-unsplash.jpg';
import './form.css';

// Form1 component
const Form1 = () => (
  <>
    <MobileMenu />
    <div className='h-[50vh] w-full my-10 flex items-center justify-center relative'>
      <img
        src={careerImg}
        className='h-full w-full object-cover'
        alt='Contact Us'
      />
      <div className='bg-black w-full h-full absolute opacity-[50%]'></div>
      <span className='absolute text-5xl font-bold z-40 text-white max-xs:text-3xl'>Application Form</span>
    </div>

    <div className='flex items-center justify-center min-h-[70vh] w-3/5 mx-auto max-lg:w-full max-lg:px-10 gap-5'>
      <div className='w-1/2 flex items-center justify-center'>
            <Form className='w-full' />
      </div>
      <div className='w-1/2 h-full max-md:hidden max-lg:w-2/5'>
        <img
          src={careerImg}
          className='w-full h-full object-cover'
          alt="Career"
        />
      </div>
    </div>
  </>
);

export default Form1;
