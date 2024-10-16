import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';

// side-images-of service slider

import yarnStore from "../assets/images/services/yarnStore.jpg"
import yarnDyeing from "../assets/images/services/yarnDyeing.jpg"
import knitting from "../assets/images/services/knitting.jpg"
import dyeingFinishing from "../assets/images/services/fabricDyeing.jpg"
import qualityControl from "../assets/images/services/yarnStore.jpg"
import processingLab from "../assets/images/services/processingLab.jpg"
import cutting from "../assets/images/services/cutting.jpg"
import printing from "../assets/images/services/printing.jpg"
import embroidery from "../assets/images/services/embroidery.jpg"
import swingThread from "../assets/images/services/cutting.jpg"
import stitching from "../assets/images/services/stitching.jpg"
import wareHouse from "../assets/images/services/wareHouse.jpg"

function ServicesMenu() {
    const [imageSelect, setImageSelect] = useState('');

    useEffect(() => {
        gsap.fromTo('li',
            {
                opacity: 0,
                y: -20,
                scale: 0
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.05,
            }
        );
    }, []);

    const handleMouseEnter = (image) => {
        setImageSelect(image);
        gsap.fromTo('.image',
            {
                opacity: 0,
                scale: 0
            },
            {
                opacity: 1,
                scale: 1,
                ease: 'power2.out',
                duration: 0.5
            }
        );
    };

    return (
        <>
            <div className='flex items-center justify-around h-[250px] bg-white shadow-lg'>
                <div className='flex items-center justify-around h-full w-1/2'>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(yarnStore)}
                            >
                                Yarn Store
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(yarnDyeing)}
                            >
                                Yarn Dyeing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(knitting)}
                            >
                                Knitting
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(dyeingFinishing)}
                            >
                                Fabric Dyeing & Finishing
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(qualityControl)}
                            >
                                Quality Control Lab
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(processingLab)}
                            >
                                Quality Control Lab
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(cutting)}
                            >
                                Cutting
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(printing)}
                            >
                                Printing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(embroidery)}
                            >
                                Embroidery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(swingThread)}
                            >
                                Sewing Thread
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(stitching)}
                            >
                                Stitching
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                className='py-1 inline-block'
                                onMouseEnter={() => handleMouseEnter(wareHouse)}
                            >
                                Wearhouse Packing-Shipping
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='w-1/4 p-3 h-full opacity-0 image'>
                    <img src={imageSelect} className='w-full h-full' alt="Selected" />
                </div>
            </div>
        </>
    );
}
export default ServicesMenu;

