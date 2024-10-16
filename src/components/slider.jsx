import React from "react";
import "../index.css";
import Video from "../assets/video/klash.mp4";



export default function slider() {
    return (
        <>
            <div className="w-full h-[calc(100vh-100px)] max-md:h-[calc(50vh-100px)] mt-[100px]">
                <video src={Video} muted autoPlay loop className="h-full m-auto object-cover w-full"></video>
            </div>
        </>
    );
}
