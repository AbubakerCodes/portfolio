import React from "react";
import {RiGithubLine, RiLinkedinLine, RiTwitterXLine} from '@remixicon/react';
import {Link as ScrollLink} from 'react-scroll';
import useScreenSize from "../hooks/useScreenSize";

function Footer () {
    const currentYear = new Date().getFullYear();
    const isLargeScreen = useScreenSize();
    return (
        <>
            <section id="footer" className="bg-[#12141e] text-gray-300 mt-4">
                <div className="flex items-center justify-center gap-32 md:gap-1 md:justify-between align-middle mx-auto max-w-7xl px-8 md:px-9 lg:px-16 py-16">
                      
                      {/* links */}
                <ul className="sm:hidden md:flex gap-8  lg:gap-12 items-center">
                <li>
                        <ScrollLink 
                        to="hero"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={isLargeScreen ? -80 : 50}
                        className="cursor-pointer text-sm font-[600] text-gray-400 hover:text-gray-500 transition duration-200 ease-in" >Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={isLargeScreen ? -80 : 50}
                        className="cursor-pointer text-sm font-[600] text-gray-400 hover:text-gray-500 transition duration-200 ease-in" >About</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={isLargeScreen ? -80 : 50}
                        className="cursor-pointer text-sm font-[600] text-gray-400 hover:text-gray-500 transition duration-200 ease-in" >Portfolio</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={isLargeScreen ? -80 : 50}
                        className="cursor-pointer text-sm font-[600] text-gray-400 hover:text-gray-500 transition duration-200 ease-in" >Contact</ScrollLink>
                    </li>
                </ul>
                <div className="flex gap-10 md:gap-8 lg:gap-12 items-center ">
                    <p>Follow me:</p>
                    
                    <a href="https://www.linkedin.com/in/abubakercodes" target="_blank">
                    <RiLinkedinLine size={35} color="#bbb" className="p-2 rounded-full bg-[#2b2d33]  hover:bg-[#202228] duration-200 ease-in"/>
                    </a>
                    <a href="https://twitter.com/AbubakerDev" target="_blank">
                    <RiTwitterXLine size={35} color="#bbb" className="p-2 rounded-full bg-[#2b2d33]  hover:bg-[#24262b] duration-200 ease-in"/>
                    </a>
                    <a href="https://github.com/AbubakerCodes" target="_blank">
                    <RiGithubLine size={35} color="#bbb" className="p-2 rounded-full bg-[#2b2d33]  hover:bg-[#212228] duration-200 ease-in"/>
                    </a>
                    </div>
                </div>
                <p className=" p-4 bg-[#1b1e29] text-sm text-gray-400 text-center mx-auto">Copyright  &copy; {currentYear} Abubaker. Allrights reserved.</p>
            </section>
        </>
    )
}

export {Footer};