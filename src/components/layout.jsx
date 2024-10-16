import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Menu from "./menu";
import Footer from "./footer";
import Preloader from "./preloader";

function layout() {
    const [loading, setLoading] = useState(true);
    const [hide, setHide] = useState('hidden')

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 4500);
        return () => clearTimeout(timer) || setHide('flex');
    }, []);

    if (loading) {
        return <Preloader />;
    }
    return (
        <>
            <div className={`flex flex-col justify-between items-center`}>
                <Menu />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
export default layout