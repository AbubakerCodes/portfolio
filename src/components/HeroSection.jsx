import React from "react";
import {Link as ScrollLink, animateScroll as Scroll} from 'react-scroll';
import useScreenSize from "../hooks/useScreenSize";

export function HeroSection () {
    const isLargeScreen = useScreenSize();
    return (
    <>
        <section id="hero" 
        className="mx-auto max-w-7xl px-8 md:px-9 lg:px-16 flex items-center justify-center min-h-screen ">
            <div className="text-center">
                <h1 data-aos="fade-right" data-aos-duration="1500"
                 className="mb-1 text-headingColor text-4xl text-balance md:text-5xl font-[600]">Hi, i am Abubaker</h1>
                <h1 data-aos="fade-up" data-aos-duration="1500" 
                className="text-5xl md:text-6xl text-balance lg:text-7xl font-bold text-primaryColor">Full stack developer</h1>
                <p data-aos="fade-up" data-aos-duration="1500" 
                className="text-balance text-lg  max-w-[420px] mx-auto mt-6 mb-2 text-smallTextColor">I craft intuitive and visually stunning websites that leave a lasting impression.</p>
                <ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={isLargeScreen ? -80 : 50}>
                <button  className="rounded-full bg-primaryColor text-base text-white border-2 border-transparent hover:bg-smallTextColor  duration-300 ease-in- font-[500] px-12 py-3 mt-8 mb-0">Contact</button>
                </ScrollLink>
            </div>
        </section>
    </>  
    );
}