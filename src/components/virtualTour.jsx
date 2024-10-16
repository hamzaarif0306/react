import React from 'react'
import Video from "../assets/video/klash.mp4";

function virtualTour() {
    return (
        <>
            <div className='mx-auto h-[calc(100vh-100px)] py-10 flex flex-col items-center justify-center max-md:h-[50vh]'>
                <h4 className='text-[25px] mediumFont tracking-widest max-md:text-[20px] mb-10'>VIRTUAL TOUR</h4>
                <div className='h-3/4'>
                    <video src={Video} controls className='mx-auto h-full object-cover max-md:mt-8'>
                    </video>
                </div>
            </div>
        </>
    )
}

export default virtualTour