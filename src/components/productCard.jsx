import React from 'react'
import image from "../assets/images/men4.png";
function productCard() {
    return (
        <>
            <div className='w-[300px]'>
                <div><img src={image} alt="" /></div>
            </div>
        </>
    )
}

export default productCard