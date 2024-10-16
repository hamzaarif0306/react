import React from 'react'
import { NavLink } from "react-router-dom";
import "../index.css";

function footer() {
    return (
        <>
            <div className='bg-[#f1f1f1] w-full flex items-center justify-center flex-col py-7 text-[#575756] max-lg:py-3 max-lg:duration-500 max-lg:transition-all'>
                <div className='flex items-center gap-7 text-[12px] text-[#575756]'>
                    <NavLink className='navLink text-[12px]' to='/'>INSTAGRAM</NavLink>
                    <NavLink className='navLink text-[12px]' to='/'>TWITTER</NavLink>
                    <NavLink className='navLink text-[12px]' to='/'>LINKEDIN</NavLink>
                </div>
                <span className='py-[10px] navLink text-[12px] max-md:text-[12px]'>Terms & Conditions</span>
                <span className='text-[12px] max-md:text-[12px]'>PRIVACY © ALL RIGHTS RESERVED, KLASH. PVT LTD</span>
            </div>

        </>
    )
}

export default footer