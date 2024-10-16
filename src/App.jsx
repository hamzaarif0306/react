import React, { useRef } from 'react';
import Slider from './components/slider.jsx';
import VirtualTour from './components/virtualTour.jsx';
import Services from './components/services/services.jsx';
import Products from './components/products/products.jsx';
import Social from './components/social/social.jsx';
import Customers from './components/customers/customer.jsx';
import Compliance from './components/compliance.jsx';
import Menu from "./components/menu.jsx";
import MobileMenu from "./components/mobileMenu.jsx";
const App = () => {
    const sectionRefs = {
        section1: useRef(null),
        section2: useRef(null),
        section3: useRef(null),
        section4: useRef(null),
        section5: useRef(null),
        section6: useRef(null),
        section7: useRef(null),
        section8: useRef(null),
    };
    const scrollToSection = (sectionId) => {
        // console.log(sectionId);
        const section = sectionRefs[sectionId];
        // console.log(section.current);
        if (section && section.current) {
            const offset = 100;
            const sectionTop = section.current.getBoundingClientRect().top + window.scrollY;
            // console.log(sectionTop);
            window.scrollTo({
                top: sectionTop - offset,
                behavior: 'smooth'
            });
        }
    };

    

    return (
        <>
            <MobileMenu scrollToSection={scrollToSection} />
            <Menu scrollToSection={scrollToSection} />
            <Slider />
            <div ref={sectionRefs.section1}>
                <VirtualTour />
            </div>
            <div ref={sectionRefs.section2}>
                <Services />
            </div>
            <div ref={sectionRefs.section3}>
                <Products />
            </div>
            <div ref={sectionRefs.section4}>
                <Customers />
            </div>
            <div ref={sectionRefs.section5}>
                <Social />
            </div>
            <div ref={sectionRefs.section6}>
                <Compliance />
            </div>
        </>
    );
};

export default App;







